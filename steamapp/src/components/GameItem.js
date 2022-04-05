function calculateSale(sale, price){
    return price * sale / 100;
}

function GameItem(){

    const testGames = {
        title: "Assetto Corsa",
        description: "This is an awesome game to race competive against each other!",
        price: 21.98,
        image: "https://www.yuplay.com/media/products/profile/249622/ab251f62d7bcc514bf7f1de4348bd464.jpg",
        sale: 50
    }

    return (
        <div className="game-item-container">
            <a href="#">
                <div className="game-item-cover">
                    <figure>
                        <img src={testGames.image} />
                        <p className="game-item-sale-tag">-{testGames.sale}%</p>
                    </figure>
                </div>
                <h2 className="game-item-title">{testGames.title}</h2>
                <div className="game-item-prices">
                    <p className="game-item-price">{testGames.price}€</p>
                    <p className="game-item-new-price">{calculateSale(testGames.sale, testGames.price)}€</p>
                </div>
            </a>
        </div>
    );
}

export default GameItem;