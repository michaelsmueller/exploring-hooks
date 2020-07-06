import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://hn.algolia.com/api/v1/search?query=${search}`);
      setData(result.data);
    }
    fetchData();
  }, [search]);

  const handleChange = (e) => setQuery(e.target.value);

  const handleClick = (e) => setSearch(query);

  return (
    <>
      <input type='text' value={query} onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
 
export default DataFetching;
