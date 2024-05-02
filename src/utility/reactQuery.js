// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function ReactQuery(urlPath ) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        console.log(response.data, `api/{path}`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [urlPath]);

  console.log(urlPath,"url")
  return(
    {
        products, error, loading,
      }
  )

}

export default ReactQuery;
