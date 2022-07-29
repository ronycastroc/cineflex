import Hours from "./Hours";

export default function Days({date, dayID, showtimes, weekday, setWeek, setDate}) {
    return (
        <div className='day'>
            <h3>{weekday} - {date}</h3>
                
             <div className='hours'>
                {showtimes.map((value, index) => (
                    <Hours key={index} name={value.name} showtimesID={value.id} dayID={dayID} setWeek={setWeek} setDate={setDate} weekday={weekday}/>
                ))}
            </div>               
        </div>
    )
}