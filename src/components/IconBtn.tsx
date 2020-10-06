import { Tooltip } from "antd";
import React from "react";
import colorToBackground from "../utils/colorToBackground";

interface IconBtnProps {
  title?: string;
  color: "primary" | "danger" | "yellow" | "blue" | "black" | "green";
  icon: any;
}

export default function IconBtn({ title, color, icon, ...rest }: IconBtnProps) {
  const backgroundColor = colorToBackground(color);

  return (
    <Tooltip title={title ? title : null}>
      <div className={" cursor-pointer icon-btn mx-2"} {...rest}>
        {React.createElement(icon, {
          className: "text-gray-500 hover:" + backgroundColor,
        })}
      </div>
    </Tooltip>
  );
}
