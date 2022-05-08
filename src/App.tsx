import React from "react";
import styles from "./App.module.scss";
import { Typography } from "antd";

import Input from "./components/Input";

const App: React.FC = () => {
  const [formData, setFormData] = React.useState<{
    usdp: string;
    eth: string;
  }>({
    usdp: "0.00",
    eth: "0.00",
  });
  const [focus, setFocus] = React.useState<"usdp" | "eth">("usdp");
  const [leverage, setLeverage] = React.useState(1);
  const [slippage, setSlippage] = React.useState(0.1);

  const formHandler = (key: "usdp" | "eth", value: string) => {
    console.log(parseFloat(value));
    if (isNaN(parseFloat(value)) && value.length > 0) return;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <div className={styles.AppContainer}>
      <Typography
        style={{
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center",
          paddingTop: "1rem",
        }}
      >
        Slippage Calculator
      </Typography>
      <section className={styles.inputContent}>
        <Input
          value={formData.usdp}
          name="USDP"
          changeHandler={formHandler}
          focusHandler={setFocus}
        />
      </section>
    </div>
  );
};

export default App;
