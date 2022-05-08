import React from "react";
import { Typography } from "antd";

import styles from "../styles/components/Input.module.scss";

interface IProps {
  name: string;
  changeHandler: (value: string) => void;
  focusHandler: any;
  value: string;
}

const Input: React.FC<IProps> = (props) => {
  return (
    <div className={styles.InputContainer}>
      <Typography
        style={{
          color: "white",
          fontSize: "14px",
          marginTop: "19px",
        }}
      >
        Amount
      </Typography>
      <input
        value={props.value}
        onChange={(e) => props.changeHandler(e.target.value)}
        onFocus={() => props.focusHandler(props.name)}
      />
    </div>
  );
};

export default Input;
