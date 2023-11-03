import { useState, useEffect } from "react";
import Header from "./Header";
import Propiedad from "./Propiedad";
import Ubicacion from "./Ubicacion";
import styles from "./LocalApp.module.css";
import MetrosCuadrados from "./MetrosCuadrados";
import Cotizacion from "./Cotizacion";

export default function LocalApp() {
  const [selectPropiedad, setSelectPropiedad] = useState("...");
  const [selectUbicacion, setSelectUbicacion] = useState("...");
  const [inputMetros2, setInputMetros2] = useState(20);
  const [valorPoliza, setValorPoliza] = useState("0.00");
  const costoM2 = 35.86;
  const [datosPropiedad, setDatosPropiedad] = useState([]);
  const [datosUbicacion, setDatosUbicacion] = useState([]);

  useEffect(() => {
    fetch("/src/json/propiedad.json")
      .then((response) => response.json())
      .then((data) => {
        setDatosPropiedad(data);
      });

    fetch("/src/json/ubicacion.json")
      .then((response) => response.json())
      .then((data) => {
        setDatosUbicacion(data);
      });
  }, []);

  return (
    <>
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
    </>
  );
}
