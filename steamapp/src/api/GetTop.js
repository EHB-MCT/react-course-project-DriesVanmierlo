import React from "react";
import GameCarousel from "../components/GameCarousel";

class GetTop extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://store.steampowered.com/api/getappsincategory/?category=cat_topsellers")
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
          console.log("Loaded Top sellers!", this.state.items);
        return (
            <div>Top sellers are loaded!</div>
            // <GameCarousel title="Bestverkocht" data={this.state}/>
        );
      }
    }
  }

export default GetTop;