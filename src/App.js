import "./index.css";
import { useState } from "react";

const MoneyConverter = () => {
  const [money, setMoney] = useState("");

  const handleInput = (e) => {
    const rubles = e.target.value;
    setMoney(rubles);
  };

  const changeMoney = () => {
    const usd = (money * 87.99).toFixed(2);
    const eur = (money * 95.18).toFixed(2);
    const cny = (money * 11.89).toFixed(2);
    return { usd, eur, cny };
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
          <div className="money usd">
            <div>{changeMoney().usd}</div>
            usd
          </div>
          <div className="money eur">
            <div>{changeMoney().eur}</div>
            euro
          </div>
          <div className="money cny">
            <div>{changeMoney().cny}</div>
            cny
          </div>
        </div>
      </div>
    </>
  );
};
export default MoneyConverter;