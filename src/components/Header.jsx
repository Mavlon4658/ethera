import { Link } from "react-router-dom";
import IMG from "../assets/images/index";
import { useState } from "react";

export default function Header () {
    const [menuList, setMenuList] = useState([
        {id: '#home', name: 'HOME'},
        {id: '#about', name: 'ABOUT'},
        {id: '#audit', name: 'AUDIT'},
        {id: '#contact', name: 'CONTACT'},
    ])
    const [menu, setMenu] = useState(false)
    const [activeMenu, setActiveMenu] = useState('HOME')

    return (
        <>
            <header className="header">
                <div className="main_container header__container">
                    <Link to='/' className="header__logo">
                        <img src={IMG.logo} alt="" />
                        <span>Ethera</span>
                    </Link>

                    <ul className="header__navs">
                        {menuList.map((nav, navID) => (
                            <li key={navID}>
                                <a
                                    href={nav.id} 
                                    className={`header__navs_link ${activeMenu.toLowerCase() == nav.name.toLowerCase() ? 'active' : ''}`}
                                    onClick={() => {setActiveMenu(nav.name)}}
                                >{nav.name}</a>
                            </li>
                        ))}
                    </ul>

                    <Link to='/' className="btn_light">Restake now</Link>

                    <button className={`menu_btn ${menu ? 'active' : ''}`} onClick={() => {setMenu(!menu)}}>MENU</button>
                </div>
            </header>

            <section className={`mobile_menu ${menu ? 'active' : ''}`}>
                <ul>
                    {menuList.map((nav, navID) => (
                        <li key={navID} onClick={() => {setMenu(false)}}>
                            <a
                                href={nav.id} 
                                className={`${activeMenu.toLowerCase() == nav.name.toLowerCase() ? 'active' : ''}`}
                                onClick={() => {setActiveMenu(nav.name)}}
                            >{nav.name}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}