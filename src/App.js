import logo from './logo.svg';
import './App.css';
import { Testimonio } from './components/Testimonio/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor__principal'>
        <h1 className='titulo'>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio/>
      </div>
    </div>
  );
}

export default App;