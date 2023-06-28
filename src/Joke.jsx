import React, {useEffect, useState} from 'react'

export default function Reddit() {

  const [joke, setJoke] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
try{
  fetch('http://official-joke-api.appspot.com/jokes/randomx')
  .then((response) => {
    console.log('res ', response);
    if(response.ok) {
     return response.json();
    } else {
      setErrorMessage('There was an error api joke 1');
      setisLoading(false);
    }
  })
  .then(result => {
    
    if(!result){
setErrorMessage('There was an error api joke 2');
    } else {
    setisLoading(false);
    setJoke(result.setup +' '+result.punchline);
    }
      


  })
}catch(e){
console.log('Error detected')
  setisLoading(false);
  setErrorMessage('There was an error 2');
}
  }, []);

  return (
    <div>
      
      <h2>Joke Api</h2>
      {isLoading && <p>Loading ...</p>}
      {joke && <div>{joke}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      </div>
  )
}
