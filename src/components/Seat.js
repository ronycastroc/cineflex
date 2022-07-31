import { useState } from "react"

export default function Seat({seatID, name, available, number, setNumber, place, setPlace, valid, setValid}) {
    const [select, setSelect] = useState('seat')

    return (
        <>
            {available ? (
                <div className={select} onClick={() => {
                    
                    if(select === 'seat') {
                        setSelect('seat green')
                        const newNumber = [...number, Number(seatID)]
                        setNumber(newNumber)
                        const newPlace = [...place, name]
                        setPlace(newPlace)
                        setValid(true)
                    }

                    else {
                        setSelect('seat')
                        const newNumber = number.slice(0, number.length -1)
                        setNumber(newNumber)
                        const newPlace = place.slice(0, place.length -1)
                        setPlace(newPlace)
                        setValid(false)
                    }                          
                console.log(number)
                console.log(place)

                }}>
                    <p className="num">{name} </p>
                </div>) : 
                
                (
                <div className="seat yellow" onClick={() => {
                    alert('Este assento não está disponível')
                }}>
                    <p className="num">{name}</p>
                </div>
                )}
        </>
            
    )
}