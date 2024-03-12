import "./formulario.css"
import { useState } from 'react'
import { Button  } from '@material-ui/core';
export function Formulario({ setUser }) {




    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)



    const handleSubmit = (e) => {
        console.debug("boton")
        e.preventDefault()
        if (usuario === "" || password === "") {
            setError(true)
            return
        }
        setError(false)

        setUser([usuario])

    }

    return (
        <section class="wrapper" >


            <form class="div-f" onSubmit={handleSubmit}>
                <h1 class="log">login</h1>
                <div class="login">
                    <div class="formulario" >
                        <div>
                            <label class="label1">Usuario</label>
                            <input type="text" placeholder="Usuario" class="input1"
                                value={usuario}
                                onChange={e => setUsuario(e.target.value)}
                            /> 
                            </div>
                        <div>
                            <label class="label2">Contraseña</label>
                            <input type="password" placeholder="Contraseña" class="input2"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            </div>
                    </div>

                </div>
               
                
                {error && <p>Todos los campos son obligatorios </p>} 
                  
            </form>


       
       
        </section >
    )
}