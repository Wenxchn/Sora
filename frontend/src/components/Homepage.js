import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, DropdownButton, Dropdown, Card, Form, Modal, Row, Col, Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'

const Home = () => {
    const [username, setUsername] = useState('')
    const history = useHistory()
    let name, author, type, rating, comment

    useEffect(async () => {
        try {
            let response = await axios.post('/isAuthenticated')
            let { user } = response.data
            setUsername(user)
        } catch (e) {
            console.log(e)
        }
    })

    const addMedia = async () => {
        try {
            await axios.post('./user/add', {name: name.value, author: author.value, type: type.value, rating: rating.value, comment: comment.value})
        } catch (e) {
            console.log(e)
            window.alert('Failed to add')
        }
    }

    const logout = async () => {
        try {
            await axios.post('user/logout')
            setUsername('')
        } catch (e) {
            console.log(e)
        }
    }

    const [topAnimes, setRandomAnimes] = useState([])
    const [topMangas, setRandomMangas] = useState([])

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }

    const findRandomAnime = async () => {
        let random = await getRandomInt(100)
        let res = await fetch(`https://api.jikan.moe/v3/top/anime/${random}/tv`)
        let data = await res.json()
        random = await getRandomInt(50)

        setRandomAnimes([...topAnimes, { title: data.top[random].title, score: data.top[random].score, id: topAnimes.length, image: data.top[random].image_url}])
    }

    const findRandomManga = async () => {
        let random = await getRandomInt(100)
        let res = await fetch(`https://api.jikan.moe/v3/top/manga/${random}/manga`)
        let data = await res.json()
        random = await getRandomInt(50)

        setRandomMangas([...topMangas, { title: data.top[random].title, score: data.top[random].score, id: topMangas.length, image: data.top[random].image_url}])
    }

    const clearAnimeList = async () => {
        setRandomAnimes([])
    }

    const clearMangaList = async () => {
        setRandomMangas([])
    }

    if (username !== '') {
        return (
            <div className='ml-2 mr-2'>
                <Row>
                    <Col>
                        <Link style={{ textDecoration: 'none' }} className='h1' onClick={() => window.location.reload()} to='/'>Sora</Link>
                        <div>
                            <Form id='mediaForm' onSubmit={e => {
                                e.preventDefault()
                                addMedia()
                                const form = document.getElementById("mediaForm")
                                form.reset()
                            }}>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        placeholder='Title'
                                        ref={node => name = node}
                                    />
                                    <Form.Label>Author/Studio</Form.Label>
                                    <Form.Control 
                                        placeholder='Author/Studio'
                                        ref={node => author = node}
                                    />
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control as='select' ref={node => type = node}>
                                        <option>Anime</option>
                                        <option>Manga</option>
                                    </Form.Control>
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control as='select' ref={node => rating = node}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </Form.Control>
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control as="textarea" rows={3} ref={node => comment = node}></Form.Control>
                                </Form.Group>
                                <Button block type='submit'>Submit</Button>
                                <Button block variant='light' type='reset'>Clear</Button>
                            </Form>
                        </div>
                    </Col>
                    <Col>
                        <div className='btn-group'>
                            <Button onClick={() => findRandomAnime()}>Get Random Anime</Button>
                            <Button onClick={() => clearAnimeList()}>Clear Random Anime</Button>
                        </div>
                        {topAnimes.map(anime => (
                            <Card key={anime.id} border="primary">
                                <Card.Body>
                                    <Card.Title>{anime.title}</Card.Title>
                                    <Card.Img src={anime.image} className='col-md-4'></Card.Img>
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
                        <DropdownButton className='float-right' title='‏‏‎ ‎'>
                            <Dropdown.Item
                                type='button'
                                onClick={() => history.push('/myanime')}
                            >My Anime
                            </Dropdown.Item>
                            <Dropdown.Item
                                type='button'
                                onClick={() => history.push('/mymanga')}
                            >My Manga
                            </Dropdown.Item>
                            <Dropdown.Item 
                                href="#/action-1" 
                                type='button' 
                                onClick={() => logout()}
                            >Log Out</Dropdown.Item>
                        </DropdownButton>
                        {topMangas.map(manga => (
                                <Card key={manga.id} border="primary">
                                    <Card.Body>
                                        <Card.Title>{manga.title}</Card.Title>
                                        <Card.Img src={manga.image} className='col-md-4'></Card.Img>
                                        <Card.Text>Average MAL Score: {manga.score}</Card.Text>
                                        Type: Manga
                                    </Card.Body>
                                </Card>
                        ))}
                    </Col>
                </Row>
            </div>
    )} else {
        return (
            <div className='ml-5 mr-5 my-5'>
                <Row>
                    <Col>
                        <Container>
                            <h1 className='text-primary'>Sora</h1>
                            <h5>Find anime and manga.</h5>
                            <h5>Privately keep track of them too!</h5>
                        </Container>
                    </Col>
                    <Col>
                        <Card border='0'>
                            <Card.Body>
                                <Button 
                                    className='ml-1'
                                    style={{ width: '450px' }}
                                    size="lg"
                                    onClick={() => {history.push('/login')}}
                                >Log In</Button>
                                <hr style={{ width: '450px' }} className='ml-1'></hr>
                                <Button 
                                    className='ml-1'
                                    variant='Success'
                                    style={{ width: '450px' }}
                                    onClick={() => {history.push('/signup')}}
                                >Create New Account</Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image className='col-lg-10 img-responsive' src='https://i.ibb.co/2FPNVKF/Sora-Logo.png'/>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </div>
    )}
}

export default Home