//impoerting Custom Hooks
import { useState, useEffect } from 'react';

function useFetch(url) {

  //this stores the fetched data
  const [data, setData] = useState([]);

  //for loading when data is being fetched
  const [loading, setLoading] = useState(true);

  //store the error message
  const [error, setError] = useState(null);

  
  useEffect(() => {

    //This function will get data from API
    async  function fetchData(){
      setLoading(true);   //starts loading

      //error handelling 
      try {
      const response = await fetch(url);
      //check if the request was successful
      if (!response.ok) {
         throw new Error("failed to fetch");
      } 
      const result = await response.json();
      setData(result);
      } catch (err) {
      setError(err.message);
      }

      setLoading(false);  //stops loading after the request is completed
      
    }
    fetchData();
  },[url]);

  //here returning these values so that photogallery file can use them
  return { data, loading, error };
};

export default useFetch;