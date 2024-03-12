export function Home ({user, setUser}){
    const handlelogout = () => {
        setUser([])

    }
    return (
        <div>
        <h1>Bienevenido</h1>
        <h2>{user}</h2>
        <button onClick={handlelogout}>Cerrar Sesión</button>
        </div>
    )
}