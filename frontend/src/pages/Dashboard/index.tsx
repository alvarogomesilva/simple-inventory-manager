import { useAuthStore } from "../../store/use-auth-store"

export function Dashboard() {
    const { logout } = useAuthStore()

    return (
        <>
            <h1>Tela de Dashboard</h1>
            <button onClick={logout}>Deslogar</button>
        </>
    )
}