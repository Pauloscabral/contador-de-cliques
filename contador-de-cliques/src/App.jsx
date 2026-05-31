import { useState } from 'react';
import './App.css';

// Componente principal
function App() {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
  };

  return (
    <section id="center">
      <div>
        <h1>Contador de Cliques: {count}</h1>
        <p>Esta aplicação conta a quantidade de cliques no botão.</p>
        
        <button 
          type="button"
          className="counter" 
          onClick={incrementarContador}
        >
          Clique aqui
        </button>
      </div>
    </section>
  );
}

export default App;