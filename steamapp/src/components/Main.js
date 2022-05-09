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
            setSoons(data.coming_soon.items);
        })
    }, [])

    return(
        <GameCarousel title="Binnenkort verwacht" data={soons}/>
    );
}

function GetHighlightApps(){
    const [apps, setApps] = useState([]);

    

    useEffect(() => {
        gameService.getFeaturedApps().then(data => {
            console.log(data.featured_win);
            let dataList = [];
            dataList.push(data.featured_win[0]);
            dataList.push(data.featured_win[1]);
            setApps(dataList);
        })
    }, [])

        return(
            <HighlightGames data={apps} />
        );
    
}

function Main(){
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        gameService.getFeaturedCategories().then(data => {
            console.log(data);
            setLoading(false);
        })
    }, [])

if(isLoading){
    return (
        <div className="loading-animation">Still loading!</div>
    )
} else {
    return (
        <div className="main">
            <MainFilters />
            <GetDeals />
            <GetHighlightApps />
            <GetTop />
            <GetNew />
            <GetSoon />
        </div>
    );
}
    
}

export default Main;