import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, DropdownButton, Dropdown, Card, Form, Modal, Row, Col, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'

const AnimeList = () => {
    const [username, setUsername] = useState('')
    const [myAnime, setMyAnime] = useState([])

    useEffect(async () => {
        try {
            let response = await axios.post('/isAuthenticated')
            let { user } = response.data
            setUsername(user)

            
        } catch (e) {
            console.log(e)
        }
    })

    const getAnimeList = async () => {
        try {
            let res = await axios.get(`user/${username}/list`)
            let media = res.data

            let arr = []

            for (let i = 0; i < media.length; i++) {
                if (media[i].type === 'Anime') {
                    // let newAnime = [{ title: media[i].name, author: media[i].author, rating: media[i].rating, comment: media[i].comment, id: myAnime.length}]
                    // arr = myAnime.concat(newAnime)
                    // setMyAnime(arr) 

                    let newState = [...myAnime, { title: media[i].name, author: media[i].author, rating: media[i].rating, comment: media[i].comment, id: myAnime.length }]
                    console.log(newState)
                    setMyAnime(newState)
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='ml-2 mr-2'>
            <Link className='h1' to="/">Sora</Link>
            <ul>
                {myAnime.map((anime) => (
                    <li key={anime.id}>
                        {anime.title}
                    </li>
                ))}
            </ul>
            <Button onClick={() => getAnimeList()}></Button>
        </div>
)}

export default AnimeList