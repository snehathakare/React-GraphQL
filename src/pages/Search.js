import React, { useState } from 'react'
import { useLazyQuery, gql } from '@apollo/client'

const GET_CHAR_LOCATIONS = gql
    `query GetCharLocations($name: String!)
    {
        characters(filter: {name:$name})
        {
            results
            {
                location
                {
                    name
                }    
            }
        }
  }`

const Search = () => {
    const [name, setName] = useState("")
    const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHAR_LOCATIONS, {
        variables: { name }
    });
    console.log(called, data)
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => getLocations()}>Search</button>
            {loading && <div>loading...</div>}
            {error && <div>something went wrong</div>}
            {data &&
                data.characters.results.map((item) => {
                    return (<li key={item.id}>
                        {item.location.name}
                    </li>)
                })
            }
        </div>
    )
}

export default Search