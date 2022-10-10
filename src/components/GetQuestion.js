import { useEffect, useState } from "react";

const url = "http://jservice.io/api/random"

export default function GetQuestion(props) {
  const [triviaData, setTriviaData] = useState([]);

  useEffect(()=>{
    fetch(url)
      .then((resp) => resp.json())
      .then((triviaData) => setTriviaData(triviaData[0]))
      .catch((error) => console.log(error))
  },[])
  
    //const category = triviaData.category.title
    const {value,question,answer} = triviaData
   
function handleClick() {
  window.location.reload()
}

  return (
    <>
      <h2>Let's Play!</h2>
      <button onClick={handleClick}>Get random trivia question</button>
      <h3>Cetegory: {}</h3>
      <h4>Points: {value}</h4>
      <h4>Question: {question}</h4>
      <h4>Answer: {answer}</h4>
      <button onClick={()=>{}}>Click to Reveal Answer</button>
    </> 
  )
}