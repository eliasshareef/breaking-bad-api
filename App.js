import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchString, setSearchString] = useState('');

  useEffect(()=>{
    const fetchItems = async () =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${searchString}`);

      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [searchString])

  return ( 
    <div className="container">
      <Header></Header>
      <Search getSearchString={(str)=>setSearchString(str)}></Search>
      <CharacterGrid isLoading={isLoading} items={items}></CharacterGrid>
    </div>
  );
}

export default App;
