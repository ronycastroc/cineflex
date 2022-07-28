export default function Movies({ id, overview, posterURL, releaseDate, title}) {
    return (
        <div className="movie">
            <img src={posterURL} alt="poster" />
        </div>
    )
}