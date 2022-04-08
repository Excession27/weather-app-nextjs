import type { NextPage } from 'next'
import { useState, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Searchbar.module.css'
import {DataContext} from './context/context'




const Searchbar: NextPage = () => {
  const [searchCity, setSearchCity] = useState('')
  const {data, collectData} = useContext(DataContext);

  const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/cities?searchCity=${searchCity}`)
    const json = await res.json()
    return json
  }

  const submitSearch = async (e: any) => {
    e.preventDefault();
    const info = await getData();
    
    collectData(info);
  }

  const keyHandle = async (e: any) => {
    if (e.which === 13 || e.which === 18) {
      submitSearch(e);
    }
  }


  return (
    <form className={styles.searchbar}>

      <input type="text" value={searchCity} onChange={(event) => setSearchCity(event.target.value)} onKeyDown={keyHandle} />
      <button type='submit' onClick={submitSearch} >🔎 Search</button>

    </form>
  )
}



export default Searchbar