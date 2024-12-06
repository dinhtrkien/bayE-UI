import { useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';

export const useGetSearchParams = () => {
  const location = useLocation();
  return useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }, [location]);
};
