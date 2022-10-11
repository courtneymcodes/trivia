import { useEffect, useState } from "react";



export default function GetQuestion(props) {
  const [triviaData, setTriviaData] = useState([]);

  const url = "http://jservice.io/api/random"

  const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setTriviaData(data[0])
    console.log(data[0])
    console.log(triviaData)
  }

  useEffect(()=>{
    getData()
  }, [])


  //const {value,question,answer} = triviaData
      //console.log(triviaData.category.title)
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
      <button className="question-btn" onClick={handleQuestionClick}>Get random trivia question</button>
      <h3>Category: {triviaData.category?.title}</h3>
      <h3>Points: {triviaData.value}</h3>
      <h3>Question: {triviaData.question}</h3>
      <button className="answer-btn" onClick={handleAnswerClick}>Click to Reveal Answer</button>
    </> 
  )

}

if(isAnswerClicked ) {
 return (
    <>
      <h2>Let's Play!</h2>
      <button className="question-btn" onClick={handleQuestionClick}>Get random trivia question</button>
      <h3>Category: {triviaData.category?.title}</h3>
      <h3>Points: {triviaData.value}</h3>
    
      <h3>Answer: {triviaData.answer}</h3>
      <button className="answer-btn" onClick={handleAnswerClick}>Click to Reveal Answer</button>
    </> 
  )
}
}