function NextButton({ dispatch, answer, numQuestios, index }) {
  if (answer === null) return null;
  if(index < numQuestios - 1)
  return (
    <button className="btn btn-ui" onClick={()=>dispatch({type: "nextQuestion"})}>
      Next
    </button>

    
  )
  if (index === numQuestios - 1) 
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finish</button>
    )
}

export default NextButton
