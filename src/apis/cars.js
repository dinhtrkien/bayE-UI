import axiosClient from "@apis/api";
import { useCallback, useMemo, useState } from "react";



// Hooks for managing get cars
export const useGetCars = (params = {}, deps = []) => {
  // State for cars
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchCars = useCallback(async () => {
    setLoading(true);
    setError(null);
    setCars([]);
    await axiosClient
      .get('/cars', {
        params: params
      })
      .then((res) => {
        setCars(res?.cars)
        setLoading(false);
      })
      .catch((er) => {
        setError(er);
        setLoading(false);
      });
  }, deps);

  return [{ cars, loading, error }, fetchCars];
}
