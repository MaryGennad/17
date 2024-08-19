function MoneyCNY(props) {

    return (
        <>

            <div className="money cny">
                <div>{(props.money * 11.89).toFixed(2)}</div>
                cny
            </div>
        </>
    );
}
export default MoneyCNY;