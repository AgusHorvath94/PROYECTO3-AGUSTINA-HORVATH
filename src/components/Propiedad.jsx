

export default function Propiedad() {
    const datosPropiedad = [{tipo: 'Casa', factor: 1.09},
    {tipo: 'P.H.', factor: 1.05},
    {tipo: 'Depto. Edificio', factor: 1.02},
    {tipo: 'Barrio Privado', factor: 1.19},
    {tipo: 'Oficina', factor: 2.39},
    {tipo: 'Local Comercial', factor: 1.41},
    {tipo: 'Depósito Logística', factor: 1.92}]
  
   
        return (
            <>
            <select id="propiedad">
              <option selected disabled>...</option>
              {datosPropiedad.map((propiedad, index) => (
                <option key={index}>{propiedad.tipo}</option>
              ))}
            </select>
            </>
          );
        }
  
