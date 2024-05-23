import { useState } from "react";
import IMG from "../../assets/images";

export default function Restake () {
    const [tab, setTab] = useState(1);
    const [select, setSelect] = useState(1);
    const [selectOpen, setSelectOpen] = useState(true)

    return (<>
        <div className="dashboard_card restake">

            <div className="restake__head">
                <h3 className="d-h1">Restake</h3>
                <span>
                    <img src={IMG.audit} alt="" />
                    Audited
                </span>
            </div>

            <ul className="restake_value">
                <li>
                    <p className="d-p4 data">
                        <span>APY</span>
                        <img src={IMG.warning} alt="" />
                    </p>
                    <p className="d-p4 value">2.5%</p>
                </li>
                <li>
                    <p className="d-p4">Total Value Locked</p>
                    <p className="d-p4 value">
                        <span>253,053.67 ETH</span>
                        <span className="line"></span>
                        <span>$800,682,067</span>
                    </p>
                </li>
                <li>
                    <p className="alert-grey">30-day moving average</p>
                </li>
            </ul>

            <div className="tab">
                <div className="tab_head">
                    <button className={tab == 1 ? 'active' : ''} onClick={() => {setTab(1)}}>Stake</button>
                    <button className={tab == 2 ? 'active' : ''} onClick={() => {setTab(2)}}>Unstake</button>
                    <button className={tab == 3 ? 'active' : ''} onClick={() => {setTab(3)}}>Withdraw</button>
                </div>
                <div className="tab_body">

                    <div className={`tab_body__item ${tab == 1 ? 'active' : ''}`}>
                        <form action="" className="restake__form">
                            <label className="d-p4">Select the asset</label>
                            <div className={`select ${selectOpen ? 'active' : ''}`}>
                                <button type="button" className="select_open" onClick={() => {setSelectOpen(false)}}>
                                    <span className="icon">
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0.999999L8.00002 8L15 1" stroke="#EFEFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </button>
                                <button type="button" className={`select_item ${select == 1 ? 'active' : ''}`} onClick={() => {setSelect(1)}}>
                                    <span className="select_item__left">
                                        <img src={IMG.selectIcon1} alt="" />
                                        <img src={IMG.selectIcon1Active} className="active" alt="" />
                                        ETHx
                                    </span>
                                    <span className="select_item__right">
                                        <span className="alert-grey">EL Points</span>
                                        <span className="alert-grey">Ether Points</span>
                                        <span className="alert-grey">+100 EL Points/ETH</span>
                                    </span>
                                </button>
                                <button type="button" className={`select_item ${select == 2 ? 'active' : ''}`} onClick={() => {setSelect(2)}}>
                                    <span className="select_item__left">
                                        <img src={IMG.selectIcon2} alt="" />
                                        <img src={IMG.selectIcon2Active} className="active" alt="" />
                                        ETHx
                                    </span>
                                    <span className="select_item__right">
                                        <span className="alert-grey">EL Points</span>
                                        <span className="alert-grey">Ether Points</span>
                                        <span className="alert-grey">+50 EL Points/ETH</span>
                                    </span>
                                </button>
                                <button type="button" className={`select_item ${select == 3 ? 'active' : ''}`} onClick={() => {setSelect(3)}}>
                                    <span className="select_item__left">
                                        <img src={IMG.selectIcon3} alt="" />
                                        <img src={IMG.selectIcon3Active} className="active" alt="" />
                                        ETHx
                                    </span>
                                    <span className="select_item__right">
                                        <span className="alert-grey">EL Points</span>
                                        <span className="alert-grey">Ether Points</span>
                                        <span className="alert-grey">+50 EL Points/ETH</span>
                                    </span>
                                </button>
                                <button type="button" className={`select_item ${select == 4 ? 'active' : ''}`} onClick={() => {setSelect(4)}}>
                                    <span className="select_item__left">
                                        <img src={IMG.selectIcon4} alt="" />
                                        <img src={IMG.selectIcon4Active} className="active" alt="" />
                                        ETHx
                                    </span>
                                    <span className="select_item__right">
                                        <span className="alert-grey">EL Points</span>
                                        <span className="alert-grey">Ether Points</span>
                                    </span>
                                </button>
                                <div className="select_bottom">
                                    <span>Other LSTs</span>
                                    <button type="button" className="btn_light" onClick={() => {setSelectOpen(true)}}>Coming soon</button>
                                </div>
                            </div>
                            <div className="form_control">
                                <label className="d-p4">Enter amount</label>
                                <div className="input">
                                    <input type="number" placeholder="0.0" />
                                    <button type="button" className="btn_gradient">MAX</button>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <p className="d-p4">You will get</p>
                                    <p className="d-p4">0 etETH</p>
                                </li>
                                <li>
                                    <p className="d-p4">Exchange rate</p>
                                    <p className="d-p4">1 etETH = 0.9840 ETHx</p>
                                </li>
                            </ul>
                            <button type="submit" className="btn_gradient restake__form_submit">Connect Wallet</button>
                            <div className="progress_wrap">
                                <div className="progress_text">
                                    <p className="d-p4">Restaking limit</p>
                                    <p className="d-p5">96,928.55 / 200K ETHx</p>
                                </div>
                                <div className="progress">
                                    <span style={{width: '50%'}}></span>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className={`tab_body__item ${tab == 2 ? 'active' : ''}`}>
                        <div className="unstake">
                            <h4>Unstake is coming soon</h4>
                        </div>
                    </div>

                    <div className={`tab_body__item ${tab == 3 ? 'active' : ''}`}>
                        <div className="withdraw">
                            <h4>Withdraw is coming soon</h4>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </>)
}