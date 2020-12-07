import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

const Home = () => {
    const [topTitles, setTopTitle] = useState([])
    const [topScores, setTopScores] = useState([])
    const [topAnimes, setTopAnimes] = useState([])

    const findTop = async () => {
        let res = await fetch('https://api.jikan.moe/v3/top/anime/1')
        let data = await res.json()

        for (let i = 0; i < data.top.length; i++) {
            console.log(data.top[i].title)
            console.log(data.top[i].score)
            setTopAnimes([...topAnimes, { title: data.top[i].title, score: data.top[i].score }])
        }
        // console.log(data)
    }

    // findTop()
    return (
        <div className='ml-2'>
            <h1 className='text-primary'>Sora</h1>
            <Button onClick={() => findTop()}>Get Top 50 Animes From MAL</Button>
            <div>
                <Link href='/Wen'>My Media List</Link>
                <ul>
                    {topAnimes.map(anime => (
                        <li> {anime.title} {anime.score} </li>
                    ))}
                </ul>
            </div>
        </div>
)}

export default Home