import GameItem from "./GameItem";

function GameCarrousel(){
    return (
        <div className = "game-carrousel-container">
            <h1 className="game-carrousel-title">Speciale aanbiedingen</h1>
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