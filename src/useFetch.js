import { useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
  
    useEffect(()=>{
  try{
    fetch(url)
    .then((response) => {
      if(response.ok) {
       return response.json();
      } else {
        setErrorMessage('There was an error 1');
        setisLoading(false);
      }
    })
    .then(results => {
      console.log('result ',results);
      setisLoading(false);
      setData(results);
    });
  }catch(e){
  console.log('Error detected')
    setisLoading(false);
    setErrorMessage('There was an error 2');
  }
    }, [url]); //agregamos la url en el array por que necesitamos que el parametro sea obligatorio 

    return {data, isLoading, errorMessage};
}

export default useFetch;
