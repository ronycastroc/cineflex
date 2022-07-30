import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function DataClient() {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')

    

    function HandleForm(e) {
        
        const navigate = useNavigate()

        e.preventDefault()
        
        const body = {
            name,
            cpf
        }

    const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', body)

    navigate('./sucess', {name, cpf})

    promise.then(() =>
        resetForm()
    )

    
}

function resetForm() {
    setName('')
    setCpf('')
}

    return (
        <div className="client-box">
            <form onSubmit={HandleForm}>
                <div className="imput-group">
                    <p>Nome do Comprador</p>
                    
                    <input 
                    type="text" placeholder="Digite seu Nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    />

                </div>

                <div className="imput-group">
                    <p>CPF do Comprador</p>

                    <input 
                    type="text" placeholder="Digite seu CPF"
                    onChange={(e) => setCpf(e.eventPhase.value)}
                    value={cpf}
                    required
                    />
                </div>

                <div className="button">
                    <button>Reservar Assento(s)</button>
                </div>
                
            </form>
        </div>
    )
}