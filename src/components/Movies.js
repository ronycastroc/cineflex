import { Link } from 'react-router-dom'

export default function Movies({ movieID, overview, posterURL, releaseDate, title}) {
 
    return (        
        <Link to={`/movie/${movieID}`}>
            <div className="movie">
                <img src={posterURL} alt="poster" />
            </div>
        </Link>
    )
}