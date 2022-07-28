import { useState, useEffect } from 'react'
import axios from 'axios'
import Movies from './Movies'

export default function MainPage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')

        promise.then(response => {
            setMovies(response.data)
            
        })
    }, [])

    return (
        <>
            <div className="top">
                <h2>Selecione o Filme</h2>
            </div>

            <div className="content">
                {movies.map((value, index) => (
                    <Movies key={index} id={value.id} overview={value.overview} posterURL={value.posterURL} releaseDate={value.releaseDate} title={value.title}/>
                ))}
                
            </div>
        </>
    )
}