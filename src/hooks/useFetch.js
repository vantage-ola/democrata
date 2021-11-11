import { useState, useEffect } from "react";
import Data from '../data.json';

function useFetch() {
  const [data, setData] = useState([]);
  
  async function fetchUrl() {
    const json = await Data;
    setData(json);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data];
}
export { useFetch };