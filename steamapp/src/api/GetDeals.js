import React from "react";
import GameCarousel from "../components/GameCarousel";

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
      fetch("https://frontend-steam-api.herokuapp.com/deals")
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
        return <img src="https://medexbiotech.com/img/preloader.gif" />;
      } else {
          console.log("Loaded deals!", this.state.items);
        return (
            <GameCarousel title="Speciale aanbiedingen" data={this.state}/>
        );
      }
    }
  }

export default GetDeals;