import './products.css';
import Prices from './prices';

function products({title,idx}){
    let oldPrices=["12,495","11,900","1,599","599"];
    let newPrices=["8,999","9,199","899","278"];
    let description=[["8,000 DPI","5 Programming Buttons"],["Institive Touch Surface","Designed for ipad pro"],["Designed for ipad pro","Intutive Touch Surface"],["Wireless Mouse 2,4GHz","Optimal Oreintation"]]
    return (
        <div className='as'>
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>


            <Prices oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />
        </div>
    )
}

export default products;