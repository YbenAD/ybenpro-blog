const NavBar = () => {
    const btnArticle = {
        backgroundColor: "#5b52ad",
        color: "#fff",
        padding: "0.5rem",
        borderRadius: "0.5rem"

    }
    return (
        <nav className="navbar">
            <div>
                <a className="logo" href="">Ybenpro Blog</a>
            </div>
            <ul className="liens">
                <li>
                    <a href="" className="lien">Accueil</a>
                </li>
                <li>
                    <a href="" className="lien" style={btnArticle}>Creer Articles</a>
                </li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default NavBar;