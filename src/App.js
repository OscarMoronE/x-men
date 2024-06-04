import './App.css';
import './miCss.css';
import { useRef } from 'react';
import { Banner } from './Banner.js';
import wolwerine from './images/logan.jpg';
import cyclop from './images/cyclops.jpg';
import globin from './images/goblin.jpg';
import incognito from './images/serie.jpg';


function App() {

  let marvel = [{ name: 'Adamantio', age: 76 }, { name: 'Jean', age: 30 }, { name: 'Líder táctico', age: 32 }, { name: 'Incognito' }];

  const refTexto = useRef();

  const change = (e) => {
    if (e.target.src.includes("serie")) {
      e.target.src = wolwerine;
      e.target.parentNode.style.backgroundColor = "#C40C0C"
    }
  }

  const changeJean = (e) => {
    if (e.target.src.includes("serie")) {
      e.target.src = globin;
      e.target.style.color = "white";
      e.target.parentNode.style.backgroundColor = "#C40C0C"
    }
  }

  const changeScott = (e) => {
    if (e.target.src.includes("serie")) {
      e.target.src = cyclop;
      e.target.style.color = "white";
      e.target.parentNode.style.backgroundColor = "#C40C0C"
    }
  }

  const cambioTexto = (e) => {
    if (e.target.innerHTML.includes("Adamantio") || e.target.innerHTML.includes("Jean") || e.target.innerHTML.includes("Líder táctico")) {
      e.target.innerHTML = "Visto";
      e.target.style.color = "white";
    }
    else if (e.target.innerHTML == "Visto") {
      e.target.innerHTML = "";
    }
  }

  return (
    <>
      <Banner />
      <h2 className='guess'>¡Descubre el mutante oculto siguiendo las <span id='pista'>pistas</span> en las tarjetas!</h2>

      <div className="contenedor">

        <div className="caja">
          <img onClick={change} src={incognito} className="logan"></img>
          <div onClick={cambioTexto} ref={refTexto} className="nombre">{marvel[0].name}</div>
        </div>

        <div className="caja">
          <img onClick={changeJean} src={incognito} className="jean"></img>
          <div onClick={cambioTexto} ref={refTexto} className="nombre">{marvel[1].name}</div>
        </div>

        <div className="caja">
          <img onClick={changeScott} src={incognito} className="cyclop"></img>
          <div onClick={cambioTexto} ref={refTexto} className="nombre">{marvel[2].name}</div>
        </div>
      </div>
    </>
  );
}
export default App;
