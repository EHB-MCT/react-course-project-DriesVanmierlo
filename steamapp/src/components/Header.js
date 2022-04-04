
function HeaderNav(){

    const headerNavItemsList = ["Winkel", "Library", "Wishlist", "Profiel", "Community"];
    const list = headerNavItemsList.map((a) => {
        return <li><a href="#">{a}</a></li>
    });

    return (
        <div className="header-nav">
            <div className="header-nav-container">
                <figure className="header-nav-figure">
                    <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" />
                </figure>
                <ul className="header-nav-list">
                    {list}
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
            <figure className="header-banner-figure">
                <img src="https://www.gamepitt.co.uk/wp-content/uploads/2021/03/it-takes-two-banner.jpg" />
            </figure>
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