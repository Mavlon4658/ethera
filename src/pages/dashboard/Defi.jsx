import { useEffect } from "react"

export default function Defi ({setActiveNav}) {

    useEffect(() => {
        setActiveNav('DeFi')
    }, [])
    
    return (
        <>
            <h2>Defi</h2>
        </>
    )
}