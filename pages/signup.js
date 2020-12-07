import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const signup = async () => {
        try {
            await axios.post('/user/signup', { username, password })
        } catch (e) {
            console.log(e)
            window.alert('Failed to signup')
        }
    }

    return (
        <div className='ml-2'>
            <h1 className='text-primary'>Sign Up</h1>
            <Form>
                <Form.Group controlId='formUsername'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type='username' 
                        placeholder='Username'
                        onChange={e => setUsername(e.target.value)}
                        style={{ width: '500px' }}
                    />
                </Form.Group>
                <Form.Group controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)}
                        style={{ width: '500px' }}
                    />
                </Form.Group>
            </Form>
            <Button
                onClick={() => signup()}
            > Sign Up 
            </Button>
        </div>
)}

export default Signup