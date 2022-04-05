import React from 'react'
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
      
      }
    }
  }`



const CharactersList = () => {
  const obj = useQuery(RESULT_QUERY)
  console.log({ obj })
  return (
    <div>

    </div>
  )
}

export default CharactersList
