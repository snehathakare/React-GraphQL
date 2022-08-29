import React from 'react'
import { useParams } from 'react-router'
import useCharacter from '../hooks/useCharacter'

const Character = () => {
    const { id } = useParams()
    const { loading, error, data } = useCharacter(id)

    if (loading) return <div>loading...</div>;
    if (error) return <div>Something went wrong</div>
    return (
        <div>
            <img src={data.character.image} alt="characters" />
            <h5>{data.character.name}</h5>
            <p>{data.character.gender}</p>
        </div>

    )
}

export default Character