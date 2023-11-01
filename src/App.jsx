import LocalApp from "./components/LocalApp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HistorialCotizaciones from "./components/HistorialCotizaciones";


function App() {
return (
  
  <>
  <Router>
  <Routes>
  <Route path="/" element={<LocalApp />}/>
  <Route path="/Historial" element={<HistorialCotizaciones />} />
  </Routes>
  </Router>
  </>
);
}

export default App;
