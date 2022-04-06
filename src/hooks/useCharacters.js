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

const useCharacters = () => {
  const { loading, error, data } = useQuery(RESULT_QUERY)
  return {
    error,
    data,
    loading
  }
}

export default useCharacters
