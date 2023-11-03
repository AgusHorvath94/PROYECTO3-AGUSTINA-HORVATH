import styles from "./Propiedad.module.css";

export default function Propiedad(props) {
  const datosPropiedad = [
    { tipo: "Casa", factor: 1.09 },
    { tipo: "P.H.", factor: 1.05 },
    { tipo: "Depto. Edificio", factor: 1.02 },
    { tipo: "Barrio Privado", factor: 1.19 },
    { tipo: "Oficina", factor: 2.39 },
    { tipo: "Local Comercial", factor: 1.41 },
    { tipo: "Depósito Logística", factor: 1.92 },
  ];

  const handleChange = (e) => {
    props.setPropiedad(e.target.value);
  };

  return (
    <>
      <div className={styles.propiedad}>
        <label htmlFor="propiedad">Selecciona tipo de propiedad :</label>
        <select id="propiedad" onChange={handleChange}>
          <option selected disabled>
            ...
          </option>
          {datosPropiedad.map((propiedad, index) => (
            <option key={index}>{propiedad.tipo}</option>
          ))}
        </select>
      </div>
    </>
  );
}
