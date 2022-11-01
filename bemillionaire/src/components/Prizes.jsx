import React,{useState, useEffect} from 'react'
import "../styles/prizes.css"
import "../App.css"

function Prizes({active, setEarnedMoney}) {

    const [prizes, setPrizes] = useState([
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse())


      useEffect(()=>{
        prizes.forEach(item => {
            if(item.id === active-1 ){
                setEarnedMoney(item.amount)
            }
        })

        
      },[active,prizes,setEarnedMoney])


  return (
    <div className='prizes-container'>
        {prizes.map(prize => {
            return (
                <div className={active === prize.id ? "prize-container active" : "prize-container"}>
                    <p>{prize.id}</p>
                    <p>{prize.amount}</p>
            </div>
            )
        })}
    </div>
  )
}

export default Prizes