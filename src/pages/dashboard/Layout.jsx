import { Outlet, Link } from "react-router-dom";
import IMG from "../../assets/images";
import { useEffect, useRef, useState } from "react";

export default function Lyout ({connectWallet, setConnectWallet, activeNav}) {
    const [navList, setNavList] = useState([
        {name: 'Restake', to: '/dashboard/restake', img: IMG.navIcon1, activeImg: IMG.navIcon1Active},
        {name: 'Dashboard', to: '/dashboard', img: IMG.navIcon2, activeImg: IMG.navIcon2Active},
        {name: 'DeFi', to: '/dashboard/defi', img: IMG.navIcon3, activeImg: IMG.navIcon3Active},
        {name: 'Bridge etETH', to: '/dashboard/bridge', img: IMG.navIcon4, activeImg: IMG.navIcon4Active},
        {name: 'Claim ETHER', to: '/dashboard/claim', img: IMG.navIcon5, activeImg: IMG.navIcon5Active},
        {name: 'Wrap etETH', to: '/dashboard/wrap', img: IMG.navIcon6, activeImg: IMG.navIcon6Active},
    ]);
    const [moreLink, setMoreLink] = useState([
        {name: 'Twitter', img: IMG.moreLink1},
        {name: 'Telegram', img: IMG.moreLink2},
        {name: 'Discord', img: IMG.moreLink3},
        {name: 'Docs', img: IMG.moreLink4},
        {name: 'Terms of service', img: IMG.moreLink5},
        {name: 'Risks & Disclaimer', img: IMG.moreLink6},
    ]);
    const [activeMoreLink, setActiveMoreLink] = useState(false);
    const [navLeft, setNavLeft] = useState(false);
    const moreLinkRef = useRef(null);

    function toggleMoreLink () {
        let el = moreLinkRef.current;
        if (el.classList.contains('active')) {
            el.classList.remove('active');
            el.classList.add('end-active');
        } else {
            el.classList.remove('end-active');
            el.classList.add('active');
        }
    }

    return (
        <div className="dashboard">
            <div className="nav_sm">
                <div className="dashboard__container">
                    <div className="nav_sm__left">
                        <button className="bars" onClick={() => {setNavLeft(true)}}>
                            <img src={IMG.bars} alt="" />
                        </button>
                        <Link to={'/'} className="logo">
                            <img src={IMG.logo} alt="" />
                        </Link>
                    </div>
                    <div className="nav_sm__right">
                        <button className="btn_gradient" onClick={() => {setConnectWallet(true)}}>Connect wallet</button>
                        <button className="btn_light" onClick={() => toggleMoreLink()}>
                            <img src={IMG.moreIcon} alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <ul className={`nav_left ${navLeft ? 'active' : ''}`}>
                <li className="nav_left__close" onClick={() => {setNavLeft(false)}}>
                    <img src={IMG.timesWhite} alt="" />
                </li>
                <li>
                    <Link to={'/'} className="nav_left__logo">
                        <img src={IMG.logo} alt="" />
                        <span>Ethera</span>
                    </Link>
                </li>
                {navList.map((nav, navID) => (
                    <li key={navID}>
                        <Link
                            to={nav.to}
                            className={`nav_left__link ${nav.name == activeNav ? 'active' : ''}`}
                            onClick={() => {setNavLeft(false)}}
                        >
                            <img src={nav.img} alt="" />
                            <img src={nav.activeImg} alt="" className="active" />
                            <span>{nav.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            <Outlet />

            <div className="nav_right">
                <div className="nav_right__head">
                    <button className="btn_gradient" onClick={() => {setConnectWallet(true)}}>Connect wallet</button>
                    {/* <button className="btn_light" onClick={() => {setActiveMoreLink(!activeMoreLink)}}>
                        <img src={IMG.moreIcon} alt="" />
                    </button> */}
                    <button className="btn_light" onClick={() => toggleMoreLink()}>
                        <img src={IMG.moreIcon} alt="" />
                    </button>
                </div>

                <div ref={moreLinkRef} className={`more_link ${activeMoreLink ? 'active' : ''}`}>
                    <div className="more_link__close" onClick={() => toggleMoreLink()}></div>
                    <ul>
                        {moreLink.map((network, idx) => (
                            <li key={idx}>
                                <a href="#" target="_blank">
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
                                <div className="alert">
                                    <img src={IMG.warning} alt="" />
                                    <div className="alert_text__wrap">
                                        <div className="alert_text">
                                            <p>
                                                Deposited on Ethera
                                                <span>50 743,06</span>
                                            </p>
                                            <p>
                                                Restaked on EigenLayer
                                                <span>50 402,19</span>
                                            </p>
                                            <p>
                                                To be Restaked
                                                <span>340,87</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="assets_text">
                                <img src={IMG.assetCard1} alt="" />
                                <span>stETH</span>
                            </div>
                        </li>
                        <li>
                            <div className="assets_title">
                                <span>96.93K</span>
                                <div className="alert">
                                    <img src={IMG.warning} alt="" />
                                    <div className="alert_text__wrap">
                                        <div className="alert_text">
                                            <p>
                                                Deposited on Ethera
                                                <span>50 743,06</span>
                                            </p>
                                            <p>
                                                Restaked on EigenLayer
                                                <span>50 402,19</span>
                                            </p>
                                            <p>
                                                To be Restaked
                                                <span>340,87</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="assets_text">
                                <img src={IMG.assetCard2} alt="" />
                                <span>ETHx</span>
                            </div>
                        </li>
                        <li>
                            <div className="assets_title">
                                <span>13.13K</span>
                                <div className="alert">
                                    <img src={IMG.warning} alt="" />
                                    <div className="alert_text__wrap">
                                        <div className="alert_text">
                                            <p>
                                                Deposited on Ethera
                                                <span>50 743,06</span>
                                            </p>
                                            <p>
                                                Restaked on EigenLayer
                                                <span>50 402,19</span>
                                            </p>
                                            <p>
                                                To be Restaked
                                                <span>340,87</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="assets_text">
                                <img src={IMG.assetCard3} alt="" />
                                <span>sfrxETH</span>
                            </div>
                        </li>
                        <li>
                            <div className="assets_title">
                                <span>88.4K</span>
                                <div className="alert">
                                    <img src={IMG.warning} alt="" />
                                    <div className="alert_text__wrap">
                                        <div className="alert_text">
                                            <p>
                                                Deposited on Ethera
                                                <span>50 743,06</span>
                                            </p>
                                            <p>
                                                Restaked on EigenLayer
                                                <span>50 402,19</span>
                                            </p>
                                            <p>
                                                To be Restaked
                                                <span>340,87</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="assets_text">
                                <img src={IMG.assetCard4} alt="" />
                                <span>ETH</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Connect wallet */}
            <div className={`connect_wallet ${connectWallet ? 'active' : ''}`}>
                <div className="connect_wallet__content">
                    <button className="connect_wallet__close" onClick={() => {setConnectWallet(false)}}>
                        <img src={IMG.close} alt="" />
                    </button>
                    <div className="connect_wallet__content_left">
                        <h2>Connect wallet</h2>
                        <div className="recommend">
                            <p className="title">Recommended</p>
                            <ul className="recommend__list">
                                <li>
                                    <img src={IMG.recommendIcon1} alt="" />
                                    <span>MetaMask</span>
                                </li>
                                <li>
                                    <img src={IMG.recommendIcon2} alt="" />
                                    <span>Coinbase Wallet</span>
                                </li>
                                <li>
                                    <img src={IMG.recommendIcon3} alt="" />
                                    <span>WalletConnect</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="connect_wallet__content_right">
                        <h3 className="title">What is a wallet?</h3>
                        <ul>
                            <li>
                                <img src={IMG.aboutIcon1} alt="" />
                                <div className="text">
                                    <h4>A home for your digital assets</h4>
                                    <p>
                                        Wallets are used to <br />
                                        send, receive, store and <br />
                                        display digital assets, <br />
                                        such as Ethereum and NFT.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src={IMG.aboutIcon2} alt="" />
                                <div className="text">
                                    <h4>New way of logging in</h4>
                                    <p>
                                        Instead of creating new accounts and <br />
                                        and passwords on every site, just <br />
                                        connect your wallet.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="link">
                            <a href="#" className="link_dark">Get a wallet</a>
                            <a href="#" className="link_light" target="_blank">Read more</a>
                        </div>
                        <p className="agree_text">
                            By connecting a wallet, you agree to Kelp’s <a href="https://docs.google.com/document/d/1eSIGFBIZhsH35fZ-EL_UqlK_8f08Vjup/edit" target="_blank">Terms of Service</a>
                        </p>
                    </div>
                </div>
            </div>
            {/* Connect wallet end */}
        </div>
    )
}