import { gameService } from "../api/GameService";
import { useEffect, useState } from "react";

function HighlightGame(props){

    const testGames = {
        title: "Assetto Corsa",
        description: "This is an awesome game to race competive against each other! This is an awesome game to race competive against each other!",
        price: 21.98,
        image: "https://www.yuplay.com/media/products/profile/249622/ab251f62d7bcc514bf7f1de4348bd464.jpg",
        sale: 50
    }

    console.log(props);

    return(
        <div className="highlight-game-container">
            <a href="#">
                <figure className="highlight-game-figure">
                    <img src={props.data.large_capsule_image} />
                </figure>
                <div className="highlight-game-header">
                    <p className="highlight-game-tag">New!</p>
                    <h2 className="highlight-game-title">{props.data.name}</h2>
                </div>
                <p className="highlight-game-description">{<GetDetails id={props.data.id} />}</p>
                <button className="highlight-game-button" href="#">Learn more</button>
            </a>
        </div>
    );
}

function GetDetails(props){
    const [details, setDetails] = useState([]);
    
        useEffect(() => {
            gameService.getDetails(props.id).then(data => {
                let appid = props.id;
                console.log(data[appid].data.short_description);
                setDetails(data[appid].data.short_description);
            })
        }, [])

    return(
        `${details}`
    );
}

function GetApps(){
        const [apps, setApps] = useState([]);
    
        useEffect(() => {
            gameService.getFeaturedApps().then(data => {
                console.log(data.featured_win);
                setApps(data.featured_win);
            })
        }, [])
    
            return(
                <div className="highlight-games-container main-center">
                    <HighlightGame data={apps[0]}/>
                    <HighlightGame data={apps[1]}/>
                </div>
                
            );
        
    }
function HighlightGames(){
    return(
        // <div className="highlight-games-container main-center"></div>
        <GetApps />
    );
}

export default HighlightGames;