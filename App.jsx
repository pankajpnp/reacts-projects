import React, { useState } from 'react'
import QuizApp from './Components/QuizApp/QuizApp'
import { Quizes } from './Components/Questions'
import ScoreCard from './Components/QuizApp/ScoreCard'

const App = () => {
  const [submit,setsubmited]=useState(false)
  const[selected,setselected]=useState(Array(Quizes.length).fill(-1))
  function changeselection(val,quest){
      let arr=selected;
      arr[quest]=val;
      setselected(arr)
      console.log(arr)
  }
  function submitactive(){
    console.log("Fahter Submission")
    setsubmited(true)
    
  }
  function retake(){
    setsubmited(false)
    reset()
  }
  function reset(){
    setselected(Array(Quizes.length).fill(-1))
  }
  return (
    <>
    {submit ?<ScoreCard arr={selected} retake={retake} />:<QuizApp changeselection={changeselection} selected={selected} resetarr={reset} submited={submitactive}/> }
    
    </>

  )
}
export default App
