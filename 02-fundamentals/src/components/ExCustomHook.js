import React from 'react'
import { useFetch } from '../hooks/useFetch'

export default function ExCustomHook() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    //let url = "https://jsonplaceholder.typicode.com/users";
    let {data, isPending, error} = useFetch(url);

  return (
    <div>
        <h1>Ex Custom Hook</h1>
        <h3>Pending: { JSON.stringify(isPending) }</h3>
        <h3><mark>Error: { JSON.stringify(error) }</mark></h3>
        <h3>Data count: { JSON.stringify(data?.count ?? "") }</h3>
        <h3>Data next: { JSON.stringify(data?.next ?? "") }</h3>
        <pre>
            <code>
            First: { JSON.stringify(data?.results[0] ?? []) }
            </code>
        </pre>
        <pre style={{ whiteSpace: "pre-wrap" }}>
            <code>
            All: { JSON.stringify(data) }
            </code>
        </pre>
    </div>
  )
}
