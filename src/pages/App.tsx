import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import DetalleProyecto from './DetalleProyecto';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyecto/:id" element={<DetalleProyecto />} />
      </Routes>
    </Router>
  );
}

export default App;