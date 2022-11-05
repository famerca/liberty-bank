import { useState, useEffect } from 'react';
import '../styles/Home.scss';
import HomeInfo from './home/Info'
import HomeSaldos from './home/saldos'
import HomeCuentas from './home/cuentas'
import HomeTransacciones from './home/transacciones'

const domain = "http://localhost:5020";

const Home = ({user}) => {
    const [list, setList] = useState([]);
    const [categorias, setCats] = useState([]);
    const [active, setActive] = useState({saldos:{}, transacciones: []});

    const seleccionarCuenta = (index) => {
        setActive(list[index]);
    };

    const selectTotal = () => {setActive(calcularCuentaTotal(list))};

    useEffect(() => {
        if(user)
            getData(user).then(r => {
                console.log(r);
                setList(r);
            });
    },[]);

    useEffect(() => {
        if(user)
            getCategorias(user.token).then(r => {
                console.log(r);
                setCats(r);
            });
    },[user]);

    useEffect((() => {setActive(calcularCuentaTotal(list))}), [list])

    return (
        <div className='home-wrapper'>
            <HomeInfo info={active} />
            <HomeSaldos saldos={active.saldos}/>
            <HomeCuentas onSelectTotal={selectTotal} onSelect={seleccionarCuenta} cuentas={list}/>
            <HomeTransacciones cats={categorias} trns={active.transacciones}/>
        </div>
    )
}

const calcularCuentaTotal = (list) => 
{
    const cuenta = {
        nombre: "Total",
        numero: "",
        banco: "",
        titular: "",
        saldos:
        {
            total:0,
            egresos: 0,
            ingresos: 0,
        },
        transacciones: []
    }

    list.forEach(e => {
        cuenta.saldos.total += e.saldos.total;
        cuenta.saldos.egresos += e.saldos.egresos;
        cuenta.saldos.ingresos += e.saldos.ingresos;
        cuenta.transacciones = cuenta.transacciones.concat(e.transacciones);
    });

    return cuenta;

}
const getData = (user) => 
{
    const token = user.token ?? "";
    return  new Promise(next => {

        fetch(`${domain}/transacciones?token=${token}`)
        .then(response => {
            if(response.status === 200)
            {
                response.json().then( r => next(r));
            }
            else if(response.status === 400)
            {
                console.log(response);
                response.text().then(r =>  {
                    alert(r);
                    next([])
                });
            }
        }).catch(err => {
            console.log(err)
            next([]);
        });

    })
    
}

const getCategorias = (token) => 
{
    return  new Promise(next => {

        fetch(`${domain}/categorias/${token}`)
        .then(response => {
            if(response.status === 200)
            {
                response.json().then( r => next(r));
            }
            else if(response.status === 400)
            {
                console.log(response);
                response.text().then(r =>  {
                    alert(r);
                    next([])
                });
            }
        }).catch(err => {
            console.log(err)
            next([]);
        });

    })
    
}




export default Home;