import GameCarrousel from "./GameCarousel";
import HighlightGames from "./HighlightGames";
import GetDeals from "../api/GetDeals";

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

function Main(){
    return (
        <div className="main">
            <MainFilters />
            <GetDeals />
            <HighlightGames />
            {/* <GameCarrousel title="Bestverkocht" />
            <GameCarrousel title="Nieuwe uitgaven" />
            <GameCarrousel title="Aanbevelingen" /> */}
        </div>
    );
}

export default Main;