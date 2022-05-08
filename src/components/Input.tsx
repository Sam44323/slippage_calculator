import React from "react";
import styles from "../styles/components/Input.module.scss";

interface IProps {
  name: string;
  focused: boolean;
  changeHandler: (value: string) => void;
  value: string;
}

const Input: React.FC = () => {
  return <div>Input</div>;
};

export default Input;
