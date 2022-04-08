import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const APIkey: String = "8e052f87b5dc9c75605510e663b9d3dc";
  const {searchCity} = req.query;
  const limit = 5;
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=${limit}&appid=${APIkey}`)
  const json = await response.json()
  
  res.status(200).json(json)
}
