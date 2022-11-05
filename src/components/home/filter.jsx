import '../../styles/Home.scss';

const domain = "http://localhost:5020";

const HomeFiltro = ({updateFilds, filds, cats}) => {
    const list = filtrarCats(cats, filds.tipo).map(cat => {
            return <option value={cat.id}>{cat.nombre}</option>
        }
      );

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
                <option value="0">Todas</option>
               {list}
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


const filtrarCats = (cats, tipo) =>{
    if(tipo !== "todos")
    {
        console.log(cats);
        cats = cats.filter( cat => cat.tipo.toLowerCase() === tipo.toLowerCase());
        console.log(cats);
        return cats;
    }
    return cats;
}


export default HomeFiltro;
