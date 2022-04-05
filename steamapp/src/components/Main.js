import GameCarrousel from "./GameCarrousel";

function MainFilters(){

    const categories = ["Action", "Avontuur", "Casual", "Indie", "MMO", "Racen", "RPG", "Sim", "Sport", "Strategie"];
    const categoriesList = categories.map((a) => {
        return <option><a>{a}</a></option>
    });

    const store = ["Community-aanbevelingen", "Recent bekeken", "Steam-curators", "Puntenwinkel", "Laboratoria"];
    const storeList = store.map((a) => {
        return <option><a>{a}</a></option>
    });

    return (
        <div className="main-filters-container">
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
            <GameCarrousel />
            <GameCarrousel />
            <GameCarrousel />
            <GameCarrousel />
        </div>
    );
}

export default Main;