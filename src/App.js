import A from './paginas/A.jsx';
import B from './paginas/B.jsx';
import C from './paginas/C.jsx';
import Nav from './componentes/Nav.jsx';
import Error404 from './paginas/Error404.jsx';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';  // Importa BrowserRouter, Route, Routes e Navigate para usar react-router-dom que es una libreria para crear rutas en react.
/* 
BrowserRouter: es un componente que se usa para crear una ruta principal.
Routes: es un componente que se usa para crear una ruta secundaria.
Route: es un componente que se usa para crear una ruta.
Navigate: es un componente que se usa para navegar entre las rutas.
*/
function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<A/>}/>
        <Route path="/pagina1" element={<Navigate to="/"/>}/>{/* Navigate es una funcion que te permite navegar a una ruta. */}
        <Route path="/pagina2" element={<B/>}/>
        <Route path="/pagina3" element={<C/>}/>
        <Route path="*" element={<Error404 />}/>{/* Si no encuentra la ruta, redirige a la pagina de error 404. */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
