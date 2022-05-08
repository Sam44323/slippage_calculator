import React from "react";
import styles from "./App.module.scss";
import { Typography } from "antd";

import Input from "./components/Input";

const App: React.FC = () => {
  const [usdp, setUsdp] = React.useState("");
  const [eth, setEth] = React.useState("");
  const [focus, setFocus] = React.useState<"usdp" | "eth">("usdp");
  const [leverage, setLeverage] = React.useState(1);
  const [slippage, setSlippage] = React.useState(0.1);

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
          value={usdp}
          name="USDP"
          changeHandler={setUsdp}
          focusHandler={setFocus}
        />
      </section>
    </div>
  );
};

export default App;
