import { useLocation } from 'react-router-dom';
import {useEffect, useMemo, useState} from 'react';

export const useSearchParams = () => {
  const [searchPath, setSearchPath] = useState(window.location.search);
  const searchParams = useMemo(() => {
    const searchParams = new URLSearchParams(searchPath);
    const params = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    console.log(params)
    return params;
  }, [searchPath]);
  const setSearchParams = (params) => {
    const url = new URL(window.location);
    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        url.searchParams.delete(key); // Remove param if value is null/undefined
      } else {
        url.searchParams.set(key, value);
      }
    });
    window.history.pushState({}, '', url); // Update the URL without a page reload
    setSearchPath(window.location.search);
  }

  return { searchParams, setSearchParams }
};
