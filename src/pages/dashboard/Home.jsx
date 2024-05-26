import { useEffect, useState } from "react"
import IMG from "../../assets/images"

export default function Home ({setConnectWallet, setActiveNav}) {
    const [accordion, setAccordion] = useState(true)

    useEffect(() => {
        setActiveNav('Dashboard')
    }, [])

    return (
        <div className="dashboard__container dashboard_home">
            <h2>Dashboard</h2>
            <ul className="dashboard_home__card">
                <li className="dashboard_home__card_item">
                    <h3 className="title">Your rewards</h3>
                    <p className="description">
                        Your Ether Points are now displayed as Ether Grand Points for easier visualization. <br /> 
                        Each Ether Grand Point = 1000 Ether Points. Your actual Ether Points remains the same.
                    </p>
                    <div className="line"></div>
                    <ul className="point_card">
                        <li className="point_card__item">
                            <img src={IMG.logo} alt="" className="icon" />
                            <div className="text">
                                <div className="text_head">
                                    <h4 className="text_head__title">
                                        - <br />
                                        <span>Ether Grand Points</span>
                                    </h4>
                                    <img src={IMG.chevronBottom} onClick={() => {setAccordion(!accordion)}} alt="" />
                                </div>
                                <ul className={`${accordion ? 'active' : ''}`}>
                                    <li>
                                        <span>Total Ether Points</span>
                                        <span>-</span>
                                    </li>
                                    <li>
                                        <span>Conversion Factor</span>
                                        <span>-</span>
                                    </li>
                                    <li>
                                        <span>Ether Grand Points</span>
                                        <span>-</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="point_card__item">
                            <img src={IMG.pointIcon} alt="" className="icon" />
                            <div className="text">
                                <div className="text_head">
                                    <h4 className="text_head__title">
                                        - <br />
                                        <span>Total EigenLayer Points</span>
                                    </h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a href="#" className="btn_light">
                        <img src={IMG.warningBlack} alt="" />
                        <span>Connect wallet to view rewards</span>
                    </a>
                </li>
                <li className="dashboard_home__card_item">
                    <h3 className="title">Referral</h3>
                    <div className="line light"></div>
                    <div className="earn">
                        <img src={IMG.logo} alt="" />
                        <div className="earn_text">
                            <p className="d-p3">Earn now</p>
                            <p className="d-p4">Ether Points earned from referral</p>
                        </div>
                    </div>
                    <p className="d-p4">Earn upto 20% of Ether Points accrued by your referrals</p>
                    <div className="alert_gray">
                        <img src={IMG.warning} alt="" />
                        <p className="d-p4">Connect wallet to refer your community</p>
                    </div>
                </li>
            </ul>
            <form action="" className="dashboard_home__form">
                <label htmlFor="" className="d-p2">Your rewards from DeFi</label>
                <div className="text">
                    <div className="text_left">Assets</div>
                    <div className="text_right">
                        <span>Ether Points</span>
                        <span>Eigenlayer points</span>
                    </div>
                </div>
                <button
                    type="button"
                    className="btn_gradient"
                    onClick={() => {setConnectWallet(true)}}
                >Connect Wallet</button>
            </form>
        </div>
    )
}