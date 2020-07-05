import React, { useState } from 'react';
 
const INITIAL_LIST = [
  {
    id: '0',
    title: 'React with RxJS for State Management Tutorial',
    url: 'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/',
  },
  {
    id: '1',
    title: 'React with Apollo and GraphQL Tutorial',
    url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
  },
  {
    id: '2',
    title: 'Miniguide',
    url: 'https://www.miniguide.co',
  },
];
 
function List() {
  const [list, setList] = useState(INITIAL_LIST);
 
  const onRemoveItem = (e) => {
    console.log(e.target);
    console.log(list);
    setList(list.filter(item => item.id !== e.target.value));
  }

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
          <button type="button" value={item.id} onClick={onRemoveItem}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
 
export default List;
