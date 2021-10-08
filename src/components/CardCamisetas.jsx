import {Link} from "react-router-dom";
function CardCamisetas({imagen,codigo}){
    return (
        <li className="breadCard">
            <Link to="/Camiseta1">
            <div className="contenedorImagen">
                <img src={imagen} alt={codigo}/>
            </div>
            <span className="breadTitle">{codigo}</span>
            </Link>
        </li>
    );
}
export default CardCamisetas;