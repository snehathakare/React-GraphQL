import React, { useState, useEffect } from 'react'
import './list.css'
import {
  useQuery,
  gql
} from "@apollo/client";

const RESULT_QUERY = gql`
query{
    characters{
      results{
        name
        id
        gender
        image
      }
    }
  }`

const CharactersList = () => {
  const { loading, error, data } = useQuery(RESULT_QUERY)

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div className="container card-list">
      {data.characters.results.map((char) => (
        <div>
          <img src={char.image} />
          <h5>{char.name}</h5>
        </div>
      ))}
    </div>
  )
}

export default CharactersList
