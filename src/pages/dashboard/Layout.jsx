import { Outlet, Link } from "react-router-dom";
import IMG from "../../assets/images";
import { useState } from "react";

export default function Lyout ({activeNav}) {
    const [navList, setNavList] = useState([
        {name: 'Restake', to: '/dashboard/restake', img: IMG.navIcon1, activeImg: IMG.navIcon1Active},
        {name: 'Dashboard', to: '/dashboard', img: IMG.navIcon2, activeImg: IMG.navIcon2Active},
        {name: 'DeFi', to: '/dashboard/defi', img: IMG.navIcon3, activeImg: IMG.navIcon3Active},
        {name: 'Bridge etETH', to: '/dashboard', img: IMG.navIcon4, activeImg: IMG.navIcon4Active},
        {name: 'Claim ETHER', to: '/dashboard', img: IMG.navIcon5, activeImg: IMG.navIcon5Active},
        {name: 'Wrap etETH', to: '/dashboard', img: IMG.navIcon6, activeImg: IMG.navIcon6Active},
    ]);
    const [moreLink, setMoreLink] = useState([
        {name: 'Twitter', img: IMG.moreLink1},
        {name: 'Telegram', img: IMG.moreLink2},
        {name: 'Discord', img: IMG.moreLink3},
        {name: 'Docs', img: IMG.moreLink4},
        {name: 'Terms of service', img: IMG.moreLink5},
        {name: 'Risks & Disclaimer', img: IMG.moreLink6},
    ]);
    const [activeMoreLink, setActiveMoreLink] = useState(false)

    return (
        <div className="dashboard">
            <ul className="nav_left">
                <li>
                    <Link to={'/'} className="nav_left__logo">
                        <img src={IMG.logo} alt="" />
                        <span>Ethera</span>
                    </Link>
                </li>
                {navList.map((nav, navID) => (
                    <li key={navID}>
                        <Link to={nav.to} className={`nav_left__link ${nav.name == activeNav ? 'active' : ''}`}>
                            <img src={nav.img} alt="" />
                            <img src={nav.activeImg} alt="" className="active" />
                            <span>{nav.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="dashboard__container">
                <Outlet />
            </div>

            <div className="nav_right">
                <div className="nav_right__head">
                    <button className="btn_gradient">Connect wallet</button>
                    <button className="btn_light" onClick={() => {setActiveMoreLink(!activeMoreLink)}}>
                        <img src={IMG.moreIcon} alt="" />
                    </button>
                </div>

                <div className={`more_link ${activeMoreLink ? 'active' : ''}`}>
                    <ul>
                        {moreLink.map((network, idx) => (
                            <li key={idx}>
                                <a href="#">
                                    <img src={network.img} alt="" />
                                    <span>{network.name}</span>
                                    <img src={IMG.chevronRight} alt="" className="icon" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="nav_right__card">
                    <h3 className="title">Ethera Stats</h3>
                    <ul className="networks">
                        <li>
                            <img src={IMG.navCard1} alt="" />
                            <div className="text">
                                <span>$801M</span>
                                TVL
                            </div>
                        </li>
                        <li>
                            <img src={IMG.navCard2} alt="" />
                            <div className="text">
                                <span>421M</span>
                                Total EL Points
                            </div>
                        </li>
                        <li>
                            <img src={IMG.navCard3} alt="" />
                            <div className="text">
                                <span>357M</span>
                                Total Ether Grand Points
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="nav_right__card">
                    <h3 className="title">Assets Restaked</h3>
                    <ul className="assets_card">
                        <li>
                            <div className="assets_title">
                                <span>50.77K</span>
                            </div>
                            <div className="assets_text">
                                <img src={IMG.assetCard1} alt="" />
                                <span>stETH</span>
                            </div>
                        </li>
                        <li>
                            <div className="assets_title">
                                <span>96.93K</span>
                            </div>
                            <div className="assets_text">
                                <img src={IMG.assetCard2} alt="" />
                                <span>ETHx</span>
                            </div>
                        </li>
                        <li>
                            <div className="assets_title">
                                <span>13.13K</span>
                                <img src={IMG.warning} alt="" />
                            </div>
                            <div className="assets_text">
                                <img src={IMG.assetCard3} alt="" />
                                <span>sfrxETH</span>
                            </div>
                        </li>
                        <li>
                            <div className="assets_title">
                                <span>88.4K</span>
                                <img src={IMG.warning} alt="" />
                            </div>
                            <div className="assets_text">
                                <img src={IMG.assetCard4} alt="" />
                                <span>ETHx</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}