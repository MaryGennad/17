function MoneyEUR(props) {

    return (
        <>
            <div className="money eur">
                <div>{(props.money * 95.18).toFixed(2)}</div>
                cny
            </div>
        </>
    );
}
export default MoneyEUR;