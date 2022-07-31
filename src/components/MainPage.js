import { useState, useEffect } from 'react'
import axios from 'axios'
import Movies from './Movies'
import gif from '../assets/gif/cupertino_activity_indicator.gif'

export default function MainPage() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')

        promise.then(res => {
            setMovies(res.data)
            setLoading(false)
            
        })
        }, 1500)
        
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
                    <h2>Selecione o Filme</h2>
                </div>
    
                <div className="content">
                    {movies.map((value, index) => (
                        <Movies key={index} movieID={value.id} overview={value.overview} posterURL={value.posterURL} releaseDate={value.releaseDate} title={value.title}/>
                    ))}
                    
                </div>
            </>
        )
    }

    
}