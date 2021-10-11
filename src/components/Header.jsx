import React from "react";
import logo from "../media/logo.png";

const Header = () =>{
    return(
        <header>
            <ul className="navbar">
                <li>
                    <img src={logo} alt="imagen" className="logo"/>
                </li>
                <li>
                    <div className="buscar">
                        <input placeholder="Buscar un producto"/>
                        <i className="fas fa-search button iconobuscar"></i>
                    </div>
                </li>
                <li>
                    <button className="button mainbuttom">Nuevo pedido</button>
                </li>
                <li>
                    <button className="button secondarybuttom">Iniciar Sesión</button>
                </li>
                <li>
                    <button className="button mainbuttom">Registro</button>
                </li>
            </ul>
        </header>
    );
}
export default Header;