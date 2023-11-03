import styles from "./MetrosCuadrados.module.css";

export default function MetrosCuadrados({ inputMetros2, setInputMetros2 }) {
  return (
    <div className={styles.metros2}>
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
    </div>
  );
}
