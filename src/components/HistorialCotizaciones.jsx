import { useState, useEffect } from "react";
import styles from "./Historial.module.css";
import { Link } from "react-router-dom";

function HistorialCotizaciones() {
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    const cotizacionesGuardadas =
      JSON.parse(localStorage.getItem("cotizaciones")) || [];
    setCotizaciones(cotizacionesGuardadas);
  }, []);

  const renderCotizaciones = () => {
    return cotizaciones.map((cotizacion, index) => (
      <tr key={index}>
        <td>{cotizacion.fechaCotizacion}</td>
        <td>{cotizacion.propiedad}</td>
        <td>{cotizacion.ubicacion}</td>
        <td>{cotizacion.metrosCuadrados}</td>
        <td>${cotizacion.poliza}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h1 className={styles.title}>Ver Historial 📋</h1>
      <div className={styles.divCotizador}>
        <table>
          <thead>
            <tr>
              <th>Fecha de cotización</th>
              <th>Propiedad</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Póliza mensual</th>
            </tr>
          </thead>
          <tbody>{renderCotizaciones()}</tbody>
        </table>
        <div className={styles.btn}>
          <Link to="/">
            <button>VOLVER</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HistorialCotizaciones;
