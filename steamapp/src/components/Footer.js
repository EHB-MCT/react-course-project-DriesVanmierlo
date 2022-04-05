function Footer() {

    const logoValve = "https://store.akamai.steamstatic.com/public/images/footerLogo_valve_new.png";
    const logoSteam = "https://store.akamai.steamstatic.com/public/images/v6/logo_steam_footer.png";

    const footerMenu1 = ["Privacybeleid", "Juridische informatie", "Steam Subscriber Agreement", "Terugbetalingen", "Cookies"];
    const list1 = footerMenu1.map((a) => {
        return <li><a href="#">{a}</a></li>
    });

    const footerMenu2 = ["Info over Valve", "Vacatures", "Steamworks", "Steam-distributie", "Ondersteuning","Cadeaukaarten", "Facebook", "Twitter"];
    const list2 = footerMenu2.map((a) => {
        return <li><a href="#">{a}</a></li>
    });

    return (
        <footer id="footer">
            <div className="footer-figures">
                <figure>
                    <img src={logoValve}/>
                </figure>
                <figure>
                    <img src={logoSteam}/>
                </figure>
            </div>
            <div className="footer-content">
                <p>© 2022 Valve Corporation. Alle rechten voorbehouden. Alle handelsmerken zijn eigendom van hun respectieve eigenaren in de Verenigde Staten en andere landen. BTW indien van toepassing inbegrepen. </p>
                <ul>{list1}</ul>
                <ul>{list2}</ul>
            </div>
        </footer>
    );
}

export default Footer;