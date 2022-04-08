import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import styles from '../styles/Results.module.css'
import { DataContext } from './context/context'
import 'flag-icons'
import Link from 'next/link'

const Results: NextPage = () => {

    const { data, collectData } = useContext(DataContext);
    
    return (
        <div className={styles.results}>


            {data.map((item: any, index) => {
                
                return (
                    <Link href={`/results/${item.country}?geo=${item.lat},${item.lon}&city=${item.name}`} key={index} passHref>
                        <a>
                            <li>
                                <div className={styles.city_info}>
                                    <h3>{item.name}, {item.country}</h3>
                                    <span className={`fi fi-${item.country.toLowerCase()}`}></span>

                                </div>
                                <p className={styles.current_weather}></p>
                                <p className={styles.geo_coords}>Geo coords [{item.lat.toFixed(4)}, {item.lon.toFixed(4)}]</p>
                            </li>
                        </a>
                    </Link>
                )
            })}


        </div>
    )
}

export default Results