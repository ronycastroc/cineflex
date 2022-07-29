import { Link } from "react-router-dom"

export default function Hours({name, showtimesID, dayID, setWeek, setDate, weekday}) {
    return (
        <Link to={`/section/${showtimesID}`}>
            <div className='hour' onClick={() => {
                setWeek(weekday)
                setDate(name)
            }}>
                <p>{name}</p>
            </div>         
        </Link>        
    )
}