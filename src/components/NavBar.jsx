import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>𝄂𝄂—𝄂𝄂 PowerFit</h2>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Proteínas</a></li>
                <li><a href="#">Creatina</a></li>
                <li><a href="#">Vitaminas</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;