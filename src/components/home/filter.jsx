
import '../../styles/Home.scss';

const HomeFiltro = ({updateFilds, filds}) => {



    return (
        <div className="home-filter">
            <label htmlFor="">Tipo</label>
            <select value={filds.tipo} onChange={(e) => {updateFilds('tipo', e.target.value)}}>
                <option value="todos">Todos</option>
                <option value="ingreso">Ingreso</option>
                <option value="egreso">Egreso</option>
            </select>
            <label htmlFor="">Categoria</label>
            <select value={filds.categoria} onChange={(e) => {updateFilds('categoria', e.target.value)}}>
                <option value="0">Todos</option>
                <option value="1">Pago de luz</option>
                <option value="2">Pago de agua</option>
                <option value="3">Renta</option>
                <option value="4">Nomina de empleados</option>
            </select>
            <label htmlFor="">Fecha</label>
            <div>
                <span>de</span>
                <input value={filds.from} onChange={(e) => {updateFilds('from', e.target.value)}}
                 type="date" name="" id="" />
            </div>
            <div>
                <span>A</span>
                <input value={filds.to} onChange={(e) => {updateFilds('to', e.target.value)}}
                 type="date" name="" id="" />
            </div>
        </div>
    )
}

export default HomeFiltro;
