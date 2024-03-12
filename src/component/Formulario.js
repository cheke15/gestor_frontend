import { Container } from '@mui/material'
import './Formulario.css'
import { useState } from "react"

export function Formulario({ setUser }) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (usuario === "" || password === "") {
            setError(true)
            return;
        }
        setError(false)
       
        setUser([usuario])
    }

    return (
        <section> 
            <h1>Login</h1>

            
            <Container class="conten">
            <form className="formulario" onSubmit={handleSubmit}>
                <label class="input-box label" >Nombre de usuario</label>
                <input class="input-box" placeholder='usuario'
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <label class="input-box label">Contraseña</label>
                <input class="input-box" placeholder='contraseña'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar sesión</button>
            </form>
            {error && <p>Todos los campos tienen que estar llenos</p>}
        </Container>
        </section>
        
    )
}