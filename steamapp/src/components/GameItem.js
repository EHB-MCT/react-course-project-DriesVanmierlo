import React from "react";

function GameItem(props){

    const testGames = {
        title: "Assetto Corsa",
        description: "This is an awesome game to race competive against each other!",
        price: 21.98,
        image: "https://www.yuplay.com/media/products/profile/249622/ab251f62d7bcc514bf7f1de4348bd464.jpg",
        sale: 50
    }

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

function calculateSale(sale, price){
    return price * sale / 100;
}

// function fetchTumbnail(appid){
//     fetch(`https://store.steampowered.com/api/appdetails?appids=${appid}`)
//     .then(res => res.json())
//     .then((result) => {
//               console.log(result);
//           }
//     )
// }

// class Thumbnail extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         data: []
//       };
//       console.log(this.state);
//     }
  
//     componentDidMount() {
//         console.log(this.state);
//       fetch(`https://store.steampowered.com/api/appdetails?appids=244210`)
//         .then(res => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               isLoaded: true,
//               data: result.data
//             });
//             console.log(this.state);
//           },
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }
  
//     render() {
//       const { error, isLoaded, data } = this.state;
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Loading...</div>;
//       } else {
//         console.log(this.state.data);
//         return (
//             `Test`
//         );
//       }
//     }
//   }

export default GameItem;