export default function Subtitle() {
    return (
        <div className="subtitle">
                <div className="types">
                    <div className="seat green"></div>
                    <p>Selecionado</p>
                </div>
                
                <div className="types">
                    <div className="seat"></div>
                    <p>Disponivel</p>
                </div>

                <div className="types">
                    <div className="seat yellow"></div>
                    <p>Indisponivel</p>
                </div>
            </div>
    )
}