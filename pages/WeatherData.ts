export default interface WeatherData {
    objekt: {
        city: string,
        data: {
            current: {
                clouds: number,
                dew_point: number,
                dt: number,
                feels_like: number,
                humidity: number,
                pressure: number,
                sunrise: number,
                sunset: number,
                temp: number,
                uvi: number,
                visibility: number,
                weather: Array<{ description: string, icon: string, id: number, main: string }>,
                wind_deg: number,
                wind_gust: number,
                wind_speed: number,
            },
            daily: Array<{
                clouds: number,
                dew_point: number,
                dt: number,
                feels_like: { day: number, eve: number, morn: number, night: number },
                humidity: number,
                moon_phase: number,
                moonrise: number,
                moonpop: number,
                pop: number,
                pressure: number,
                rain: number,
                sunrise: number,
                sunset: number,
                temp: { day: number, eve: number, max: number, min: number, morn: number, night: number },
                uvi: number,
                weather: Array<{ description: string, icon: string, id: number, main: string }>,
                wind_deg: number,
                wind_gust: number,
                wind_speed: number
            }>,
            lat: number,
            lon: number,
            timezone: string,
            timezone_offset: number

        },
        geo: string,
        route: string
    }
}