import { Link } from "react-router-dom";
import IMG from "../assets/images";
import Header from "../components/Header";


export default function Home () {
    return (
        <>
            <Header />
            <section className="home">
                <img src={IMG.homeBg} className="home__bg" alt="" />
                <div className="main_container home__container">
                    <h3 className="home__subtitle">
                        $796.94M
                        <span>Assets <br /> Staked</span>
                    </h3>
                    <h2 className="text-h2 home__title">Liquid restaking with etETH</h2>
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
        </>
    ) 
}