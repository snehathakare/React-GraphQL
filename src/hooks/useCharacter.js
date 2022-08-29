import {
    useQuery,
    gql
} from "@apollo/client";

const GET_CHARACTER = gql`
    query GetCharacter($id: ID!){
        character(id:$id){
            name
            id
            gender
            image
          }
      }`

const useCharacter = (id) => {
    const { loading, error, data } = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    })
    return {
        error,
        data,
        loading
    }
}

export default useCharacter
