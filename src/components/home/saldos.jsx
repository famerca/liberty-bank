import '../../styles/Home.scss';

const HomeSaldos = ({saldos}) => {
    console.log(saldos);

    return (
        <div className="home-card home-saldoscard">
            <h2>Saldos</h2>
            <div className="row">
                <div className="col-1">
                    <div className="saldo-container">
                        <h3 style={{color: "var(--main-red)"}}>-{saldos.egresos}$</h3>
                        <span>Egresos</span>
                    </div>
                    <div className="saldo-container">
                        <h3 style={{color: "var(--main-green)"}}>+{saldos.ingresos}$</h3>
                        <span>Ingresos</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="saldo-container">
                        <h3 className='g'>{saldos.total}$</h3>
                        <span>Total</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeSaldos;