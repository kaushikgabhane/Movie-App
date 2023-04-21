import React, {useState,useEffect} from 'react'

import Card from './Card';
import './FontFamily.css';
import axios from 'axios';


const Home = ({searchInput}) => {

  const [data,setData] = useState({});

    
  useEffect((searchInput) => { 
    const fetchApi = async() => {
      const fetchData = await axios(`https://www.omdbapi.com/?s=${searchInput}&apikey=7948e9ef`);
  
      setData(fetchData);
    }
    return ()=>{
      fetchApi();
    }
  },[searchInput])
  console.log(data);


  return (
    <div className=' min-h-screen min-w-full bg-zinc-900 quattrocento'>
        <h1 className='text-slate-50 text-xl'> 
            <Card />
        </h1>
    </div>
  )
}

export default Home