import * as React from 'react'
import { useGetEmployeesQuery } from '../../api-client'


export default function Employee() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetEmployeesQuery()
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  console.log(data)
  // render UI based on data and loading state
}