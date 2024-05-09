import { useEffect, useState, useMemo, useCallback } from 'react';

import Card from './card';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState(false);
  const [title, setTitle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []);

  // this function to optimism title list
  const TitleUppercase = useMemo(() => {
    return posts.map(item => ({ id: item.id, title: item.title.toUpperCase() }));
  }, [posts]);

  // useCallback is used to stop reRendering of child component
  const toggleSort = useCallback(() => {
    console.log("toggleSort")
    if (sort) {
      setSort(!sort)
      return setPosts(posts.slice().sort((a, b) => a.id - b.id));
    } else {
      setSort(!sort)
      return setPosts(posts.slice().sort((a, b) => b.id - a.id));
    }
  }, [posts])

  return (
    <div className='list'>
      <div className='heading'>
        {title && <a>parent toggle</a>}
        <button onClick={() => setTitle(!title)}>change parent</button>
        <p>Click this to render parent and check logs to see renders of child</p>

      </div>
      {TitleUppercase && TitleUppercase.map(post => (
        <Card key={post.id} id={post.id} title={post.title} toggleSort={toggleSort} />
      ))}
    </div>
  )
}

export default App
