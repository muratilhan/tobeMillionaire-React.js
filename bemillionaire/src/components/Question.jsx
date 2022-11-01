import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../bootstrap.min.css"
import "../styles/question.css"
function Question({shuffledQuestions, active, setActive, earnedMoney}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [disabled, setDisabled] = useState(false);
  
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [activeClass, setActiveClass] = useState("answer");

    const handleClick = (answer) => {
        setDisabled(true)
        setSelectedAnswer(answer);
        setActiveClass("answer active")
        setTimeout(()=>{
            if(answer.correct){
                setActiveClass("answer correct")
                setTimeout(()=>{
                    setActive(prev => prev+1)
                   
                },1000)
            }else{
                setActiveClass("answer wrong")
                setTimeout(()=>{
                    setShow(!show)
                },1000)
                
            }
        },2000)
    }

   useEffect(()=>{
    setDisabled(false)
   },[active])

    const playAgain = () => {
        setShow(!show)
        setActive(1)
    }
    
   
  return (
    <div className='question-container'>
        
        {shuffledQuestions.map((data,index) => {
            return (
                index + 1 === active ? 
                <div className='question'>
                    <div className='mobile-info'><span>Question: {index+1}</span></div>
                    <h1>{data.question}</h1>
                    <div className='answers'>
                        {data.answers.map(answer => {
                            return ( 
                                <button disabled={disabled} onClick={() => handleClick(answer)} className={selectedAnswer === answer ? activeClass : "answer"} >
                                    {answer.text}
                            </button>
                            )
                        })}
                    </div>
                </div> : ""
            )
        })}
        <Modal 
        show={show}
        onHide={handleClose}
        centered
        >
        
        <Modal.Body className='modal-body'>
          <p style={{color:"white",fontSize:"24px"}}>
          { earnedMoney === 0 ? "Unfortunaletly, u Couldn't get any prize" : "Congratulations, you have won " + earnedMoney  }
          </p>
          <Button style={{padding:"10px"}} onClick={playAgain} variant="outline-info">Play Again !</Button>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default Question