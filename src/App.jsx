import { useState } from 'react' //Se usa Destructuring cuando importamos un componente de un mismo archivo.
import './App.css'
import NavBar from './components/NavBar/NavBar' //Cuando usamos export default no es necesario hacer destructuring
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer'

//En los componentes contenedores es donde hacemos las llamadas a las APIS.

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting={"Hola Cliente, estamos cargando tus productos"}></ItemListContainer>
        </>
    )

}

export default App

