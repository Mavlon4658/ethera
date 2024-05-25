import { useEffect } from "react"

export default function Defi ({setActiveNav}) {

    useEffect(() => {
        setActiveNav('DeFi')
    }, [])
    
    return (
        <div className="dashboard__container defi">
            <h2>Defi</h2>
        </div>
    )
}