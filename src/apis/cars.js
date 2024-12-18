import axiosClient from '@apis/api';
import { useCallback, useMemo, useState } from 'react';

// Hooks for managing get cars
export const useGetCars = () => {
  // State for cars
  const [cars, setCars] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchCars = async ({ page = 0, ...params } = {}) => {
    setLoading(true);
    setError(null);
    setCars([]);
    setTotalPages(0);
    await axiosClient
      .get('/cars', {
        params
      })
      .then((res) => {
        setCars(res?.cars);
        setLoading(false);
        setTotalPages(res?.totalPage);
      })
      .catch((er) => {
        setError(er);
        setLoading(false);
      });
  };
  return [{ cars, loading, error, totalPages }, fetchCars];
};
