import React from "react";
import GameItem from "./GameItem";

class GetDeals extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <GameCarrousel title="Speciale aanbiedingen" data={this.state}/>
        );
      }
    }
  }

function GameCarrousel(props){
    return (
        
        <div className = "game-carrousel-container">
            <h1 className="game-carrousel-title">{props.title}</h1>
            <div className="game-carrousel-items">
                {props.data.items?.map(item => (
                   <GameItem data={item}/> 
                ))}
            </div>
        </div>
    );
}

export default GetDeals;