import React, {useState,useEffect , useContext} from 'react'
import axios from 'axios';

import Card from './Card';
import './FontFamily.css';

import { context } from '../App';

const Home = () => {

  const [data,setData] = useState({});
  const {onchangeValue} = useContext(context);

  
  useEffect(() => { 
    const fetchApi = async() => {
      const fetchData = await axios.get(`https://www.omdbapi.com/?s=${onchangeValue}&apikey=7948e9ef`);
      console.log(fetchData);
    
      setData(fetchData);
    }
  
    fetchApi();
  
  },[onchangeValue])
  
  // for getting values of each result

  return (
    <div className='min-h-screen min-w-full  bg-zinc-900 quattrocento flex flex-wrap justify-center items-center gap-10 p-5'>
      { 
        data?.data?.Search?.map((movie)=>{
         
          return <Card  key={movie.imdbID} details={movie} />
        })
      }
    </div>
  )
}

export default Home;