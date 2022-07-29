export default function Footer({info, week, date}) {
    return (        
            <footer>
                <div className='img-footer'>
                    <img src={info.posterURL} alt="mini-poster" />
                </div>

                <div className="footer-title">
                    <h2>{info.title}</h2>
                    <h3>{week} {date}</h3>
                </div>
                
            </footer>       
    )
}