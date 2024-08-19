
function MoneyUSD(props) {

    return (
        <>
            <div className="money usd">
                <div>{(props.money * 87.99).toFixed(2)}</div>
                cny
            </div>
        </>
    );
}
export default MoneyUSD;