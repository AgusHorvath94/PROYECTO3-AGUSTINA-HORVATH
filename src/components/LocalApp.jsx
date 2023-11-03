import { useState, useEffect } from "react";
import Header from "./Header";
import Propiedad from "./Propiedad";
import Ubicacion from "./Ubicacion";
import styles from "./LocalApp.module.css";
import MetrosCuadrados from "./MetrosCuadrados";
import Cotizacion from "./Cotizacion";
import Axios from "axios";

export default function LocalApp() {
  const [selectPropiedad, setSelectPropiedad] = useState("...");
  const [selectUbicacion, setSelectUbicacion] = useState("...");
  const [inputMetros2, setInputMetros2] = useState(20);
  const [valorPoliza, setValorPoliza] = useState("0.00");
  const costoM2 = 35.86;
  const [datosPropiedad, setDatosPropiedad] = useState([]);
  const [datosUbicacion, setDatosUbicacion] = useState([]);

  useEffect(() => {
    Axios.get("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((response) => {
        setDatosPropiedad(response.data);
      })
      .catch((error) => {
        console.error("Error fetching propiedades:", error);
      });

    Axios.get("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
      .then((response) => {
        setDatosUbicacion(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ubicaciones:", error);
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
