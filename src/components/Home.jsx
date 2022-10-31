import { useState, useEffect } from 'react';
import '../styles/Home.scss';
import HomeInfo from './home/Info'
import HomeSaldos from './home/saldos'
import HomeCuentas from './home/cuentas'
import HomeTransacciones from './home/transacciones'

const domain = "http://localhost:5020";

const Home = () => {
    const [list, setList] = useState([]);
    const [active, setActive] = useState({saldos:{}, transacciones: []});

    const seleccionarCuenta = (index) => {
        setActive(list[index]);
    };

    const selectTotal = () => {setActive(calcularCuentaTotal(list))};

    useEffect(() => {
        getData().then(r => {
            r  ??= [];
            setList(r);
        });
    },[]);

    useEffect((() => {setActive(calcularCuentaTotal(list))}), [list])

    return (
        <div className='home-wrapper'>
            <HomeInfo info={active} />
            <HomeSaldos saldos={active.saldos}/>
            <HomeCuentas onSelectTotal={selectTotal} onSelect={seleccionarCuenta} cuentas={list}/>
            <HomeTransacciones trns={active.transacciones}/>
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
const getData = () => 
{
    return fetch(`${domain}/movimientos`)
    .then(response => {
        console.log(response);
        if(response.status == 200)
            response.json()
        else if(response.status == 400)
        {
            response.text().then(r =>  {
                alert(r);
            });
        }
    }).catch(err => {
        console.log(err)
    });
}


export default Home;