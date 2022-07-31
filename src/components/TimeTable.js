import axios from 'axios'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Days from './Days'
import Footer from './Footer'
import gif from '../assets/gif/cupertino_activity_indicator.gif'

export default function TimeTable() {
    const [day, setDays] = useState([])
    const [info, setInfo] = useState([])
    const [week, setWeek] = useState('')
    const [date, setDate] = useState('')
    const [loading, setLoading] = useState(true)


    const { movieID } = useParams()

    
    useEffect(() => {

        setTimeout(() => {
            const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieID}/showtimes`)

            promise.then(res => {
            setDays(res.data.days)            
            setInfo(res.data)
            setLoading(false)
        })
        }, 1000)
        
         // eslint-disable-next-line
    }, [])

    if(loading === true) {
        return (
            <div className='gif'>
                <img src={gif} alt="gif" />
            </div>
        )
    }
    
    else {
        return (
            <>
                <div className="top">
                    <h2>Selecione o Horário</h2>
                </div>
    
                <div className='box-day'>
                    {day.map((value, index) => (
                    <Days key={index} date={value.date} dayID={value.id} showtimes={value.showtimes} weekday={value.weekday} setWeek={setWeek} setDate={setDate}/>
                    ))}
                </div>          
    
                <Footer info={info} week={week} date={date}/>
              
            </>
        )
    }
    
}