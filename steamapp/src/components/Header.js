
function HeaderNav(){

    return (
        <div className="header-nav">
            <div className="header-nav-container">
                <figure className="header-nav-figure">
                    <a href="#"><img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" /></a>
                </figure>
                <ul className="header-nav-list">
                    <li key={'Winkel'}>
                        <a id="a-nav-Winkel" href="#">Winkel</a>
                    </li>
                    <li key={'Library'}>
                        <a id="a-nav-Library" href="https://steam-redesign-angular.web.app/library">Library</a>
                    </li>
                    <li key={'Wishlist'}>
                        <a id="a-nav-Wishlist" href="https://steam-redesign-angular.web.app/">Wishlist</a>
                    </li>
                    <li key={'Profiel'}>
                        <a id="a-nav-Profiel" href="https://steam-redesign-angular.web.app/">Profiel</a>
                    </li>
                    <li key={'Community'}>
                        <a id="a-nav-Community" href="https://steam-redesign-angular.web.app/">Community</a>
                    </li>
                </ul>
                <form className="header-nav-search">
                    <input id="search-input" placeholder="Zoek..."/>
                    <input id="search-button" type="button" value="Zoek"/>
                </form>
                <button id="download-button">Download</button>
            </div>
        </div>
    );
}

function HeaderBanner (){
    return (
        <div className="header-banner-container">
            <a href="https://steam-redesign-angular.web.app/game/1426210">
                <figure className="header-banner-figure">
                <img src="https://www.gamepitt.co.uk/wp-content/uploads/2021/03/it-takes-two-banner.jpg" />
                </figure>
            </a>
        </div>
    );
}

function Header(){
    return (
        <div className="header-navbar">
            <HeaderNav />
            <HeaderBanner />
        </div>
    );
}

export default Header;