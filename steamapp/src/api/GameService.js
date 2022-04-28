class GameService {
    baseUrl = "https://frontend-steam-api.herokuapp.com";


    async getDeals(){
        return (await fetch(`${this.baseUrl}/deals`)).json();
    }

    async getFeaturedCategories(){
        return (await fetch(`${this.baseUrl}/featuredcategories`)).json();
    }
}

export const gameService = new GameService();