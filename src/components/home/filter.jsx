import '../../styles/Home.scss';

const HomeFiltro = () => {
    return (
        <div className="home-filter">
            <label htmlFor="">Tipo</label>
            <select>
                <option value="todos">Todos</option>
                <option value="ingreso">Ingreso</option>
                <option value="egreso">Egreso</option>
            </select>
            <label htmlFor="">Categoria</label>
            <select>
                <option value="0">Todos</option>
                <option value="1">Pago de luz</option>
                <option value="2">Pago de agua</option>
                <option value="3">Renta</option>
                <option value="4">Nomina de empleados</option>
            </select>
            <label htmlFor="">Fecha</label>
            <div>
                <span>de</span>
                <input type="date" name="" id="" />
            </div>
            <div>
                <span>A</span>
                <input type="date" name="" id="" />
            </div>
        </div>
    )
}

export default HomeFiltro;
