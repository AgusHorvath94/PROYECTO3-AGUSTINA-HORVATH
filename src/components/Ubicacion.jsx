import styles from "./Ubicacion.module.css";

export default function Ubicacion(props) {
  const datosUbicacion = [
    { tipo: "CABA", factor: 1.13 },
    { tipo: "Tandil", factor: 1.04 },
    { tipo: "Costa Atlántica", factor: 1.29 },
    { tipo: "Patagonia", factor: 1.0 },
  ];

  const handleChange = (e) => {
    props.setUbicacion(e.target.value);
  };

  return (
    <>
      <div className={styles.ubicacion}>
        <label htmlFor="ubicacion">Selecciona su ubicación :</label>
        <br />
        <select id="ubicacion" onChange={handleChange}>
          <option selected disabled>
            ...
          </option>
          {datosUbicacion.map((ubicacion, index) => (
            <option key={index} value={ubicacion.tipo}>
              {ubicacion.tipo}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
