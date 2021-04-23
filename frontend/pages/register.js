
import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

import axios from 'axios'
import config from '../config/config'
import Login from './login'

export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    // const [status, setStatus] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/register`,
                { username, email, name, surname, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }

    const registerForm = () => (
        <div class="login-box">
            <form>
                <h1>Register</h1>
                <div class="user-box">
                    <input type="text"
                        name="username"
                        required=""
                        onChange={(e) => setUsername(e.target.value)} />
                    <label>Username</label>
                </div>
                <div class="user-box">
                    <input type="text"
                        name="name"
                        required=""
                        onChange={(e) => setName(e.target.value)} />
                    <label>Name</label>
                </div>
                <div class="user-box">
                    <input type="text"
                        name="surname"
                        required=""
                        onChange={(e) => setSurname(e.target.value)} />
                    <label>Surname</label>
                </div>
                <div class="user-box">
                    <input type="text"
                        name="email"
                        required=""
                        onChange={(e) => setEmail(e.target.value)} />
                    <label>Email</label>
                </div>                
                <div class="user-box">
                    <input type="password" 
                    name="" required="" onChange={(e) => setPassword(e.target.value)}></input>
                        <label>Password</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                         Submit
                    </a>
            </form>
        </div>
    )

    return (
        <Layout> <br></br>

            <Head>
                <title>Register</title>
            </Head>

            {/* <div className={styles.container}>

                <h1>Register</h1> */}
            {/* <div><b>Token:</b> {token.substring(0, 15)}...
                <button
                        onClick={() => { navigator.clipboard.writeText(token) }}>
                        Copy token
                </button>
                </div>
                <br />
            Status:  {status}
                <br /><br /> */}

            {registerForm()}


            <div>
                <button onClick={Register}>Register</button>
            </div>
            {/* </div> */}
        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
