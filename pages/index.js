import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import { Button, Card, Form, Row, Col } from 'react-bootstrap'

const Home = () => {
    const [topAnimes, setRandomAnimes] = useState([])
    const [topMangas, setRandomMangas] = useState([])

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }

    const findRandomAnime = async () => {
        let random = await getRandomInt(50)
        let res = await fetch(`https://api.jikan.moe/v3/top/anime/${random}/tv`)
        let data = await res.json()
        random = await getRandomInt(50)

        setRandomAnimes([...topAnimes, { title: data.top[random].title, score: data.top[random].score, id: topAnimes.length, image: data.top[random].image_url}])
        console.log(data)
    }

    const findRandomManga = async () => {
        let random = await getRandomInt(50)
        let res = await fetch('https://api.jikan.moe/v3/top/manga/1/manga')
        let data = await res.json()
        random = await getRandomInt(50)

        setRandomMangas([...topMangas, { title: data.top[random].title, score: data.top[random].score, id: topMangas.length, image: data.top[random].image_url}])
        console.log(data)
    }

    const clearAnimeList = async () => {
        setRandomAnimes([])
    }

    const clearMangaList = async () => {
        setRandomMangas([])
    }

    return (
        <div className='ml-2 mr-2'>
            <Row>
                <Col>
                    <h1 className='text-primary'>Sora</h1>
                    <Link href='/Wen'>My Media List</Link>
                    <Form>


                    </Form>
                </Col>
                <Col>
                    <div className='btn-group'>
                        <Button onClick={() => findRandomAnime()}>Get Random Anime</Button>
                        <Button onClick={() => clearAnimeList()}>Clear Random Anime</Button>
                    </div>
                    {topAnimes.map(anime => (
                        <Card key={anime.id}>
                            <Card.Body>
                                <Card.Title>{anime.title}</Card.Title>
                                <Card.Img src={anime.image} className='col-md-2'></Card.Img>
                                <Card.Text>Average MAL Score: {anime.score}</Card.Text>
                                Type: Anime
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
                <Col>
                    <div className='btn-group'>
                        <Button onClick={() => findRandomManga()}>Get Random Manga</Button>
                        <Button onClick={() => clearMangaList()}>Clear Random Manga</Button>
                    </div>
                    {topMangas.map(manga => (
                            <Card key={manga.id}>
                                <Card.Body>
                                    <Card.Title>{manga.title}</Card.Title>
                                    <Card.Img src={manga.image} className='col-md-2'></Card.Img>
                                    <Card.Text>Average MAL Score: {manga.score}</Card.Text>
                                    Type: Manga
                                </Card.Body>
                            </Card>
                        ))}
                </Col>
            </Row>
        </div>
)}

export default Home