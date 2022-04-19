function HighlightGame(){

    const testGames = {
        title: "Assetto Corsa",
        description: "This is an awesome game to race competive against each other! This is an awesome game to race competive against each other!",
        price: 21.98,
        image: "https://www.yuplay.com/media/products/profile/249622/ab251f62d7bcc514bf7f1de4348bd464.jpg",
        sale: 50
    }

    return(
        <div className="highlight-game-container">
            <a href="#">
                <figure className="highlight-game-figure">
                    <img src={testGames.image} />
                </figure>
                <div className="highlight-game-header">
                    <p className="highlight-game-tag">New!</p>
                    <h2 className="highlight-game-title">{testGames.title}</h2>
                </div>
                <p className="highlight-game-description">{testGames.description}</p>
                <button className="highlight-game-button" href="#">Learn more</button>
            </a>
        </div>
    );
}

function HighlightGames(){

    return(
        <div className="highlight-games-container main-center">
            <HighlightGame />
            <HighlightGame />
        </div>
    );
}

export default HighlightGames;