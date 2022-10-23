import Config from 'react-native-config';

const makeRequest = async <TResponse, TQuery = any>(
  endpoint: string,
  query?: TQuery
): Promise<TResponse> => {
  let queryString = '';
  if (query) {
    queryString = '?';
    Object.keys(query).forEach(key => {
      if (query[key]) {
        queryString += `${key}=${encodeURIComponent(query[key])}&`;
      }
    });
  }
  const response = await fetch(`${Config.API_URL}${endpoint}${queryString}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Config.API_TOKEN}`
    },
    method: 'GET'
  });
  if (response.ok) return response.json();
  throw await response.json();
};

export default {
  makeRequest
};
