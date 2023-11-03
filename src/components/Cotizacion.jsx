import { useState } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Cotizacion.module.css";
import loaderGif from "../assets/Ellipsis-1.1s-44px.gif";

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
  const [showLoader, setShowLoader] = useState(false);

  const datosCompletos = () => {
    return (
      selectPropiedad !== "..." && selectUbicacion !== "..." && inputMetros2 > 0
    );
  };

  const realizarCotizacion = () => {
    if (datosCompletos()) {
      const factorPropiedad =
        datosPropiedad.find((prop) => prop.tipo === selectPropiedad)?.factor ||
        1.0;
      const factorUbicacion =
        datosUbicacion.find((ubi) => ubi.tipo === selectUbicacion)?.factor ||
        1.0;

      const resultado =
        costoM2 * factorPropiedad * factorUbicacion * inputMetros2;
      const valorPolizaCalculado = resultado.toFixed(2);
      setValorPoliza(valorPolizaCalculado);
      setCotizacionRealizada(true);
      alerta("¡Cotización realizada con éxito!", "", "success");
    } else {
      alerta("", "Debes completar todos los datos en pantalla.", "warning");
    }
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
      localStorage.setItem(
        "cotizaciones",
        JSON.stringify(cotizacionesGuardadas)
      );
    }
  };

  const alerta = (titulo, mensaje, icono) => {
    Swal.fire({
      icon: icono || "",
      title: titulo || "",
      text: mensaje,
      showConfirmButton: false,
      timer: 3500,
      width: "240px",
    });
  };

  const handleClick = () => {
    setShowLoader(true);
    setTimeout(() => {
      realizarCotizacion();
      setShowLoader(false);
    }, 1000);
  };

  const notify = () => {
    guardarCotizacion();
    toast("COTIZACIÓN GUARDADA");
  };

  return (
    <>
      <div className={styles.buttonContainer}>
        <button onClick={handleClick} disabled={showLoader}>
          {showLoader ? (
            <img src={loaderGif} alt="Loader" width="30px" />
          ) : (
            "COTIZAR"
          )}
        </button>
      </div>
      <p>
        Precio estimado: ${valorPoliza}
        <span className={styles.save} onClick={notify}>
          {cotizacionRealizada ? "💾" : null}
        </span>
      </p>
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
