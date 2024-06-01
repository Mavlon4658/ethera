import { useEffect, useRef, useState } from "react";
import IMG from "../../assets/images";
import { NumericFormat } from 'react-number-format';
import { PatternFormat } from 'react-number-format';

export default function Restake ({setConnectWallet, setActiveNav}) {
    const [tab, setTab] = useState(1);
    const [select, setSelect] = useState(null);
    const [selectOpen, setSelectOpen] = useState(true);
    const [auditOpen, setAuditOpen] = useState(false)
    const selectRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        setActiveNav('Restake')
    }, [])

    function toggleSelect () {
        const el = selectRef.current;
        // console.log(el.style.maxHeight);
        // el.style.maxHeight = el.style.maxHeight != '73px' ? '73px' : el.scrollHeight + 'px';
        el.classList.toggle('active')
        // console.log('ishladi');
    }

    function selected (idx) {
        setSelect(idx);
        // setSelectOpen(true);
        toggleSelect();
    }


    return (<div className="restake_wrap dashboard__container">
        <div className="dashboard_card restake">

            <div className="restake__head">
                <h3 className="d-h1">Restake</h3>
                <button onClick={() => {setAuditOpen(true)}}>
                    <img src={IMG.audit} alt="" />
                    Audited
                </button>
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
                            <div ref={selectRef} className="select_wrap">
                                <button type="button" className="select_open" onClick={() => toggleSelect()}>
                                    <span className="icon">
                                        <svg widths={16} height="9" viewBox="0 0 16 9" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0.999999L8.00002 8L15 1" stroke="#EFEFE5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </button>
                                <div className={`select ${selectOpen ? '' : ''}`}>
                                    <button
                                        type="button"
                                        className={`select_item ${select == 1 ? 'active' : ''}`}
                                        onClick={() => selected(1)}
                                    >
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
                                    <button
                                        type="button"
                                        className={`select_item ${select == 2 ? 'active' : ''}`}
                                        onClick={() => selected(2)}
                                    >
                                        <span className="select_item__left">
                                            <img src={IMG.selectIcon2} alt="" />
                                            <img src={IMG.selectIcon2Active} className="active" alt="" />
                                            ETH
                                        </span>
                                        <span className="select_item__right">
                                            <span className="alert-grey">EL Points</span>
                                            <span className="alert-grey">Ether Points</span>
                                            <span className="alert-grey">+50 EL Points/ETH</span>
                                        </span>
                                    </button>
                                    <button
                                        type="button"
                                        className={`select_item ${select == 3 ? 'active' : ''}`}
                                        onClick={() => selected(3)}
                                    >
                                        <span className="select_item__left">
                                            <img src={IMG.selectIcon3} alt="" />
                                            <img src={IMG.selectIcon3Active} className="active" alt="" />
                                            stETH
                                        </span>
                                        <span className="select_item__right">
                                            <span className="alert-grey">EL Points</span>
                                            <span className="alert-grey">Ether Points</span>
                                            <span className="alert-grey">+50 EL Points/ETH</span>
                                        </span>
                                    </button>
                                    <button
                                        type="button"
                                        className={`select_item ${select == 4 ? 'active' : ''}`}
                                        onClick={() => selected(4)}
                                    >
                                        <span className="select_item__left">
                                            <img src={IMG.selectIcon4} alt="" />
                                            <img src={IMG.selectIcon4Active} className="active" alt="" />
                                            sfrxETH
                                        </span>
                                        <span className="select_item__right">
                                            <span className="alert-grey">EL Points</span>
                                            <span className="alert-grey">Ether Points</span>
                                        </span>
                                    </button>
                                    <div className="select_bottom">
                                        <span>Other LSTs</span>
                                        <button type="button" className="btn_light" onClick={() => toggleSelect()}>Coming soon</button>
                                    </div>
                                </div>
                            </div>
                            <div className="form_control">
                                <label className="d-p4">Enter amount</label>
                                <div className="input">
                                    {/* <input
                                        type="text"
                                        placeholder="0.0"
                                        onWheel={(event) => { event.currentTarget.blur() } }
                                    /> */}
                                    <NumericFormat
                                        value={inputValue}
                                        thousandSeparator={' '}
                                        decimalSeparator={'.'}
                                        decimalScale={1}
                                        fixedDecimalScale={true}
                                        prefix={''}
                                        allowNegative={false}
                                        allowLeadingZeros={false}
                                        allowEmptyFormatting={false}
                                        displayType={'input'}
                                        placeholder={'0.0'}
                                        onValueChange={(values) => console.log(values)}
                                    />
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
                            <button
                                type="button"
                                className="btn_gradient restake__form_submit"
                                onClick={() => {setConnectWallet(true)}}
                            >Connect Wallet</button>
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

        {/* Audit modal */}
        <div className={`audit_modal ${auditOpen ? 'active' : ''}`}>
            <div className="audit_modal__content">
                <div className="content_head">
                    <h3>Safe and Secure</h3>
                    <button onClick={() => {setAuditOpen(false)}}>
                        <img src={IMG.times} alt="" />
                    </button>
                </div>
                <ul className="content_link">
                    <li className="content_link__item">
                        <img src={IMG.auditLink1} alt="" className="icon" />
                        <a href="#" target="_blank">
                            <span>Get full report</span>
                            <img src={IMG.linkIcon} alt="" />
                        </a>
                    </li>
                    <li className="content_link__item">
                        <img src={IMG.auditLink2} alt="" className="icon" />
                        <a href="#" target="_blank">
                            <span>Get full report</span>
                            <img src={IMG.linkIcon} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        {/* Audit modal end */}

    </div>)
}