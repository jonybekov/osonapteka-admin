import React from "react";
import { Input } from "antd";
import { InputProps } from "antd/lib/input/Input";

interface NumericInputProps extends InputProps {
  value?: string;
  onInputChange?: Function;
  onInputBlur?: Function;
}

export default function NumericInput(props: NumericInputProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let inputAsNum = parseInt(value);
    const reg = /^-?\d*(\.\d*)?$/;
    if (
      (!isNaN(inputAsNum) && reg.test(value)) ||
      value === "" ||
      value === "-"
    ) {
      if (props.onInputChange) {
        props.onInputChange(value);
      }
    }
  };

  // '.' at the end or only '-' in the input box.
  const onBlur = () => {
    const { value, onInputBlur, onInputChange } = props;
    let valueTemp = value;
    if (value) {
      if (value.charAt(value.length - 1) === "." || value === "-") {
        valueTemp = value.slice(0, -1);
      }
    }

    // onChange(valueTemp.replace(/0*(\d+)/, "$1"));

    if (onBlur) {
      onBlur();
    }
  };

  return <Input {...props} onChange={onChange} onBlur={onBlur} />;
}
