import Layout from "../components/layout"
import Header from "../components/header"
import AuthStudents from "../components/AuthStudent"
import styles from "../styles/Home.module.css"
import { Col, Row, Card, Space, Divider } from 'antd'
import axios from 'axios'
import { useState, useEffect } from "react"
import config from '../config/config'
import { Form, Input, Button } from 'antd'


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
                <Card title={item.fname + " " + item.surname} className={styles.reporterCard}>
                    <p> ห้อง : {item.room}</p>
                    <p> ปัญหา : {item.problem}</p>
                    <Button style={{ width: 100, marginRight: 10 }} onClick={() => updateStudent(item.id)} type="primary">Update</Button>
                    <Button style={{ width: 100 }} onClick={() => deleteStudent(item.id)} >Remove</Button>
                </Card>
            )
            )
    }

    return (
        <Layout>

            <Header />
            <div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <Card className={styles.cardform}>
                        <div style={{ fontSize: 24, padding: 10, textAlign: "center" }}>แจ้งปัญหา</div>
                        <Form>
                            <div className={styles.formCrossAxis}>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Input type="text " style={{ width: 200, marginRight: 5 }} placeholder="ชื่อ" onChange={(e) => setFname(e.target.value)}></Input>

                                    <Input style={{ width: 200, }} placeholder="สกุล" onChange={(e) => setSurname(e.target.value)}></Input>
                                </div>
                                <Input style={{ marginTop: 5, }} placeholder="ห้อง" onChange={(e) => setRoom(e.target.value)}></Input>
                                <Input style={{ marginTop: 5, marginBottom: 5 }} placeholder="ปัญหา" onChange={(e) => setProblem(e.target.value)}></Input>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", }}>

                                    <Button style={{ width: 80, margin: 5 }} type="primary" onClick={() => addStudent(fname, surname, room, problem)}>ส่ง</Button>

                                    <Button style={{ width: 80, margin: 5 }} type="">ล้าง</Button>

                                </div>
                            </div>
                        </Form>

                    </Card>
                </div>
                <div>
                    <Divider></Divider>
                    <div style={{ textAlign: "center", fontSize: 18, padding: 10 }}>Reporter</div>
                    <div className={styles.cardArea}>
                        {
                            printStudents()
                        }
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default AuthStudents(Problems)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}