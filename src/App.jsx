import { useEffect, useState } from "react"

export default function App() {
    const [greeting, setGreeting] = useState('')


    useEffect(() => {
        window.api.helloWorld()
            .then(result => setGreeting(result))
    }, [])

    return (
        <div className="container text-center">
            <div className="row">
                <h1 className="col-12">{greeting}</h1>
            </div>
            <div className="row mt-5">
                <span className="text-muted fs-5">This is a simple React + Electron Skeleton</span>
            </div>
        </div>
    )
}