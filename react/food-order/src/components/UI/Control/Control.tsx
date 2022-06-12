import { FC, forwardRef } from "react";
import classes from "./Control.module.css";

interface Props {
  label: string;
  control: {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
  };
}

const Control = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.control.id}>{props.label}</label>
      <input ref={ref} {...props.control} />
    </div>
  );
});

export default Control;
