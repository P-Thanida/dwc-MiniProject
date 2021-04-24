import Layout from "../components/layout"
import AuthStudents from "../components/AuthStudent"
import Header from '../components/header'
import axios from 'axios'
import { useState, useEffect } from "react"

import config from '../config/config'

const URL = `${config.URL}/problems`
const ShowProblems = ({ token }) => {

    const [problems, setProblems] = useState({
        list: [
            { id: 1, fname: "Thanida", surname: "Wichaidit", room: "313", pb: "Broken water pipe" }
        ]
    })

    useEffect(() => {

        getProblems()
    }, [])

    const getProblems = async () => {

        let problem = await axios.get(`${config.URL}/problems`)
        setProblems(problem.data)

    }

    const printProblems = () => {
        if (problems.list && problems.list.length)

            return problems.list.map((item, index) =>
            (<li key={index}>
                ชื่อ: {item.fname}<br></br>
                นามสกุล: {item.surname}<br></br>
                ห้อง: {item.room}<br></br>
                แจ้งซ้อม: {item.pb}<br></br>
            </li>)
            )
    }

    return (
        <Layout>
            <div >
                <Header />
                <br></br>

                {JSON.stringify(problems.problems)}
                <ul>
                    <h1>
                        Please Log in
                    </h1>

                </ul>
            </div>
        </Layout>
    )
}

export default AuthStudents(ShowProblems)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}