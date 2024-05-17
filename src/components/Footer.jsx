import { Link } from "react-router-dom";
import IMG from "../assets/images";

export default function Footer () {
    return (<>
        <footer className="footer">
            <div className="main_container">
                <div className="footer__top">
                    <div className="logo_wrap">
                        <Link to={'/'}>
                            <img src={IMG.footerLogo} alt="" />
                        </Link>
                        <p>Unlock the true power of <br /> liquid staking and deFI.</p>
                    </div>
                    <div className="footer__navs">
                        <ul className="footer__navs_item">
                            <li>
                                <span>Ethera</span>
                            </li>
                            <li>
                                <Link to={'/'}>HOME</Link>
                            </li>
                            <li>
                                <Link to={'/'}>AUDIT</Link>
                            </li>
                            <li>
                                <Link to={'/'}>CONTACT</Link>
                            </li>
                        </ul>
                        <ul className="footer__navs_item">
                            <li>
                                <span>roles</span>
                            </li>
                            <li>
                                <Link to={'/'}>CAREERS</Link>
                            </li>
                            <li>
                                <Link to={'/'}>AMBASSADORS</Link>
                            </li>
                            <li>
                                <Link to={'/'}>RESTAKE NOW</Link>
                            </li>
                        </ul>
                        <ul className="footer__navs_item">
                            <li>
                                <span>Developers</span>
                            </li>
                            <li>
                                <Link to={'/'}>Docs</Link>
                            </li>
                            <li>
                                <Link to={'/'}>FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <form action="" className="footer__form">
                        <label htmlFor="">stay updated WITH ETHERA</label>
                        <div className="input_wrap">
                            <input type="email" placeholder="Email address" />
                            <button className="btn_light">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div className="footer__bottom">
                    <a href="#">
                        <img src={IMG.telegram} alt="" />
                        <span>Telegram</span>
                    </a>
                    <a href="#">
                        <img src={IMG.discord} alt="" />
                        <span>Discord</span>
                    </a>
                    <a href="#">
                        <img src={IMG.twitter} alt="" />
                        <span>Twitter</span>
                    </a>
                </div>
                <p className="text-p5 footer__copy">Copyright © 2024 ETHERA. ALL RIGHT RESERVED</p>
            </div>
        </footer>
    </>)
}