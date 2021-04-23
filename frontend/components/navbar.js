import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {
    Button
    , Card
} from 'antd'
const Navbar = () => (
    <Card className={styles.nav}>
        <div >
            <div>Next-Movies</div>
            <h1 >New Movie</h1>

            <div className={styles.userButtonContainer}>
                <Button className={styles.userButton} type="primary">Register</Button>
                <Button className={styles.userButton} type="primary">Login</Button>
            </div>
        </div>
    </Card>
)

export default Navbar
