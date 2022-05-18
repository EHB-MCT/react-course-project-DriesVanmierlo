import { gameService } from "../api/GameService";
import { useEffect, useState } from "react";

function HighlightGame(props){

    return(
        <div className="highlight-game-container">
            <a href={"https://steam-redesign-angular.web.app/game/" + props.data.id}>
                <figure className="highlight-game-figure">
                    <img src={props.data.large_capsule_image} />
                </figure>
                <div className="highlight-game-header">
                    <p className="highlight-game-tag">New!</p>
                    <h2 className="highlight-game-title">{props.data.name}</h2>
                </div>
                <p className="highlight-game-description">{props.details.short_description}</p>
                <a className="highlight-game-button" href="#">Learn more</a>
            </a>
        </div>
    );
}

function GetDetails(props){

    const [details, setDetails] = useState([]);
    
        useEffect(() => {
            gameService.getDetails(`${props.data.id}`).then(data => {
                let appid = props.data.id;
                console.log(data[appid]);
                setDetails(data[appid].data);
            })
        }, [])

    return(
        <HighlightGame data={props.data} details={details}/>
    );
}

function HighlightGames(props){
    return(
        <div className="highlight-games-container main-center">
            {props.data?.map(item => (
                <GetDetails data={item}/>
            ))}
        </div>
    );
}

export default HighlightGames;