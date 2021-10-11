import {Link} from "react-router-dom";
function CardCamisetas({imagen,codigo,name}){
    return (
        <li className="breadCard">
            <Link to={name}>
            <div className="contenedorImagen">
                <img src={imagen} alt={codigo}/>
            </div>
            <span className="breadTitle">{codigo}</span>
            </Link>
        </li>
    );
}
export default CardCamisetas;