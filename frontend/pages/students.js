import Layout from "../components/layout"
import Header from "../components/header"
import AuthStudents from "../components/AuthStudent"
import Styles from "../styles/Home.module.css"
import axios from 'axios'
import { useState, useEffect } from "react"
import config from '../config/config'


const URL = `${config.URL}/students`
const Problems = ({ token }) => {

    const [students, setStudents] = useState({
        list: [
            { id: 1, fname: "Thanida", surname: "Wichaidit", room: "313", problem: "ท่อแตก" }
        ]
    })
    const [fname, setFname] = useState('')
    const [surname, setSurname] = useState('')
    const [room, setRoom] = useState(0)
    const [problem, setProblem] = useState('')

    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = async () => {

        let student = await axios.get(`${config.URL}/students`)
        setStudents(student.data)

    }

    const updateStudent = async (id) => {

        let student = await axios.put(`${URL}/${id}`, { fname, surname, room, problem })
        setStudents(student.data)
    }

    const deleteStudent = async (id) => {

        let student = await axios.delete(`${URL}/${id}`)
        setStudents(student.data)
    }

    const addStudent = async (fname, surname, room, problem) => {

        let student = await axios.post(`${config.URL}/students`,

            { fname, surname, room, problem })
        setStudents(student.data)



    }

    const printStudents = () => {
        if (students.list && students.list.length)

            return students.list.map((item, index) =>
            (
            <div>
            <div class="login-box"><li key={index}>

                ชื่อ: {item.fname} <br></br>
                นามสกุล: {item.surname} <br></br>
                ห้อง: {item.room} <br></br>
                แจ้งซ้อม: {item.problem}<br></br>

                
                <button onClick={() => updateStudent(item.id)}>Update</button>
                <button onClick={() => deleteStudent(item.id)}>Delete</button>
            </li>
            </div>
            </div>                      
            )
            )
    }
    const insertForm = () => (
        <div class="login-box">
        <form>
            <div class="user-box">
                <input type="text"
                    name="" required=""
                    onChange={(e) => setFname(e.target.value)}></input>
                <label>ชื่อ</label>
            </div>
            <div class="user-box">
                <input type="text"
                    name="" required="" onChange={(e) => setSurname(e.target.value)}></input>
                <label>นามสกุล</label>
            </div>
            <div class="user-box">
                <input type="text"
                    name="" required="" onChange={(e) => setRoom(e.target.value)}></input>
                <label>ห้อง</label>
            </div>
            <div class="user-box">
                <input type="text"
                    name="" required="" onChange={(e) => setProblem(e.target.value)}></input>
                <label>แจ้งซ้อม</label>
            </div>
            <a onClick={() => addStudent(fname, surname, room, problem)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                     Add
                </a>

        </form>
        </div>
    )

    return (
        <Layout>
            <div >
                <Header />
                <br></br>
               
                {insertForm()}
                 {printStudents()}
                




            </div>
        </Layout>
    )
}

export default AuthStudents(Problems)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}