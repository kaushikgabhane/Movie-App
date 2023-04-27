import React, {useState,useEffect , useContext} from 'react'
import axios from 'axios';

import Card from './Card';
import './FontFamily.css';

import { context } from '../App';

const Home = () => {

  const [data,setData] = useState({});
  const {input} = useContext(context);

  useEffect(() => { 
    const fetchApi = async() => {
      const fetchData = await axios(`https://www.omdbapi.com/?s=${input}&apikey=7948e9ef`);
  
      setData(fetchData);
    }

    return ()=>{
      fetchApi();
    }

  },[input])
  console.log(data);
  

  return (
    <div className=' min-h-screen min-w-full bg-zinc-900 quattrocento'>
      <Card />
    </div>
  )
}

export default Home