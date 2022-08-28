import './App.css';
import CharactersList from './pages/CharactersList'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} />
      </Routes>


    </div>
  );
}

export default App;
