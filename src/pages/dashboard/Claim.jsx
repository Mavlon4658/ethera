import { useEffect } from "react";
import IMG from "../../assets/images";

export default function Claim ({setActiveNav}) {

    useEffect(() => {
        setActiveNav('Claim ETHER')
    }, [])

    return (<div className="claim">
        <div className="dashboard__container">
            <div className="claim__head">
                <div className="claim_card claim__head_item">
                    <h3>427 104 620,73</h3>
                    <p className="d-p5">EL points earned on Ethera</p>
                    <img src={IMG.claimCard1} alt="" />
                </div>
                <div className="claim_card claim__head_item">
                    <h3>50 883 897,02</h3>
                    <p className="d-p5">$ETHER tokens claimed</p>
                    <img src={IMG.logo} alt="" />
                </div>
            </div>

            <div className="claim__body claim_card">
                <div className="head">
                    <h3>Claim $ETHER</h3>
                    <p>1 $ETHER = 1 EL Point</p>
                </div>
                <ul>
                    <li>
                        <p className="d-p3">
                            <span>Claimable EL Points</span>
                            <div className="alert">
                                <img src={IMG.warning} alt="" />
                                <div className="alert_value">
                                    <span>Wait for news on conversion of your EL Points</span>
                                </div>
                            </div>
                        </p>
                        <p className="d-p3">- EL Points</p>
                    </li>
                    <li>
                        <p className="d-p5">
                            <span>Fee</span>
                            <div className="alert">
                                <img src={IMG.warning} alt="" />
                                <div className="alert_value">
                                    <span>Fee (0.5%) for DeFi enablement of ETHER</span>
                                </div>
                            </div>
                        </p>
                        <p className="d-p5">- Ethera</p>
                    </li>
                </ul>
                <button className="btn_gradient">Connect Wallet</button>
            </div>

            <div className="claim__foot claim_card">
                <p className="d-p4">Connect Wallet</p>
                <h3>0 ETHERA</h3>
                <p className="d-p4 subtitle">My EL Points</p>
                <ul>
                    <li>
                        <p className="d-p3">Converted</p>
                        <p className="d-p3">0 EL Points</p>
                    </li>
                    <li>
                        <p className="d-p3">Available for future cycles</p>
                        <p className="d-p3">- EL Points</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>)
}