import {BiPlusCircle} from 'react-icons/bi'
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
