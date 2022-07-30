import axios from "axios"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import Seat from "./Seat"
import Footer from "./Footer"
import Subtitle from './Subtitle'
import DataClient from "./DataClient"


export default function Section() {    
    const [day, setDay] = useState([])
    const [movie, setMovie] = useState([])
    const [seats, setSeats] = useState([])
    const [number, setNumber] = useState([])

    const { sectionID } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sectionID}/seats`)

        promise.then(res => {
            setDay(res.data.day)
            setMovie(res.data.movie)
            setSeats(res.data.seats)
            console.log(res.data)
        })
    }, [])

    return (
        <>
            <div className="top">
                <h2>Selecione o(s) Assento(s)</h2>
            </div>

            <div className="seats">
                
               {seats.map((value, index) => (
                <Seat key={index} seatID={value.id} name={value.name} available={value.isAvailable} number={number} setNumber={setNumber}/>
               ))}
               
            </div>

            <Subtitle />

            <DataClient />

            <Footer info={movie} week={day.weekday} date={day.date}/>
        </>
    )
}