import '../../styles/Home.scss';

const HomeCuenta = ({cuenta, onClick}) => {
    console.log(cuenta);


    return (
        <div onClick={onClick} className="cuenta">
            <div>
                <p><strong>{cuenta.nombre}</strong></p>
                <p>{cuenta.numero}</p>
            </div>
            <div>
                <p>{cuenta.titular}</p>
                <p>{cuenta.banco}</p>
            </div>
        </div>

    )
}

export default HomeCuenta;