class GameService {
    baseUrl = "https://frontend-steam-api.herokuapp.com";


    async getDeals(){
        return (await fetch(`${this.baseUrl}/deals`)).json();
    }

    async getFeaturedCategories(){
        return (await fetch(`${this.baseUrl}/featuredcategories`)).json();
    }

    async getFeaturedApps(){
        return (await fetch(`${this.baseUrl}/featuredapps`)).json();
    }

    async getDetails(appid){
        return (await fetch(`${this.baseUrl}/game/${appid}&currency=3`)).json();
    }
}

export const gameService = new GameService();