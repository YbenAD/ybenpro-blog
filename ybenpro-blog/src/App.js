
import './App.css';
import NavBar from './NavBar';
import Acceuil from "./Acceuil";

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="contenu">
        <Acceuil />
      </div>
    </div>
  );
}

export default App;
