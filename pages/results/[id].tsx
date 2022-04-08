import type { NextPage, GetServerSideProps } from 'next'
import styles from '../../styles/ResultPage.module.css'
import 'flag-icons'
import WeatherData from '../WeatherData'


const Index: React.FC<WeatherData> = (props: WeatherData) => {

    const city = props.objekt.city;

    const fiveDayWeather = props.objekt.data.daily.slice(3);
    

    return (
        <>
        <h1>5-day weather forecast for {city}</h1>
        <div className={styles.result}>
            
            {fiveDayWeather.map((day, index) => {
                return (
                    <li className={styles.li_item} key={index}>
                        <p>{(() => { return new Date(day.dt * 1000).toDateString() })()}</p>
                        <div className={styles.temps}>
                            <p className={styles.min}>{day.temp.min}&deg;</p>
                            <p className={styles.max}>{day.temp.max}&deg;</p>
                        </div>

                    </li>
                )
            })}

        </div>
        </>
    )
}

export const getServerSideProps: any = async ({ params, query }: any) => {

    
    const latitude = query.geo.split(",")[0]
    const longitute = query.geo.split(",")[1]
    const res = await fetch(`http://localhost:3000/api/city-weather?lat=${latitude}&lon=${longitute}`);
    const json = await res.json();
    

    // const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitute}&exclude=minutely,hourly,alerts&units=metric&appid=${APIkey}`);
    // const json = await res.json();

    const objekt = { data: json, route: params.id, geo: query.geo, city: query.city };
    return { props: { objekt } }
}

export default Index