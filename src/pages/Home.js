import { useAuth } from "../context/AuthContext"

export default function Home() {
    const { logout } = useAuth();

    function handleLogout() {
        logout();
    }
    return (
        <button onClick={() => handleLogout()}><p>Logout</p></button>
    )
}