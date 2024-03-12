import  { Formulario }  from './component/formulario'
import  { Home }  from './component/home'
import { useState } from 'react'
import { Button, } from '@material-ui/core';
import './App.css';



function App() {

  const [ user, setUser] = useState([])

  return (
  
    <div className="App">
      {
      !user.length > 0
      
   
   ? <Formulario setUser={setUser} />   
      
   : <Home user={user} setUser={setUser}/>

   
   }
  <Button variant='contained'>Iniciar sesión</Button>
   </div>
  
  );
  
}

export default App;
