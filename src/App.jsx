import { useState, useEffect } from "react";
import Header from "./components/Header";
import Propiedad from "./components/Propiedad";
import Ubicacion from "./components/Ubicacion";
import styles from "./App.module.css";
import MetrosCuadrados from "./components/MetrosCuadrados";
import Cotizacion from "./components/Cotizacion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HistorialCotizaciones from "./components/HistorialCotizaciones";




function App() {
  const [selectPropiedad, setSelectPropiedad] = useState("...");
  const [selectUbicacion, setSelectUbicacion] = useState("...");
  const [inputMetros2, setInputMetros2] = useState(20);
  const [valorPoliza, setValorPoliza] = useState("0.00");
  const costoM2 = 35.86;
  const [datosPropiedad, setDatosPropiedad] = useState([]);
  const [datosUbicacion, setDatosUbicacion] = useState([]);

  useEffect(() => {
    fetch("/propiedad.json")
      .then((response) => response.json())
      .then((data) => {
        setDatosPropiedad(data);
      });

    fetch("/ubicacion.json")
      .then((response) => response.json())
      .then((data) => {
        setDatosUbicacion(data);
      });
  }, []);

  

  return (

    <>
    <Router>
        
      <Header />
      <div className={styles.mainContainer}>
        <h2>Completa los datos solicitados</h2>
        <Propiedad setPropiedad={setSelectPropiedad} />
        <Ubicacion setUbicacion={setSelectUbicacion} />
        <MetrosCuadrados
          inputMetros2={inputMetros2}
          setInputMetros2={setInputMetros2}
        />
        <Cotizacion
          costoM2={costoM2}
          inputMetros2={inputMetros2}
          datosPropiedad={datosPropiedad}
          selectPropiedad={selectPropiedad}
          datosUbicacion={datosUbicacion}
          selectUbicacion={selectUbicacion}
          valorPoliza={valorPoliza}
          setValorPoliza={setValorPoliza}
        />
      </div>
        <Routes>
        <Route path="Historial" element={<HistorialCotizaciones />} />
        </Routes>
      </Router>
    
    </>
  
  );
}

export default App;