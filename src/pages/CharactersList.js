import React from 'react'
import './list.css'
import useCharacters from './../hooks/useCharacters'


const CharactersList = () => {
  const { loading, error, data } = useCharacters()

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div className="card-list">
      {data.characters.results.map((char) => (
        <div key={char.id}>
          <img src={char.image} alt="characters" />
          <h5>{char.name}</h5>
        </div>
      ))}
    </div>
  )
}

export default CharactersList
