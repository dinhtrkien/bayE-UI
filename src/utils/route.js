export const convertToQueryString = (params = {}) => {
  if(!params) return null;
  const query = new URLSearchParams();
  // Convert to query string
  Object.entries(params).forEach(([key, value], num) => {
    if (value !== '' && value !== 'any' && value !== undefined && value !== null) { // Exclude empty and default values
      query.append(key, value);
    }
  });
  return query.toString();
}



