import React from "react";
import styles from "./App.module.scss";
import { Typography, Slider } from "antd";

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
        <Input
          value={formData.eth}
          name="ETH"
          changeHandler={formHandler}
          focusHandler={setFocus}
        />
      </section>
      <section className={styles.bottomContainer}>
        <Typography
          style={{
            color: "white",
            fontSize: "1rem",
            textAlign: "right",
            paddingTop: "1rem",
            paddingRight: "19px",
          }}
        >
          {leverage}X
        </Typography>
        <div className={styles.sliderContainer}>
          <Slider
            value={leverage}
            min={1}
            max={10}
            dots
            trackStyle={{
              backgroundColor: "salmon",
            }}
            handleStyle={{
              backgroundColor: "black",
            }}
            onChange={(value) => setLeverage(value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              style={{
                color: "white",
                fontSize: "1rem",
                opacity: 0.5,
              }}
            >
              1X
            </Typography>
            <Typography
              style={{
                color: "white",
                fontSize: "1rem",
                opacity: 0.5,
              }}
            >
              10X
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
