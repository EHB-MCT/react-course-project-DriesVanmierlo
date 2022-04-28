import GameCarousel from "./GameCarousel";
import HighlightGames from "./HighlightGames";
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
        gameService.getFeaturedCategories().then(data => {
            console.log(data.specials.items);
            setDeals(data.specials.items);
        })
    }, [])

    return(
        <GameCarousel title="Speciale aanbiedingen" data={deals}/>
    );
}

function GetTop(){
    const [tops, setTops] = useState([]);

    useEffect(() => {
        gameService.getFeaturedCategories().then(data => {
            console.log(data.top_sellers.items);
            setTops(data.top_sellers.items);
        })
    }, [])

    return(
        <GameCarousel title="Bestverkocht" data={tops}/>
    );
}

function GetNew(){
    const [news, setNews] = useState([]);

    useEffect(() => {
        gameService.getFeaturedCategories().then(data => {
            console.log(data.new_releases.items);
            setNews(data.new_releases.items);
        })
    }, [])

    return(
        <GameCarousel title="Nieuwe uitgaven" data={news}/>
    );
}

function GetSoon(){
    const [soons, setSoons] = useState([]);

    useEffect(() => {
        gameService.getFeaturedCategories().then(data => {
            console.log(data.coming_soon.items);
            setSoons(data.coming_soon.items);
        })
    }, [])

    return(
        <GameCarousel title="Binnenkort verwacht" data={soons}/>
    );
}

function Main(){
    return (
        <div className="main">
            <MainFilters />
            <GetDeals />
            <HighlightGames />
            <GetTop />
            <GetNew />
            <GetSoon />
        </div>
    );
}

export default Main;