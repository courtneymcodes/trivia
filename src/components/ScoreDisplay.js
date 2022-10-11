import { useState } from "react"


export default function ScoreDisplay (props) {

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
            <button className="increase-btn" onClick={decrementScore}>Decrease</button>
            <button className="decrease-btn"onClick={incrementScore}>Increase</button>
            <button className="reset-btn"onClick={resetScore}>Reset</button>
        </div>
    )
}