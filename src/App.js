import './App.css';
import CharactersList from './pages/CharactersList'
import { Routes, Route } from 'react-router-dom'
import Character from './pages/Character';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CharactersList />} />
        <Route exact path="/:id" element={<Character />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
