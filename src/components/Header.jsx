import {BiPlusCircle} from 'react-icons/bi'
const Header = () =>{
    return (
        <header className="App-header">
            <div className="button-container">
                <button className="outline-button"> <BiPlusCircle/> Agregar Movimiento</button>
            </div>
        </header>
    )
}

export default Header;