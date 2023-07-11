import {React} from 'react'
import useFetch from './useFetch';

export default function Reddit() {

  const {data: posts, isLoading, errorMessage} = useFetch('https://jsonplaceholder.typicode.com/posts');


  return (
    <div>
      <h2>Typicode todos</h2>
      {isLoading && <p>Loading ...</p>}
      {posts && (
      <ul>
        {posts.map(post =>(
        <li key={post.id}>
          {post.title}
          </li>
        ))}
      </ul>
      )}
      {errorMessage && <div>{errorMessage}</div>}
      </div>
  )
}
