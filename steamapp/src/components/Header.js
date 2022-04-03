
function HeaderNav(){

    const headerNavItemsList = ["Winkel", "Library", "Wishlist", "Profiel", "Community"];
    const list = headerNavItemsList.map((a) => {
        return <li><a href="#">{a}</a></li>
    });

    return (
        <div>
            <figure>
                <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" />
            </figure>
            <ul>
                {list}
            </ul>
            <form>
                <input placeholder="Zoek..."/>
                <input type="button" value="Zoek"/>
            </form>
            <button>Download</button>
        </div>
    );
}

function HeaderBanner (){
    return (
        <div>
            <figure>
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