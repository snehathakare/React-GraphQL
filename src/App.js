import './App.css';
import CharactersList from './pages/CharactersList'
import { Routes, Route } from 'react-router-dom'
import Character from './pages/Character';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CharactersList />} />
        <Route exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
