import { Link } from "react-router-dom";
import IMG from "../assets/images/index";

export default function Header () {
    return (
        <header className="header">
            <div className="main_container header__container">
                <Link to='/' className="header__logo">
                    <img src={IMG.logo} alt="" />
                    <span>Ethera</span>
                </Link>

                <ul className="header__navs">
                    <li>
                        <Link to={'/'} className="header__navs_link active">HOME</Link>
                    </li>
                    <li>
                        <Link to={'/'} className="header__navs_link">ABOUT</Link>
                    </li>
                    <li>
                        <Link to={'/'} className="header__navs_link">AUDIT</Link>
                    </li>
                    <li>
                        <Link to={'/'} className="header__navs_link">CONTACT</Link>
                    </li>
                </ul>

                <Link to='/' className="btn_light">Restake now</Link>

                <button className="menu_btn">MENU</button>
            </div>
        </header>
    )
}