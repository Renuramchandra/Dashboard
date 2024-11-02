


import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import styles from '../styles/Dashboard.module.css'; // Import a CSS module for dashboard styling

const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

const orders = [
    { id: 1, product: 'Pizza', quantity: 2, status: 'Delivered' },
    { id: 2, product: 'Burger', quantity: 1, status: 'Pending' },
    { id: 3, product: 'Pasta', quantity: 3, status: 'Delivered' },
];

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.contentWrapper}>
                <Sidebar />
                <main className={styles.mainContent}>
                    <h1>Welcome to the Hotel Dashboard</h1>

                    <section>
                        <h2>Users</h2>
                        <ul>
                            {users.map(user => (
                                <li key={user.id}>{user.name} - {user.email}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2>Orders</h2>
                        <ul>
                            {orders.map(order => (
                                <li key={order.id}>
                                    {order.product} (x{order.quantity}) - {order.status}
                                </li>
                            ))}
                        </ul>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
}
