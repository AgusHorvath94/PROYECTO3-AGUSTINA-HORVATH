import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Cotizacion.module.css";
import { useState } from "react";

function Cotizacion({
  costoM2,
  inputMetros2,
  datosPropiedad,
  selectPropiedad,
  datosUbicacion,
  selectUbicacion,
  valorPoliza,
  setValorPoliza,
}) {
  const [cotizacionRealizada, setCotizacionRealizada] = useState(false);

  const realizarCotizacion = () => {
    const factorPropiedad =
      datosPropiedad.find((prop) => prop.tipo === selectPropiedad)?.factor || 1.0;
    const factorUbicacion =
      datosUbicacion.find((ubi) => ubi.tipo === selectUbicacion)?.factor || 1.0;

    const resultado =
      costoM2 * factorPropiedad * factorUbicacion * inputMetros2;
    const valorPolizaCalculado = resultado.toFixed(2);
    setValorPoliza(valorPolizaCalculado);
    setCotizacionRealizada(true);
  };

  const guardarCotizacion = () => {
    if (cotizacionRealizada) {
      const nuevaCotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        propiedad: selectPropiedad,
        ubicacion: selectUbicacion,
        metrosCuadrados: inputMetros2,
        poliza: valorPoliza,
      };

      const cotizacionesGuardadas =
        JSON.parse(localStorage.getItem("cotizaciones")) || [];
      cotizacionesGuardadas.push(nuevaCotizacion);
      localStorage.setItem("cotizaciones", JSON.stringify(cotizacionesGuardadas));

      
   
    }
  };

  const handleClick = () => {
    realizarCotizacion();
    Swal.fire("¡Cotización realizada con éxito!", "", "success");
  };

  const notify = () => {
  guardarCotizacion();
  toast("COTIZACIÓN GUARDADA");
  }
  return (
    <>
      <button onClick={handleClick}>COTIZAR</button>
      <p>
        Precio estimado: ${valorPoliza}
        <span className={styles.save} onClick={notify}>
          💾
        </span>
      </p>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
}

export default Cotizacion;