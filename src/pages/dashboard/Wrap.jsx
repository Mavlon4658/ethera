import { useEffect, useState } from "react"
import IMG from "../../assets/images"
import { NumericFormat } from 'react-number-format';
import { PatternFormat } from 'react-number-format';

export default function Wrap ({setConnectWallet, setActiveNav}) {
    const [inputValue, setInputValue] = useState('')
    const [inputValue2, setInputValue2] = useState('')

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
                        {/* <input type="number" placeholder="0.0" /> */}
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
                        {/* <input type="number" placeholder="0.0" /> */}
                        <NumericFormat
                            value={inputValue2}
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
                        <span>wetETH</span>
                    </div>
                </div>
                <button
                    type="button"
                    className="btn_gradient submit_btn"
                    onClick={() => {setConnectWallet(true)}}
                >Connect Wallet</button>
            </form>
        </div>
    </div>)
}