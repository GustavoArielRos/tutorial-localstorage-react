import React,{ useState } from 'react' 
import './App.css';

function App() {

  const [nome,setNome] = useState();
  const [id,setId] = useState(0);

  const armazenar = (chave,valor) =>{
    localStorage.setItem(chave,valor)
    setId(id + 1);
  }

  const consultar=(chave) =>{
    alert(localStorage.getItem(chave))
  }

  const apagar =(chave) => {
    localStorage.removeItem(chave)
  }

  return (
    <div className="App">
      <label>Digite um nome</label><br></br>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input><br></br>
      <button onClick={() => armazenar(id, nome)}>Gravar Nome</button>
      <button onClick={() => consultar('ls nome')}>Ver nome</button>
      <button onClick={() => apagar(0)}>Apagar nome</button>
    </div>
  );
}

export default App;
