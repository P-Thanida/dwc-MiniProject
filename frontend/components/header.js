import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'

const Header = () => (
    <div className={styles.header}>
          <Navbar />
    </div>
)

export default Header