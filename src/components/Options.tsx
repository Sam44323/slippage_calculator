import React from "react";
import styles from "../styles/components/Options.module.scss";

interface OptionProps {
  value: string;
  clickHandler: () => void;
  active: boolean;
}

const Options: React.FC<OptionProps> = (props) => {
  return (
    <div
      className={styles.OptionsContainer}
      onClick={props.clickHandler}
      style={{
        backgroundColor: props.active ? "#fff" : "transparent",
      }}
    >
      {props.value} %
    </div>
  );
};

export default Options;
