import MoneyCNY from "./component/MoneyCNY";
import MoneyEUR from "./component/MoneyEUR";
import MoneyUSD from "./component/MoneyUSD";
import "./index.css";
import { useState } from "react";

const MoneyConverter = () => {
  const [money, setMoney] = useState("");

  const handleInput = (e) => {
    const rubles = e.target.value;
    setMoney(rubles);
  };

  return (
    <>
      <div className="container">
        <h1>¯\_(ツ)_/¯</h1>
        <h2>Money Converter</h2>
        <div className="wrapper">
          <input
            type="number"
            onChange={handleInput}
            placeholder="enter rubles"
          ></input>
          <MoneyUSD money={money} />
          <MoneyEUR money={money} />
          <MoneyCNY money={money} />
        </div>
      </div>
    </>
  );
};
export default MoneyConverter;
