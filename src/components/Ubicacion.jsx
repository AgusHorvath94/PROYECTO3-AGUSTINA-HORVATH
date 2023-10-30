const Ubicacion = ({ handleUbicacionChange }) => {
    const datosUbicacion = [
      { tipo: 'CABA', factor: 1.13 },
      { tipo: 'Tandil', factor: 1.04 },
      { tipo: 'Costa Atlántica', factor: 1.29 },
      { tipo: 'Patagonia', factor: 1.00 },
    ];
  
    return (
        <>
      <div>
        <label htmlFor="ubicacion">Selecciona su ubicación</label>
        <select id="ubicacion" onChange={handleUbicacionChange}>
          <option selected disabled>...</option>
          {datosUbicacion.map((ubicacion, index) => (
            <option key={index} value={ubicacion.tipo}>
              {ubicacion.tipo}
            </option>
          ))}
        </select>
      </div>
      </>
    );
  };
  
  export default Ubicacion;


  
  
  
  
  
  