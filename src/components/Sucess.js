import { useLocation, Link } from "react-router-dom"

export default function Sucess() {
    const {name, cpf, movie, hour, date, place} = useLocation().state;
    
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
                {place.map((value, index) => (
                    <p>Assento {value}</p>
                ))}    
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