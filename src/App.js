import logo from './media/logo.png';
import './styles/styles.css';
import camiseta2 from './media/camiseta2.jpg';
import camiseta3 from './media/camiseta3.jpg';
import camiseta5 from './media/camiseta5.jpg';

function App() {
  return (
    <div className="App">
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
      <main>
        <section>
          <h1>Estampados</h1>
          <ul className="breadCardContainer">
            <li className="breadCard">
              <div className="contenedorImagen">
                <img src={camiseta2}/>
              </div>
              <span className="breadTitle">Shirt 0420</span>
            </li>
            <li className="breadCard">
              <div className="contenedorImagen">
                <img src={camiseta3}/>
              </div>
              <span className="breadTitle">Shirt 6940</span>
            </li>
            <li className="breadCard">
              <div className="contenedorImagen">
                <img src={camiseta5}/>
              </div>
              <span className="breadTitle">Shirt 0069</span>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
