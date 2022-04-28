import GameCarousel from "./GameCarousel";
import HighlightGames from "./HighlightGames";
import GetTop from "../api/GetTop";
import { gameService } from "../api/GameService";
import { useEffect, useState } from "react";

function MainFilters(){

    const categories = ["Action", "Avontuur", "Casual", "Indie", "MMO", "Racen", "RPG", "Sim", "Sport", "Strategie"];
    const categoriesList = categories.map((a) => {
        return <option key={a.toString()}>{a}</option>
    });

    const store = ["Community-aanbevelingen", "Recent bekeken", "Steam-curators", "Puntenwinkel", "Laboratoria"];
    const storeList = store.map((a) => {
        return <option key={a.toString()}>{a}</option>
    });

    return (
        <div className="main-filters-container main-center">
            <form id="main-category-form">
                <label>
                    Categorieën:
                </label>
                <select>
                    {categoriesList}
                </select>
            </form>
            <form id="main-store-form">
                <label>
                    Jouw winkel:
                </label>
                <select>
                    {storeList}
                </select>
            </form>
        </div>
    );
}

function GetDeals(){
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        gameService.getDeals().then(data => {
            console.log(data);
            setDeals(data);
        })
    }, [])

    return(
        <GameCarousel title="Speciale aanbiedingen" data={deals}/>
    );
}

function Main(){
    return (
        <div className="main">
            <MainFilters />
            <GetDeals />
            <HighlightGames />
            <GetTop />
            {/* <GameCarrousel title="Bestverkocht" />
            <GameCarrousel title="Nieuwe uitgaven" />
            <GameCarrousel title="Aanbevelingen" /> */}
        </div>
    );
}

export default Main;