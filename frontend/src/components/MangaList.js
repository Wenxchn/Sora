import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, DropdownButton, Dropdown, Card, Form, Modal, Row, Col, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'

const MangaList = () => {
    const [username, setUsername] = useState('')
    const [myAnime, setMyAnime] = useState([])
    const [showOn, setShowOn] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory()
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    let [id, setId] = useState()
    let entry = 0
    let rating, comment = '', type = 'Manga'
    
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

    const editAnime = async () => {
        try {
            let tempRating = rating.value
            let tempComment = comment.value
            await axios.post('user/edit', { name: title, author, type, rating: rating.value, comment: comment.value, _id: id })
            
            // setMyAnime([])
            // let res = await axios.get(`user/${username}/list`)
            // let media = res.data

            // for (let i = 0; i < media.length; i++) {
            //     if (media[i].type === 'Anime') {
            //         setMyAnime(myAnime => 
            //             [...myAnime, { title: media[i].name, author: media[i].author, rating: media[i].rating, comment: media[i].comment, id: media[i]._id }])
            //     }
            // }

            setMyAnime(myAnime => myAnime.filter(anime => anime.id !== id))
            let newObj = { title: title, author: author, type: 'Manga', rating: tempRating, comment: tempComment, _id: id}
            setMyAnime(myAnime => [...myAnime, newObj])

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
                    <Link style={{ textDecoration: 'none' }} className='h1' to='/'>Sora</Link>
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
                                        <Button 
                                            onClick={() => {setId(anime.id); setTitle(anime.title); setAuthor(anime.author); setIsOpen(true)}}
                                        >Edit</Button>
                                        <Button 
                                            onClick={() => {id = anime.id; deleteAnime()}}
                                        >Delete</Button>
                                    </div>
                                    <Card.Text className='float-right'>{entry++}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                        <Modal show={isOpen} onHide={() => setIsOpen(false)}>
                            <Modal.Body>
                                <Form onSubmit={e => {
                                    e.preventDefault()
                                    editAnime()
                                    setIsOpen(false)
                                }}>
                                    <Form.Group>
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
                                    {/* <Button block variant='light' onClick={() => setIsOpen(false)}>Close</Button> */}
                                </Form>
                            </Modal.Body>
                        </Modal>
                </Col>
            </Row>
        </div>
        )
    } else {
        return (
            <div className='ml-2 mr-2'>
            <Row>
                <Col>
                    <Link style={{ textDecoration: 'none' }} className='h1' to='/'>Sora</Link>
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