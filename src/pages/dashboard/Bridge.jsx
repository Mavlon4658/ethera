import { useEffect, useState } from "react"
import IMG from "../../assets/images"

export default function Bridge ({setActiveNav}) {
    const [bridgeList, setBridgeList] = useState([
        {name: "Arbitrum", img: IMG.bridgeIcon1},
        {name: "Optimism", img: IMG.bridgeIcon2},
        {name: "Manta Pacific", img: IMG.bridgeIcon3},
        {name: "Blast", img: IMG.bridgeIcon4},
    ])
    const [activeBridge, setActiveBridge] = useState(1)

    useEffect(() => {
        setActiveNav('Bridge etETH')
    }, [])

    return (<div className="dashboard__container bridge">
        <h2 className="bridge__title">Bridge etETH</h2>
        <p className="d-p5 bridge__description">Securely bridge etETH from Ethereum to our partner networks</p>
        <div className="bridge__list">
            {bridgeList.map((list, listID) => (
                <button
                    className={`list_item ${activeBridge == listID ? 'active' : ''}`}
                    key={listID}
                    onClick={() => {setActiveBridge(listID)}}
                >
                    <span className="list_item__left">
                        Bridge To
                        <span>{list.name}</span>
                    </span>
                    <img src={list.img} alt="" className="icon" />
                </button>
            ))}
        </div>
    </div>)
}