import axios from "axios"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import Seat from "./Seat"


export default function Section() {

    useEffect(() => {
        const promise = axios.get('')
    }, [])

    return (
        <>
            <div className="top">
                <h2>Selecione o(s) Assento(s)</h2>
            </div>

            <div className="seats">
               <Seat />
            </div>
        </>
    )
}