import { useState } from "react"


export default function (props) {

const [score, setScore] = useState(0)

function decrementScore() {
    setScore(score - 100)
}

function incrementScore() {
    setScore(score + 100)
}

function resetScore() {
    setScore(0)
}

    return (
        <div>
            <h2>Score: {score} </h2>
            <button onClick={decrementScore}>Decrease</button>
            <button onClick={incrementScore}>Increase</button>
            <button onClick={resetScore}>Reset</button>
        </div>
    )
}