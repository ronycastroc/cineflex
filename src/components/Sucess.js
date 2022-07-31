import { useState } from "react";
import { useLocation, Link } from "react-router-dom"
import gif from '../assets/gif/cupertino_activity_indicator.gif'

export default function Sucess() {
    const {name, cpf, movie, hour, date, place} = useLocation().state;
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1500)

    if(loading === true) {
        return (
            <div className='gif'>
                <img src={gif} alt="gif" />
            </div>
        )
    }

    else {
        return(
            <>
                <div className="top sucess">
                    <h2>Pedido feito com sucesso!</h2>
                </div>
    
                <div className="movie-section">
                    <h3>Filme e Sessão</h3>
                    <p>{movie}</p>
                    <p>{date} - {hour}</p>
                </div>
    
                <div className="movie-section">
                    <h3>Ingressos</h3>
                    {place.map((value, index) => {
                        if(value < 10) {
                            return (                                
                                <p>Assento 0{value}</p>
                            )
                        } else {
                            return (
                                <p>Assento {value}</p>
                            )                            
                        }
                    }                       
                        
                    )}    
                </div>
    
                <div className="movie-section">
                    <h3>Comprador</h3>
                    <p>Nome: {name}</p>
                    <p>CPF: {cpf}</p>
                </div>
                
                <Link to='/'>
                    <div className="button margin">
                        <button>Voltar para Home</button>
                    </div>
                </Link>   
                
            </>
        )
    }
    
    
}