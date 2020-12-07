import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        try {
            
        } catch (e) {
            console.log(e)
            window.alert('Failed to signup')
        }
    }

    return (
        <div className='ml-2'>
            <h1 className='text-primary'>Log In</h1>
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
            <Button>Log In</Button>
        </div>
)}

export default Login