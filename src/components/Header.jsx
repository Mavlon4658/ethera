import { Link } from "react-router-dom";
import IMG from "../assets/images/index";
import { useState } from "react";

export default function Header () {
    const [menu, setMenu] = useState(false)

    return (
        <>
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

                    <button className={`menu_btn ${menu ? 'active' : ''}`} onClick={() => {setMenu(!menu)}}>MENU</button>
                </div>
            </header>

            <section className={`mobile_menu ${menu ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link to={'/'} className="active">Home</Link>
                    </li>
                    <li>
                        <Link to={'/'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Audit</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Contact</Link>
                    </li>
                </ul>
            </section>
        </>
    )
}