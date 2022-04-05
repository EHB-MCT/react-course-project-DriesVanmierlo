import GameItem from "./GameItem";

function GameCarrousel(props){
    return (
        <div className = "game-carrousel-container">
            <h1 className="game-carrousel-title">{props.title}</h1>
            <div className="game-carrousel-items">
                <GameItem />
                <GameItem />
                <GameItem />
                <GameItem />
                <GameItem />
            </div>
        </div>
    );
}

export default GameCarrousel;