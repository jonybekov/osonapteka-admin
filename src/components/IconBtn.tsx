import { Tooltip } from "antd";
import React from "react";
import colorToBackground from "../utils/colorToBackground";

interface IconBtnProps {
  title?: string;
  color: "primary" | "danger" | "yellow" | "blue" | "black" | "green";
  icon: any;
  disabled?: boolean;
  clickHandler?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function IconBtn({
  title,
  color,
  icon,
  disabled,
  clickHandler,
  ...rest
}: IconBtnProps) {
  const backgroundColor = colorToBackground(color);

  return (
    <Tooltip title={title && !disabled ? title : null}>
      <div
        className={"cursor-pointer icon-btn mx-2"}
        onClick={clickHandler ? clickHandler : () => {}}
        {...rest}>
        {React.createElement(icon, {
          className: disabled
            ? "text-gray-500 cursor-not-allowed"
            : backgroundColor,
        })}
      </div>
    </Tooltip>
  );
}
