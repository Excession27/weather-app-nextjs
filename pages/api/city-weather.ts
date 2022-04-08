import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const APIkey: any = process.env.API_key;
  const {lat, lon} = req.query;
  const oo = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${APIkey}`);
  const data = await oo.json();
  res.status(200).json(data)
}
