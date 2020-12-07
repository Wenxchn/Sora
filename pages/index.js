import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

const Home = () => {
    const findTop = async () => {
        let res = await fetch('https://api.jikan.moe/v3/top/anime/1')
        let data = await res.json()
        console.log(data)
    }
    

    findTop()
    return (
        <div className='ml-2'>
            <h1 className='text-primary'>Sora</h1>
            <div>
                <Link href='/Wen'>My Media List</Link>
            </div>
        </div>
)}

export default Home