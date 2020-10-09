import React, { useState, useEffect, useRef } from "react";
import { VariableSizeGrid as Grid } from "react-window";
import classNames from "classnames";
import { Checkbox, Table } from "antd";
import ResizeObserver from "rc-resize-observer";
import AutoSizer from "react-virtualized-auto-sizer";
import { TableProps } from "antd/lib/table";

interface VirtualTableProps extends TableProps<any> {
  actions?: any;
  columns: any;
  scroll: any;
}

export default function VirtualTable(props: VirtualTableProps) {
  const { columns, scroll, actions, rowSelection } = props;
  const [tableWidth, setTableWidth] = useState<number>(0);

  // filter columns which has no width property
  const widthColumnCount = columns.filter(({ width }: any) => !width).length;

  // console.log("COlumns", widthColumnCount);

  const mergedColumns: any = columns.map((column: any) => {
    if (column.width) {
      return column;
    }

    return {
      ...column,
      width: Math.floor((tableWidth * 2) / widthColumnCount),
    };
  });

  const gridRef = useRef<any>();
  const [connectObject] = useState<any>(() => {
    const obj = {};
    Object.defineProperty(obj, "scrollLeft", {
      get: () => null,
      set: (scrollLeft: number) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({ scrollLeft });
        }
      },
    });

    return obj;
  });

  const resetVirtualGrid = () => {
    gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: false,
    });
  };

  useEffect(() => resetVirtualGrid, [tableWidth]);

  const renderHeaderCell = (props: any) => {
    // console.log("header props", props);

    return <th className={props.className}>{props.children[1]}</th>;
  };

  const renderHeaderWrapper = (props: any) => {
    // console.log("header wrapper props", props);
    const { flattenColumns } = props.children[0].props;

    return (
      <tr className=''>
        {flattenColumns.map((col: any) => (
          <th style={{ width: col.width }}>{col.title}</th>
        ))}
      </tr>
    );
  };

  const renderVirtualList = function (
    rawData: any,
    { scrollbarSize, ref, onScroll }: any
  ) {
    ref.current = connectObject;
    const totalHeight = rawData.length * 36;

    // console.log("Total height", rawData.length);
    // console.log("data", rawData);

    return (
      <Grid
        ref={gridRef}
        className='virtual-grid'
        columnCount={mergedColumns.length}
        columnWidth={(index: number) => {
          const { width } = mergedColumns[index];
          return totalHeight > scroll.y && index === mergedColumns.length - 1
            ? width - scrollbarSize - 2
            : width;
        }}
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 36}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({ scrollLeft });
        }}>
        {({ columnIndex, rowIndex, style }: any) => (
          <div
            className={classNames("virtual-table-cell", {
              "virtual-table-cell-last":
                columnIndex === mergedColumns.length - 1,
            })}
            style={style}>
            {/* ROw selection */}
            {rowSelection && columnIndex == 0 ? (
              <span className='mr-4'>
                <Checkbox onChange={() => console.log(rawData[rowIndex])} />
              </span>
            ) : null}

            {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
            {/* Row actions */}
            {mergedColumns[columnIndex].dataIndex === "action" && actions
              ? actions.render(rawData[rowIndex])
              : null}
          </div>
        )}
      </Grid>
    );
  };

  return (
    <ResizeObserver
      onResize={({ width }) => {
        setTableWidth(width);
      }}>
      <Table
        {...props}
        className='virtual-table'
        columns={mergedColumns}
        pagination={false}
        components={{
          body: renderVirtualList,
        }}
      />
    </ResizeObserver>
  );
}
