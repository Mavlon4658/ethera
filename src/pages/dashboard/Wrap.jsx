import { useEffect } from "react"
import IMG from "../../assets/images"

export default function Wrap ({setActiveNav}) {

    useEffect(() => {
        setActiveNav('Wrap etETH')
    }, [])

    return (<div className="wrap">
        <div className="dashboard__container wrap__container">
            <div className="wrap__head">
                <h2 className="wrap__title">Wrap is coming soon</h2>
                <p className="alert_light">1 etETH = 1 wetETH</p>
            </div>
            <form action="" className="wrap__form">
                <div className="form_control">
                    <label htmlFor="" className="d-p3">From</label>
                    <div className="input">
                        <input type="number" placeholder="0.0" />
                        <span>etETH</span>
                        <button type="button">max</button>
                    </div>
                </div>
                <div className="change_btn">
                    <button type="button">
                        <img src={IMG.convert} alt="" />
                    </button>
                </div>
                <div className="form_control">
                    <label htmlFor="" className="d-p3">To</label>
                    <div className="input">
                        <input type="number" placeholder="0.0" />
                        <span>wetETH</span>
                    </div>
                </div>
                <button type="submit" className="btn_gradient submit_btn">Connect Wallet</button>
            </form>
        </div>
    </div>)
}