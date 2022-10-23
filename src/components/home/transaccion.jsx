import '../../styles/Home.scss';

const HomeTransaccion = ({trn}) => {
    console.log(trn);


    return (
        <tr>
            <td>{trn.concepto}</td>
            <td>{trn.categoria}</td>
            <td>{trn.referencia}</td>
            <td>{trn.fecha}</td>
            <td>{trn.cuenta}</td>
            <td className={trn.tipo === 'ingreso' ? 'green' : 'red'}>{trn.monto}$</td>
        </tr>

    )
}

export default HomeTransaccion;