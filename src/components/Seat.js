import { useState } from "react"

export default function Seat({seatID, name, available, number, setNumber}) {
    const [select, setSelect] = useState('seat')

    return (
        <>
            {available ? (
                <div className={select} onClick={() => {
                    
                    if(select === 'seat') {
                        const newNumber = [...number, name]
                        setSelect('seat green')
                        setNumber(newNumber)
                    }

                    else {
                        setSelect('seat')
                        const newNumber = number.slice(0, number.length -1)
                        setNumber(newNumber)
                    }                          
                console.log(number)
                }}>
                    <p className="num">{name} </p>
                </div>) : 
                
                (
                <div className="seat yellow">
                    <p className="num">{name}</p>
                </div>
                )}
        </>
            
    )
}