import { useEffect, useState } from "react"
import IMG from "../../assets/images"

export default function Defi ({setActiveNav}) {
    const [tab, setTab] = useState(1)

    useEffect(() => {
        setActiveNav('DeFi')
    }, [])
    
    return (
        <div className="defi">
            <div className="dashboard__container defi__container">
                <h2 className="defi__title">Defi</h2>
                <p className="d-p4 defi__description">Use etETH and explore rewards using DeFi opportunities</p>

                {/* Tab */}
                <div className="tab">
                    {/* Tab head */}
                    <div className="tab_head">
                        <button className={tab == 1 ? 'active' : ''} onClick={() => {setTab(1)}}>All</button>
                        <button className={tab == 2 ? 'active' : ''} onClick={() => {setTab(2)}}>Ethereum</button>
                        <button className={tab == 3 ? 'active' : ''} onClick={() => {setTab(3)}}>Arbitrum</button>
                    </div>
                    {/* Tab head end */}
                    
                    {/* Tab body */}
                    <div className="tab_body">

                        <div className={`tab_body__item ${tab == 1 ? 'active' : ''}`}>
                            <div className="table">
                                <h3 className="subtitle">Ethereum</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Assets</td>
                                            <td>APY</td>
                                            <td>TVL</td>
                                            <td>Provider</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="assets">
                                                    <div className="icons">
                                                        <img src={IMG.assetsIcon1} alt="" />
                                                        <img src={IMG.assetsIcon2} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h4>etETH - wETH</h4>
                                                        <p>3x Ether Points</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="apy">-</td>
                                            <td className="tvl">-</td>
                                            <td>
                                                <div className="provider">
                                                    <img src={IMG.providerIcon1} alt="" />
                                                    <span>Balancer</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btn">
                                                    <a href="#" className="btn_gradient">Add Liquidity</a>
                                                    <a href="#" className="btn_light">Swap</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="assets">
                                                    <div className="icons">
                                                        <img src={IMG.assetsIcon1} alt="" />
                                                        <img src={IMG.assetsIcon3} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h4>etETH - ETH</h4>
                                                        <p>1x Ether Points</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="apy">-</td>
                                            <td className="tvl">-</td>
                                            <td>
                                                <div className="provider">
                                                    <img src={IMG.providerIcon2} alt="" />
                                                    <span>Uniswap</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btn">
                                                    <a href="#" className="btn_gradient">Add Liquidity</a>
                                                    <a href="#" className="btn_light">Swap</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="assets">
                                                    <div className="icons">
                                                        <img src={IMG.assetsIcon1} alt="" />
                                                        <img src={IMG.assetsIcon4} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h4>etETH - sfrxETH</h4>
                                                        <p>1x Ether Points</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="apy">-</td>
                                            <td className="tvl">-</td>
                                            <td>
                                                <div className="provider">
                                                    <img src={IMG.providerIcon3} alt="" />
                                                    <span>Curve</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btn">
                                                    <a href="#" className="btn_gradient">Add Liquidity</a>
                                                    <a href="#" className="btn_light">Swap</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="assets">
                                                    <div className="icons">
                                                        <img src={IMG.assetsIcon1} alt="" />
                                                        <img src={IMG.assetsIcon5} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h4>etETH - ETH</h4>
                                                        <p>2x Ether Points</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="apy">-</td>
                                            <td className="tvl">-</td>
                                            <td>
                                                <div className="provider">
                                                    <img src={IMG.providerIcon4} alt="" />
                                                    <span>Camelot</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btn">
                                                    <a href="#" className="btn_gradient">Add Liquidity</a>
                                                    <a href="#" className="btn_light">Swap</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="assets">
                                                    <div className="icons">
                                                        <img src={IMG.assetsIcon1} alt="" />
                                                        <img src={IMG.assetsIcon6} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h4>etETH - frxETH</h4>
                                                        <p>1x Ether Points</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="apy">-</td>
                                            <td className="tvl">-</td>
                                            <td>
                                                <div className="provider">
                                                    <img src={IMG.providerIcon5} alt="" />
                                                    <span>Ramses</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btn">
                                                    <a href="#" className="btn_gradient">Add Liquidity</a>
                                                    <a href="#" className="btn_light">Swap</a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="table_mobile">

                                <div className="table_item">
                                    <div className="table_head">
                                        <p className="d-p3">Ethereum</p>
                                        <p className="d-p6">Provider</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <p className="d-p6 text_left">
                                                <span className="imgs">
                                                    <img src={IMG.assetsIcon1} alt="" />
                                                    <img src={IMG.assetsIcon2} alt="" />
                                                </span>
                                                <span>etETH-wETH</span>
                                            </p>
                                            <p className="d-p6 text_right">
                                                <img src={IMG.providerIcon1} alt="" />
                                                <span>Balancer</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="d-p6 text_left">APY: 3.09%</p>
                                            <p className="d-p6 text_right">TVL:$0M</p>
                                        </li>
                                    </ul>
                                    <div className="btns">
                                        <a href="#" className="btn_gradient">Add Liquidity</a>
                                        <a href="#" className="btn_light">Sawap</a>
                                    </div>
                                </div>

                                <div className="table_item">
                                    <div className="table_head">
                                        <p className="d-p3">Ethereum</p>
                                        <p className="d-p6">Provider</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <p className="d-p6 text_left">
                                                <span className="imgs">
                                                    <img src={IMG.assetsIcon1} alt="" />
                                                    <img src={IMG.assetsIcon2} alt="" />
                                                </span>
                                                <span>etETH-ETH</span>
                                            </p>
                                            <p className="d-p6 text_right">
                                                <img src={IMG.providerIcon2} alt="" />
                                                <span>Uniswap</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="d-p6 text_left">APY: 3.09%</p>
                                            <p className="d-p6 text_right">TVL:$0M</p>
                                        </li>
                                    </ul>
                                    <div className="btns">
                                        <a href="#" className="btn_gradient">Add Liquidity</a>
                                        <a href="#" className="btn_light">Sawap</a>
                                    </div>
                                </div>

                                <div className="table_item">
                                    <div className="table_head">
                                        <p className="d-p3">Ethereum</p>
                                        <p className="d-p6">Provider</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <p className="d-p6 text_left">
                                                <span className="imgs">
                                                    <img src={IMG.assetsIcon1} alt="" />
                                                    <img src={IMG.assetsIcon2} alt="" />
                                                </span>
                                                <span>etETH - sfrxETH</span>
                                            </p>
                                            <p className="d-p6 text_right">
                                                <img src={IMG.providerIcon3} alt="" />
                                                <span>Curve</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="d-p6 text_left">APY: 3.09%</p>
                                            <p className="d-p6 text_right">TVL:$0M</p>
                                        </li>
                                    </ul>
                                    <div className="btns">
                                        <a href="#" className="btn_gradient">Add Liquidity</a>
                                        <a href="#" className="btn_light">Sawap</a>
                                    </div>
                                </div>

                                <div className="table_item">
                                    <div className="table_head">
                                        <p className="d-p3">Ethereum</p>
                                        <p className="d-p6">Provider</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <p className="d-p6 text_left">
                                                <span className="imgs">
                                                    <img src={IMG.assetsIcon1} alt="" />
                                                    <img src={IMG.assetsIcon2} alt="" />
                                                </span>
                                                <span>etETH - ETH</span>
                                            </p>
                                            <p className="d-p6 text_right">
                                                <img src={IMG.providerIcon4} alt="" />
                                                <span>Camelot</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="d-p6 text_left">APY: 3.09%</p>
                                            <p className="d-p6 text_right">TVL:$0M</p>
                                        </li>
                                    </ul>
                                    <div className="btns">
                                        <a href="#" className="btn_gradient">Add Liquidity</a>
                                        <a href="#" className="btn_light">Sawap</a>
                                    </div>
                                </div>

                                <div className="table_item">
                                    <div className="table_head">
                                        <p className="d-p3">Ethereum</p>
                                        <p className="d-p6">Provider</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <p className="d-p6 text_left">
                                                <span className="imgs">
                                                    <img src={IMG.assetsIcon1} alt="" />
                                                    <img src={IMG.assetsIcon2} alt="" />
                                                </span>
                                                <span>etETH - frxETH</span>
                                            </p>
                                            <p className="d-p6 text_right">
                                                <img src={IMG.providerIcon5} alt="" />
                                                <span>Ramses</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="d-p6 text_left">APY: 3.09%</p>
                                            <p className="d-p6 text_right">TVL:$0M</p>
                                        </li>
                                    </ul>
                                    <div className="btns">
                                        <a href="#" className="btn_gradient">Add Liquidity</a>
                                        <a href="#" className="btn_light">Sawap</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={`tab_body__item ${tab == 2 ? 'active' : ''}`}>
                            <div className="table">
                                <h3 className="subtitle">Ethereum</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Assets</td>
                                            <td>APY</td>
                                            <td>TVL</td>
                                            <td>Provider</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="assets">
                                                    <div className="icons">
                                                        <img src={IMG.assetsIcon1} alt="" />
                                                        <img src={IMG.assetsIcon2} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h4>etETH - wETH</h4>
                                                        <p>3x Ether Points</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="apy">-</td>
                                            <td className="tvl">-</td>
                                            <td>
                                                <div className="provider">
                                                    <img src={IMG.providerIcon1} alt="" />
                                                    <span>Balancer</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btn">
                                                    <a href="#" className="btn_gradient">Add Liquidity</a>
                                                    <a href="#" className="btn_light">Swap</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="assets">
                                                    <div className="icons">
                                                        <img src={IMG.assetsIcon1} alt="" />
                                                        <img src={IMG.assetsIcon4} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h4>etETH - sfrxETH</h4>
                                                        <p>1x Ether Points</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="apy">-</td>
                                            <td className="tvl">-</td>
                                            <td>
                                                <div className="provider">
                                                    <img src={IMG.providerIcon3} alt="" />
                                                    <span>Curve</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btn">
                                                    <a href="#" className="btn_gradient">Add Liquidity</a>
                                                    <a href="#" className="btn_light">Swap</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="assets">
                                                    <div className="icons">
                                                        <img src={IMG.assetsIcon1} alt="" />
                                                        <img src={IMG.assetsIcon3} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h4>etETH - ETH</h4>
                                                        <p>1x Ether Points</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="apy">-</td>
                                            <td className="tvl">-</td>
                                            <td>
                                                <div className="provider">
                                                    <img src={IMG.providerIcon2} alt="" />
                                                    <span>Uniswap</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btn">
                                                    <a href="#" className="btn_gradient">Add Liquidity</a>
                                                    <a href="#" className="btn_light">Swap</a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="table_mobile">

                                <div className="table_item">
                                    <div className="table_head">
                                        <p className="d-p3">Ethereum</p>
                                        <p className="d-p6">Provider</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <p className="d-p6 text_left">
                                                <span className="imgs">
                                                    <img src={IMG.assetsIcon1} alt="" />
                                                    <img src={IMG.assetsIcon2} alt="" />
                                                </span>
                                                <span>etETH-wETH</span>
                                            </p>
                                            <p className="d-p6 text_right">
                                                <img src={IMG.providerIcon1} alt="" />
                                                <span>Balancer</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="d-p6 text_left">APY: 3.09%</p>
                                            <p className="d-p6 text_right">TVL:$0M</p>
                                        </li>
                                    </ul>
                                    <div className="btns">
                                        <a href="#" className="btn_gradient">Add Liquidity</a>
                                        <a href="#" className="btn_light">Sawap</a>
                                    </div>
                                </div>

                                <div className="table_item">
                                    <div className="table_head">
                                        <p className="d-p3">Ethereum</p>
                                        <p className="d-p6">Provider</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <p className="d-p6 text_left">
                                                <span className="imgs">
                                                    <img src={IMG.assetsIcon1} alt="" />
                                                    <img src={IMG.assetsIcon2} alt="" />
                                                </span>
                                                <span>etETH - sfrxETH</span>
                                            </p>
                                            <p className="d-p6 text_right">
                                                <img src={IMG.providerIcon3} alt="" />
                                                <span>Curve</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="d-p6 text_left">APY: 3.09%</p>
                                            <p className="d-p6 text_right">TVL:$0M</p>
                                        </li>
                                    </ul>
                                    <div className="btns">
                                        <a href="#" className="btn_gradient">Add Liquidity</a>
                                        <a href="#" className="btn_light">Sawap</a>
                                    </div>
                                </div>

                                <div className="table_item">
                                    <div className="table_head">
                                        <p className="d-p3">Ethereum</p>
                                        <p className="d-p6">Provider</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <p className="d-p6 text_left">
                                                <span className="imgs">
                                                    <img src={IMG.assetsIcon1} alt="" />
                                                    <img src={IMG.assetsIcon2} alt="" />
                                                </span>
                                                <span>etETH-ETH</span>
                                            </p>
                                            <p className="d-p6 text_right">
                                                <img src={IMG.providerIcon2} alt="" />
                                                <span>Uniswap</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="d-p6 text_left">APY: 3.09%</p>
                                            <p className="d-p6 text_right">TVL:$0M</p>
                                        </li>
                                    </ul>
                                    <div className="btns">
                                        <a href="#" className="btn_gradient">Add Liquidity</a>
                                        <a href="#" className="btn_light">Sawap</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={`tab_body__item ${tab == 3 ? 'active' : ''}`}>
                            <div className="table">
                                <h3 className="subtitle">Ethereum</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Assets</td>
                                            <td>APY</td>
                                            <td>TVL</td>
                                            <td>Provider</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="assets">
                                                    <div className="icons">
                                                        <img src={IMG.assetsIcon1} alt="" />
                                                        <img src={IMG.assetsIcon5} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h4>etETH - ETH</h4>
                                                        <p>2x Ether Points</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="apy">-</td>
                                            <td className="tvl">-</td>
                                            <td>
                                                <div className="provider">
                                                    <img src={IMG.providerIcon4} alt="" />
                                                    <span>Camelot</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btn">
                                                    <a href="#" className="btn_gradient">Add Liquidity</a>
                                                    <a href="#" className="btn_light">Swap</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="assets">
                                                    <div className="icons">
                                                        <img src={IMG.assetsIcon1} alt="" />
                                                        <img src={IMG.assetsIcon6} alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <h4>etETH - frxETH</h4>
                                                        <p>1x Ether Points</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="apy">-</td>
                                            <td className="tvl">-</td>
                                            <td>
                                                <div className="provider">
                                                    <img src={IMG.providerIcon5} alt="" />
                                                    <span>Ramses</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btn">
                                                    <a href="#" className="btn_gradient">Add Liquidity</a>
                                                    <a href="#" className="btn_light">Swap</a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="table_mobile">

                                <div className="table_item">
                                    <div className="table_head">
                                        <p className="d-p3">Ethereum</p>
                                        <p className="d-p6">Provider</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <p className="d-p6 text_left">
                                                <span className="imgs">
                                                    <img src={IMG.assetsIcon1} alt="" />
                                                    <img src={IMG.assetsIcon2} alt="" />
                                                </span>
                                                <span>etETH - ETH</span>
                                            </p>
                                            <p className="d-p6 text_right">
                                                <img src={IMG.providerIcon4} alt="" />
                                                <span>Camelot</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="d-p6 text_left">APY: 3.09%</p>
                                            <p className="d-p6 text_right">TVL:$0M</p>
                                        </li>
                                    </ul>
                                    <div className="btns">
                                        <a href="#" className="btn_gradient">Add Liquidity</a>
                                        <a href="#" className="btn_light">Sawap</a>
                                    </div>
                                </div>

                                <div className="table_item">
                                    <div className="table_head">
                                        <p className="d-p3">Ethereum</p>
                                        <p className="d-p6">Provider</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <p className="d-p6 text_left">
                                                <span className="imgs">
                                                    <img src={IMG.assetsIcon1} alt="" />
                                                    <img src={IMG.assetsIcon2} alt="" />
                                                </span>
                                                <span>etETH - frxETH</span>
                                            </p>
                                            <p className="d-p6 text_right">
                                                <img src={IMG.providerIcon5} alt="" />
                                                <span>Ramses</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="d-p6 text_left">APY: 3.09%</p>
                                            <p className="d-p6 text_right">TVL:$0M</p>
                                        </li>
                                    </ul>
                                    <div className="btns">
                                        <a href="#" className="btn_gradient">Add Liquidity</a>
                                        <a href="#" className="btn_light">Sawap</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* Tab body end */}
                {/* Tab end */}

                </div>
            </div>
        </div>
    )
}