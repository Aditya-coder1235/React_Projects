import "./card.css";

function Card(props) {
    return (
        <div className="main">
            <div className="top">
                <div className="icon">
                    <img
                        src={props.logo}
                        alt=""
                    />
                </div>
                <div className="save">
                    Save<i class="fa-regular fa-bookmark"></i>
                </div>
            </div>
            <div className="mid">
                <div className="text">
                    <p className="am">{props.company} <span className="day">{props.posted}</span></p>

                    <p className="ui">{props.post}</p>

                    <span>
                        <button>{props.tag1}</button> <button>{props.tag2}</button>
                    </span>
                </div>
            </div>
           <div className="line"></div>
            <div className="bot">
                <div className="price">
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <div className="btn">
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
