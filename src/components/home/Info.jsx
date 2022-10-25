import '../../styles/Home.scss';

const HomeInfo = ({info}) => {
    console.log(info);

    return (
        <div className="home-card home-infocard">
            <h2>{info.nombre}</h2>
            <p>{info.numero}</p>
            <p>{info.banco}</p>
            <p>{info.titular}</p>
            
        </div>

    )
}

export default HomeInfo;