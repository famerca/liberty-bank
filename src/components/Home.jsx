import { useState } from 'react';
import '../styles/Home.scss';
import HomeInfo from './home/Info'
import HomeSaldos from './home/saldos'


const Home = () => {
    const [list, setList] = useState([]);
    const [active, setActive] = useState({
        nombre: "Nombre de la Cuenta",
        numero: "numero de cuenta",
        banco: "Banco",
        titular: "Holder",
        saldos:
        {
            total:1000,
            egresos: 500,
            ingresos: 800,
        },
        transacciones: []
    });

    return (
        <div className='home-wrapper'>
            <HomeInfo info={active} />
            <HomeSaldos saldos={active.saldos}/>
        </div>
    )
}

export default Home;