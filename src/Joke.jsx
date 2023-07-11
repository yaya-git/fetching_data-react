import React from 'react'
import useFetch from './useFetch'

export default function Reddit() {

  const {data : joke, isLoading, errorMessage} = useFetch('http://official-joke-api.appspot.com/jokes/random');

  return (
    <div>
      <h2>Joke Api</h2>
      {isLoading && <p>Loading ...</p>}
      {joke && <div>{joke.setup +' '+joke.punchline}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      </div>
  )
}
