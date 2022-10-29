import '../../styles/Home.scss';
import {IoFilterSharp} from 'react-icons/io5'
import HomeTransaccion from './transaccion';
import HomeFiltro from './filter';

const HomeTransacciones = ({trns}) => {
  

 const list = trns.map((trn, index) => <HomeTransaccion
      trn={trn}/>
      );

    return (
        <div className="home-card home-transacciones">
            <div className="head">
                <h3>Transacciones</h3>
                <button>
                    <IoFilterSharp/>
                </button>
                <HomeFiltro/>
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