
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>My Dashboard</div>
            <ul className={styles.navLinks}>
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#users">Users</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
        </nav>
    );
}
