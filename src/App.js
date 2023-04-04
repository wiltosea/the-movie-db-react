import { Link, Outlet } from 'react-router-dom';
import './App.scss';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Bem vindo ao App de Filmes</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Mais Vistos</Link>
            </li>
            <li>
              <Link to="/">Melhor Avaliados</Link>
            </li>
            <li>
              <Link to="/">Indicados ao Oscar</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
