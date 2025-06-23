import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getHerosByName } from '../Heroes/helpers';

export const useSearch = () => {
    
      const location = useLocation();
    
      const { q = "" } = queryString.parse(location.search);
      const query = Array.isArray(q) ? q[0] ?? "" : q ?? ""; //coerse q into string if it is arr or null.
      const heros = getHerosByName(query);

  return {query, heros}
}
