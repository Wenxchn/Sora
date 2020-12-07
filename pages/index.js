import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

const Home = () => {
    return (
        <div className='ml-2'>
            <h1 className='text-primary'>Sora</h1>
            <div>
                <Link href='/Wen'>My Media List</Link>
            </div>
        </div>
)}

export default Home