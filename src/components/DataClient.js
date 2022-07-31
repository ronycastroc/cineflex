import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function DataClient({info, hour, date, ids, place}) {
    const movie = info.title
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    
    const navigate = useNavigate()
    
    console.log()

    function handleForm(e) {       

        e.preventDefault()
        
        const body = {
            ids,
            name,
            cpf
        }

    const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', body)

    

    promise.then(() => {
        navigate('/sucess', {replace: true, state: {name, cpf, movie, hour, date, place}}) 
        resetForm()
    })  
    
}

    

function resetForm() {
    setName('')
    setCpf('')
}

    return (
        <div className="client-box">
            <form onSubmit={handleForm}>
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
                    onChange={(e) => setCpf(e.target.value)}
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