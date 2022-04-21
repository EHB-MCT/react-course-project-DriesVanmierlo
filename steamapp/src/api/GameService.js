class GameService {
    dealsUrl = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";

    async getDeals(){
        return (await fetch(this.dealsUrl)).json();
    }
}

export const gameService = new GameService();