import Products from './products.jsx';

function productTab(){
    let style={display : "flex" ,
        flex: "wrap",
        justifyContent : "center",
        alingItem : "center"
    }
    return (
        <div style={style}>
            <Products title="Logistich MX Master" idx={0} />
             <Products title="Apple Pencile"  idx={1} />
              <Products title="Zebronics"  idx={2} />
               <Products title="Petronics Toad"  idx={3} />
        </div>
    )
}

export default productTab;