import React from "react";

function GameItem(props){

    if(props.data.discount_percent > 0){ 
        return (
            <div key={props.data.id} className="game-item-container">
                <a href="#">
                    <div className="game-item-cover">
                        <figure>
                            <img src={props.data.header_image} />
                            <p className="game-item-sale-tag">-{props.data.discount_percent}%</p>
                        </figure>
                    </div>
                    <h2 className="game-item-title">{props.data.name}</h2>
                    <div className="game-item-prices">
                        <p className="game-item-original-price">{props.data.original_price / 100}€</p>
                        <p className="game-item-new-price">{props.data.final_price / 100}€</p>
                    </div>
                </a>
            </div>
        );  
    } else if (props.data.final_price > 0) {
        return (
            <div key={props.data.id} className="game-item-container">
                <a href="#">
                    <div className="game-item-cover">
                        <figure>
                            <img src={props.data.header_image} />
                        </figure>
                    </div>
                    <h2 className="game-item-title">{props.data.name}</h2>
                    <div className="game-item-prices">
                        <p className="game-item-price">{props.data.original_price / 100}€</p>
                    </div>
                </a>
            </div>
        );
    } else if(props.carrouselTitle == "Binnenkort verwacht") {
        return (
            <div key={props.data.id} className="game-item-container">
                <a href="#">
                    <div className="game-item-cover">
                        <figure>
                            <img src={props.data.header_image} />
                        </figure>
                    </div>
                    <h2 className="game-item-title">{props.data.name}</h2>
                </a>
            </div>
        );
    } else {
        return (
            <div key={props.data.id} className="game-item-container">
                <a href="#">
                    <div className="game-item-cover">
                        <figure>
                            <img src={props.data.header_image} />
                        </figure>
                    </div>
                    <h2 className="game-item-title">{props.data.name}</h2>
                    <div className="game-item-prices">
                        <p className="game-item-price">gratis</p>
                    </div>
                </a>
            </div>
        );
    }
   
}

export default GameItem;