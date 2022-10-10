import { useEffect, useState } from "react";



export default function GetQuestion(props) {
  const [triviaData, setTriviaData] = useState([]);

  const url = "http://jservice.io/api/random"

  const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setTriviaData(data[0])
  }

  useEffect(()=>{
    getData()
  }, [])


  const {value,question,answer} = triviaData
      //console.log(triviaData.category.title)
    //const {value,question,answer} = triviaData
    //const {category:{title}} = triviaData
    
  
   
    const [isAnswerClicked, setAnswerClicked] =useState(false)

function handleQuestionClick() {
  getData()
  setAnswerClicked(false)
}

function handleAnswerClick() {
  setAnswerClicked(true)
}

if(isAnswerClicked === false) {
  return (
    <>
      <h2>Let's Play!</h2>
      <button onClick={handleQuestionClick}>Get random trivia question</button>
      <h3>Cetegory: {}</h3>
      <h4>Points: {value}</h4>
      <h4>Question: {question}</h4>
      <button onClick={handleAnswerClick}>Click to Reveal Answer</button>
    </> 
  )

}

if(isAnswerClicked ) {
 return (
    <>
      <h2>Let's Play!</h2>
      <button onClick={handleQuestionClick}>Get random trivia question</button>
      <h3>Cetegory: {}</h3>
      <h4>Points: {value}</h4>
    
      <h4>Answer: {answer}</h4>
      <button onClick={handleAnswerClick}>Click to Reveal Answer</button>
    </> 
  )
}
}