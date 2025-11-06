// Routing
import { Routes, Route } from "react-router-dom";

// Pages
import Menu from "./pages/menu/Menu";
import Canciones from "./pages/canciones/Canciones";
import Fotos from "./pages/fotos/Fotos";
import Informacion from "./pages/informacion/Informacion";
import Recitales from "./pages/recitales/Recitales";

// Layout
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Menu />} />
        <Route path="/canciones" element={<Canciones />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/recitales" element={<Recitales />} />
      </Route>
    </Routes>
  );
}

export default App;
