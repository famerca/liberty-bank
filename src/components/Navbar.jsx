import { Link } from "react-router-dom";
import { HiHome } from 'react-icons/hi';
import { AiFillBank } from 'react-icons/ai';
import { IoSettingsSharp } from 'react-icons/io5'
const Navbar = () => {
  return (
    <nav>
      <Link to='/home'>
        <div className="nav-item">
          <HiHome />
          <span>Principal</span>
        </div>
      </Link>
      <Link to='/home'>
        <div className="nav-item">
          <AiFillBank />
          <span>consiliacion</span>
        </div>
      </Link>
      <Link to='/movimientos'>
        <div className="nav-item">
          <IoSettingsSharp />
          <span>Movimientos</span>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar;
