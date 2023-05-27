
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import Logo from '../../assets/Logo.png';

function NavBar() {
    return (
        <div id="divBar">
            <a href="#"><img id="logo" src={Logo} alt="" /></a>
            <nav id="navBar">
                <ul id="navBar__list">
                    <li><a href="#">Playeras</a></li>
                    <li><a href="#">Hoodies</a></li>
                    <li><a href="#">Pantalones</a></li>
                    <li><a href="#">Camisas</a></li>
                </ul>
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar; //USamos export default cuando exportemos sólo un componente

//Para exportar más de un componente se usa la palabra export en cada inicio de función, lo cual envolverá todo en un objetto por lo que a la importación se usa destructuring para extraer lo que queramos usar. EJEMPLO:

/*
export function NavBar() {
    return (
        <div>
            <h1>Hola mundo</h1>
        </div>
    )
}

export function Header() {
return (
        <div>
            <h2>Hola header</h2>
        </div>
    )
}

*/