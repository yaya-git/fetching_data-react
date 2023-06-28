import React, {useEffect, useState} from 'react'

export default function Reddit() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
try{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    if(response.ok) {
     return response.json();
    } else {
      setErrorMessage('There was an error 1');
      setisLoading(false);
    }
  })
  .then(results => {
    setPosts(results);
    console.log(results);
    setisLoading(false);
  });
}catch(e){
console.log('Error detected')
  setisLoading(false);
  setErrorMessage('There was an error 2');
}
  }, []);

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
