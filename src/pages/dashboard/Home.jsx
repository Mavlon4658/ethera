import { useEffect } from "react"

export default function Home ({setActiveNav}) {

    useEffect(() => {
        setActiveNav('Dashboard')
    }, [])

    return (
        <>
            <h1>Dashboard Home</h1>

        </>
    )
}