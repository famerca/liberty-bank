import {BiPlusCircle} from 'react-icons/bi'
import { Link } from "react-router-dom";

const Header = () =>{
    return (
        <header className="App-header">
            <div className="button-container">
                <Link to='/aggmovimientos'>
                <button className="outline-button"> <BiPlusCircle/> Agregar Movimiento</button>
                </Link>
            </div>
        </header>
    )
}

export default Header;
