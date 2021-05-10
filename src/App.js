import React,{useEffect,useState} from 'react';
import './App.css';
import Recipes from './components/Recipes';

function App() {
  const APP_ID ='1ac1263f'
  const APP_KEY = '0e07236f7f4b595d0d7b8d79c75dccce'
  //const ExampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const[recipes,setRecipes] = useState([]);
  const[search,setSearch] = useState('');
  const[query,setquery] = useState('chicken');
  useEffect(()=>{
    getRecipes();
  }, [query]); //it will on render when we hit the submit button

  const onSearchChange = (event) =>{
    setSearch(event.target.value);
    //console.log(search);
  }

  const getsearch = (event) =>{
    event.preventDefault();
    setquery(search);
    setSearch(''); //after hitting the submit button searchbox will be cleared
  }
  const getRecipes= async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };
  //getRecipes();
  return (
    <div className="App">
      <form onSubmit={getsearch} className="search-form">
        <input className="search-bar" type="search" value={search} onChange={onSearchChange}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipies">
    {
      recipes.map(recipe =>(
        <Recipes key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients} />
      ))
    }
    </div>
    </div>
  );
}

export default App;
