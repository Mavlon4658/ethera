import { Link } from "react-router-dom";
import IMG from "../assets/images";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Home () {
    return (
        <div className="wrapper">
            <Header />

            {/* Home */}
            <section className="home">
                <img src={IMG.homeBg} className="home__bg" alt="" />
                <div className="main_container home__container">
                    <h3 className="home__subtitle">
                        $796.94M
                        <span>Assets <br /> Staked</span>
                    </h3>
                    <h2 className="text-h2 home__title">Liquid <span>restaking <img src={IMG.homeLine} alt="" /></span> with etETH</h2>
                    <div className="home__content">
                        <p className="description_top">Liquid restaking with our resataking  expertise platfrom</p>
                        <p className="description_bottom">
                            <img src={IMG.star} alt="" />
                            <span>Liquid Collective's etETH is a liquid staking token, built to meet the needs of businesses offering staking to their customers.</span>
                        </p>
                    </div>
                    <div className="home__links">
                        <Link to={'/'} className="btn_gradient">Restake now</Link>
                        <Link to={'/'} className="btn_light">Sign Up Now</Link>
                    </div>
                    <div className="list_wrap">
                        <div className="main_container">
                            <ul>
                                <li>
                                    <h4>Nice Lock-up</h4>
                                    <span className="line"></span>
                                </li>
                                <li>
                                    <h4>Easily Manage</h4>
                                    <span className="line"></span>
                                </li>
                                <li>
                                    <h4>Whitelished</h4>
                                    <span className="line"></span>
                                </li>
                                <li>
                                    <h4>Validation </h4>
                                    <span className="line"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Home end */}

            {/* Restaking */}
            <section className="restaking">
                <div className="main_container restaking__container">
                    <div className="restaking__content">
                        <div className="restaking__content_head">
                            <h4 className="restaking__subtitle">About US</h4>
                            <img src={IMG.stars} alt="" className="stars" />
                        </div>
                        <h2 className="text-h2 restaking__title">Why liquid restaking?</h2>
                        <img src={IMG.restakingLine} alt="" className="restaking__line" />
                        <ul>
                            <li>Nice Lock-up for resatked tokens.</li>
                            <li>Easily manage multiple restaking rewards.</li>
                            <li>Whitelished services and validation.</li>
                        </ul>
                        <img src={IMG.stars} alt="" className="stars" />
                    </div>
                    <div className="restaking__date">
                        <img src={IMG.logo1} alt="" />
                        <span>since 2024</span>
                    </div>
                </div>
            </section>
            {/* Restaking end */}

            {/* Introduching */}
            <section className="introduching">
                <div className="main_container">
                    <div className="introduching__head">
                        <h2 className="text-h2 introduching__title">Introduching etETH</h2>
                        <img src={IMG.stars} alt="" className="stars" />
                    </div>
                    <div className="introduching__content">
                        <img src={IMG.introduchingBorder} alt="" className="introduching__content_border" />
                        <img src={IMG.introduchingBorderSm} alt="" className="introduching__content_border sm" />
                        <div className="text">
                            <h3 className="text-h3">Simple staking integrations with etETH</h3>
                            <p className="text-p3">Liquid Collective's etETH is a liquid staking token, built to meet the needs of businesses offering staking to their customers.</p>
                            <ul>
                                <li>
                                    <h4 className="text-h5">One token for all</h4>
                                    <p className="text-p4">etETH is a single liquid restaked <br /> token for all accepted ETH LSTs</p>
                                </li>
                                <li>
                                    <h4 className="text-h5">Designed for liquidity</h4>
                                    <p className="text-p4">Access restaking rewards along with <br /> instant liquidity and DeFi composability</p>
                                </li>
                            </ul>
                        </div>
                        <img src={IMG.logo1} alt="" className="logo" />
                    </div>
                </div>
            </section>
            {/* Introduching end */}

            {/* Tokens */}
            <section className="tokens">
                <div className="main_container">
                    <div className="tokens__head">
                        <span className="tokens__subtitle">Since 2006</span>
                        <div className="text">
                            <img src={IMG.restakingLine} alt="" className="line" />
                            <h2 className="text-h2">Supported Tokens</h2>
                            <p className="text-p4">Ethera supports ETH, stETH, sfrxETH and ETHX. ETHER DAO may choose to introduce other callateral in the future \.</p>
                        </div>
                        <img src={IMG.stars} alt="" className="stars" />
                    </div>
                    <ul className="tokens__content">
                        <li className="bg">
                            <img src={IMG.tokenContentBt} alt="" />
                        </li>
                        <li>
                            <div className="card_head">
                                <img src={IMG.tokenIcon1} alt="" className="icon" />
                                <img src={IMG.tokenContentBtSm} alt="" className="bg" />
                            </div>
                            <div className="card_body">
                                <h4 className="text-h4">ETH</h4>
                                <p className="text-p4">Native</p>
                            </div>
                        </li>
                        <li>
                            <div className="card_head">
                                <img src={IMG.tokenIcon2} alt="" className="icon" />
                                <img src={IMG.tokenContentBtSm} alt="" className="bg" />
                            </div>
                            <div className="card_body">
                                <h4 className="text-h4">stETH</h4>
                                <p className="text-p4">Lido</p>
                            </div>
                        </li>
                        <li>
                            <div className="card_head">
                                <img src={IMG.tokenIcon3} alt="" className="icon" />
                                <img src={IMG.tokenContentBtSm} alt="" className="bg" />
                            </div>
                            <div className="card_body">
                                <h4 className="text-h4">ETHx</h4>
                                <p className="text-p4">stader</p>
                            </div>
                        </li>
                        <li>
                            <div className="card_head">
                                <img src={IMG.tokenIcon1} alt="" className="icon" />
                                <img src={IMG.tokenContentBtSm} alt="" className="bg" />
                            </div>
                            <div className="card_body">
                                <h4 className="text-h4">sfrxETH</h4>
                                <p className="text-p4">frax</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/* Tokens end */}

            {/* Auditors */}
            <section className="auditors">
                <div className="main_container">
                    <div className="auditors__head">
                        <div className="text">
                            <img src={IMG.restakingLine} alt="" />
                            <h2 className="text-h2">Secured by top <br /> auditors</h2>
                            <p className="text-p4">Ethera has been audited by leading auditing firms</p>
                        </div>
                        <img src={IMG.stars} alt="" className="stars" />
                    </div>
                    <ul className="auditors__content">
                        <li>
                            <div className="card_head">
                                <img src={IMG.auditorsIcon1} alt="" className="icon" />
                            </div>
                            <div className="card_body">
                                <p className="text-p4">Ethera has been audited by Sigma Prime at 26/5/2024</p>
                                <Link to={'/'} className="card_link">
                                    <span>Get full report</span>
                                    <img src={IMG.arrowRight} alt="" />
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="card_head">
                                <img src={IMG.auditorsIcon2} alt="" className="icon" />
                            </div>
                            <div className="card_body">
                                <p className="text-p4">Ethera has been audited by code4rena at 26/5/2024</p>
                                <Link to={'/'} className="card_link">
                                    <span>Get full report</span>
                                    <img src={IMG.arrowRight} alt="" />
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/* Auditors end */}

            {/* Partner */}
            <section className="partners">
                <div className="main_container">
                    <div className="partners__head">
                        <div className="text">
                            <img src={IMG.restakingLine} alt="" />
                            <h2 className="text-h2">Our Partner</h2>
                            <p className="text-p4">Let's Meet our businnes partner.</p>
                        </div>
                        <img src={IMG.stars} alt="" className="stars" />
                    </div>
                    <ul className="partners__content">
                        <li>
                            <img src={IMG.partnersIcon1} alt="" />
                        </li>
                        <li>
                            <img src={IMG.partnersIcon2} alt="" />
                        </li>
                    </ul>
                </div>
            </section>
            {/* Partner end */}

            <Footer />
        </div>
    ) 
}