import React, {useState,useEffect , useContext} from 'react'
import axios from 'axios';

import Card from './Card';
import './FontFamily.css';

import { context } from '../App';

const Home = () => {

  const [data,setData] = useState({});
  const {input} = useContext(context);

  const fetchApi = async() => {
    const fetchData = await axios(`https://www.omdbapi.com/?s=${input}&apikey=7948e9ef`);
  
    setData(fetchData);
  }
  
  useEffect(() => { 
  
    fetchApi();
  
  },[])
  console.log(data);
  
  // for getting values of each result

  return (
    <div className='min-h-screen min-w-full  bg-zinc-900 quattrocento'>

      {
        data?.Search?.map((ele)=>{
          
          return <Card details={ele}/>
        })
      }
    </div>
  )
}

export default Home