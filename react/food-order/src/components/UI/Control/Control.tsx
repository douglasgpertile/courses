import { FC } from "react";
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

const Control: FC<Props> = ({ label, control }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={control.id}>{label}</label>
      <input {...control} />
    </div>
  );
};

export default Control;
