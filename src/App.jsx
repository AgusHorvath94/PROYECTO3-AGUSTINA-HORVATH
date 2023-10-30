import { useState, useEffect } from "react";
import Header from "./components/Header";
import Propiedad from "./components/Propiedad";
import Ubicacion from "./components/Ubicacion";

function App() {
  const [selectPropiedad, setSelectPropiedad] = useState('...');
  const [selectUbicacion, setSelectUbicacion] = useState('...');
  const [inputMetros2, setInputMetros2] = useState(20);
  const [valorPoliza, setValorPoliza] = useState('0.00');
  const costoM2 = 38.86;
  const [datosPropiedad, setDatosPropiedad] = useState([]); 
  const [datosUbicacion, setDatosUbicacion] = useState([]); 

  useEffect(() => {
    fetch('/propiedad.json')
      .then((response) => response.json())
      .then((data) => {
        setDatosPropiedad(data); 
      })


    fetch('/ubicacion.json')
      .then((response) => response.json())
      .then((data) => {
        setDatosUbicacion(data); 
      })
     
  }, []);

  const realizarCotizacion = () => {
    
    const factorPropiedad = datosPropiedad.find((prop) => prop.tipo === selectPropiedad)?.factor || 1.0;
    const factorUbicacion = datosUbicacion.find((ubi) => ubi.tipo === selectUbicacion)?.factor || 1.0;  
  
    const resultado = costoM2 * factorPropiedad * factorUbicacion * inputMetros2;
    setValorPoliza(resultado.toFixed(2));
  }

  return (
    <div>
      <Header />
      <Propiedad onChange={(value) => setSelectPropiedad(value)} />
      <Ubicacion onChange={(value) => setSelectUbicacion(value)} />
      <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
      <input
        type="number"
        id="metros2"
        value={inputMetros2}
        min="20"
        max="500"
        onChange={(e) => setInputMetros2(e.target.value)}
        required
      />
      <button onClick={realizarCotizacion}>COTIZAR</button>
      <p>Precio estimado: $ {valorPoliza}</p>
    </div>
  );
}

export default App;