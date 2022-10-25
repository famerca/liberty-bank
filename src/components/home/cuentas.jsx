import '../../styles/Home.scss';
import HomeCuenta from './cuenta';

const HomeCuentas = ({cuentas, onSelect, onSelectTotal}) => {
    console.log(cuentas);

    const list = cuentas.map((cuenta, index) => <HomeCuenta onClick={() => onSelect(index)}
         key={cuenta.numero}
         cuenta={cuenta}/>
         );

    return (
        <div className="home-card home-cuentascard">
            <div className="head">
                <h3>Cuentas</h3>
                <button onClick={onSelectTotal}>Todos</button>
            </div>
            {list}
        </div>

    )
}

export default HomeCuentas;