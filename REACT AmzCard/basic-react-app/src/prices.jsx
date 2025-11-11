function prices({oldPrices,newPrices}){
    let style={textDecorationLine:"line-through"};
    let newStyle={ fontWeight :"bold"};
    let styles={
        backgroundColor : "#e0c367",
        height : "30px",
        borderBottomLeftRadius :"14px",
        borderBottomRightRadius :"14px"
    }
    return (
        <div style={styles}>
            <span style={style}>{oldPrices}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrices}</span>
        </div>
    )
}

export default prices;