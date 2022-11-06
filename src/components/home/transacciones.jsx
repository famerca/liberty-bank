import '../../styles/Home.scss';
import {IoFilterSharp} from 'react-icons/io5'
import HomeTransaccion from './transaccion';
import HomeFiltro from './filter';
import { useState } from 'react';

const HomeTransacciones = ({trns, cats}) => {
  
    const [showFiltro, setShowFiltro] = useState(false);
    const [filterFilds, setFilterFilds] = useState({
        tipo: "todos",
        categoria: 0,
        from: "",
        to: ""});

    const updateFilds = (campo, valor) => {
        const up = {...filterFilds}
        up[campo] = valor;
        setFilterFilds(up);
    }

    const FiltrarTransacciones = (trcs) => 
    {
        if(filterFilds.tipo !== "todos")
        {
            trcs = trcs.filter((val) =>  val.tipo.toLowerCase() === filterFilds.tipo.toLowerCase());
        }

        if(filterFilds.categoria != 0)
        {
            trcs = trcs.filter((val) =>  val.cat_n == filterFilds.categoria);
        }

        if(filterFilds.from !== "")
        {
            trcs = trcs.filter((val) =>  val.fecha >= filterFilds.from);
        }
        if(filterFilds.to !== "")
        {
            trcs = trcs.filter((val) =>  val.fecha <= filterFilds.to);
        }

        return trcs;
    }


    const list = FiltrarTransacciones(trns).map((trn, index) => <HomeTransaccion
      trn={trn}/>
      );

    return (
        <div className="home-card home-transacciones">
            <div className="head">
                <h3>Transacciones</h3>
                <button onClick={() => {setShowFiltro(!showFiltro)}}>
                    <IoFilterSharp/>
                </button>
                { showFiltro ? <HomeFiltro cats={cats} filds={filterFilds} updateFilds={updateFilds}/> : ''}
            </div>

            <div className="tabla-container">
                <table className='transacciones'>
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Categoria</th>
                            <th>Referencia</th>
                            <th>Fecha</th>
                            <th>Cuenta</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default HomeTransacciones;