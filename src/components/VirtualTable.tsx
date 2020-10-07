import React, { useState, useEffect, useRef } from "react";
import { VariableSizeGrid as Grid } from "react-window";
import classNames from "classnames";
import { Table } from "antd";
import ResizeObserver from "rc-resize-observer";

export default function VirtualTable(props: any) {
  const { columns, scroll } = props;
  const [tableWidth, setTableWidth] = useState<number>(0);

  const widthColumnCount = columns.filter(
    ({ width }: { width: string }) => !width
  ).length;

  const mergedColumns: any = columns.map((column: any): any => {
    if (column.width) {
      return column;
    }

    return {
      ...column,
      width: Math.floor(tableWidth / widthColumnCount),
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

  const renderVirtualList = function (
    rawData: any,
    { scrollbarSize, ref, onScroll }: any
  ) {
    ref.current = connectObject;
    const totalHeight = rawData.length * 54;

    console.log("arguments", arguments);

    return (
      <Grid
        ref={gridRef}
        className='virtual-grid'
        columnCount={mergedColumns.length}
        columnWidth={(index: number) => {
          const { width } = mergedColumns[index];
          return totalHeight > scroll.y && index === mergedColumns.length - 1
            ? width - scrollbarSize - 1
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
            {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
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
        width={200}
        components={{
          body: renderVirtualList,
        }}
      />
    </ResizeObserver>
  );
}
