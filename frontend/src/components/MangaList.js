import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, DropdownButton, Dropdown, Card, Form, Modal, Row, Col, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'

const MangaList = () => {
    const [username, setUsername] = useState('')
    const [myAnime, setMyAnime] = useState([])
    const [showOn, setShowOn] = useState(false)
    const history = useHistory()
    let entry = 0
    let id = ''
    
    useEffect(async () => {
        try {
            let response = await axios.post('/isAuthenticated')
            let { user } = response.data
            setUsername(user)
        } catch (e) {
            console.log(e)
        }
    }, [])

    const logout = async () => {
        try {
            await axios.post('user/logout')
            setUsername('')
            history.push('/')
        } catch (e) {
            console.log(e)
        }
    }

    const deleteAnime = async () => {
        try {
            await axios.post('user/delete', { _id : id })
            setMyAnime(myAnime => myAnime.filter(anime => anime.id !== id))
        } catch (e) {
            console.log(e)
        }
    }

    const getAnimeList = async () => {
        try {
            let res = await axios.get(`user/${username}/list`)
            let media = res.data

            for (let i = 0; i < media.length; i++) {
                if (media[i].type === 'Manga') {
                    setMyAnime(myAnime => 
                        [...myAnime, { title: media[i].name, author: media[i].author, rating: media[i].rating, comment: media[i].comment, id: media[i]._id }])
                }
            }
            setShowOn(true)
        } catch (e) {
            console.log(e)
        }
    }

    const hideAnimeList = async () => {
        try {
            setMyAnime([])
            setShowOn(false)
        } catch (e) {
            console.log(e)
        }
    }

    if (showOn) {
        return (
            <div className='ml-2 mr-2'>
            <Row>
                <Col>
                    <Link style={{ textDecoration: 'none' }} className='h1' to="/">Sora</Link>
                </Col>
                <Col>
                    <div className='button-group'>
                        <Button onClick={() => hideAnimeList()}>Hide My Manga</Button>
                        <DropdownButton className='float-right' title='‏‏‎ ‎'>
                            <Dropdown.Item
                                type='button'
                                onClick={() => history.push('/myanime')}
                            >My Anime
                            </Dropdown.Item>
                            <Dropdown.Item
                                type='button'
                                onClick={() => window.location.reload()}
                            >My Manga
                            </Dropdown.Item>
                            <Dropdown.Item 
                                href="#/action-1" 
                                type='button' 
                                onClick={() => logout()}
                            >Log Out</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    {myAnime.map((anime) => (
                            <Card key={anime.id}>
                                <Card.Body>
                                    <Card.Text>Title: {anime.title}</Card.Text>
                                    <Card.Text>Author: {anime.author}</Card.Text>
                                    <Card.Text>Rating: {anime.rating}</Card.Text>
                                    <Card.Text>Comment: {anime.comment}</Card.Text>
                                    <div className='btn-group'>
                                        <Button>Edit</Button>
                                        <Button 
                                            onClick={() => {id = anime.id; deleteAnime()}}
                                        >Delete</Button>
                                    </div>
                                    <Card.Text className='float-right'>{entry++}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                </Col>
            </Row>
        </div>
        )
    } else {
        return (
            <div className='ml-2 mr-2'>
            <Row>
                <Col>
                    <Link style={{ textDecoration: 'none' }} className='h1' to="/">Sora</Link>
                </Col>
                <Col>
                    <div className='button-group'>
                        <Button onClick={() => getAnimeList()}>Show My Manga</Button>
                        <DropdownButton className='float-right' title='‏‏‎ ‎'>
                            <Dropdown.Item
                                type='button'
                                onClick={() => history.push('/myanime')}
                            >My Anime
                            </Dropdown.Item>
                            <Dropdown.Item
                                type='button'
                                onClick={() => window.location.reload()}
                            >My Manga
                            </Dropdown.Item>
                            <Dropdown.Item 
                                href="#/action-1" 
                                type='button' 
                                onClick={() => logout()}
                            >Log Out</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </Col>
            </Row>
        </div>    
    )}
}

export default MangaList