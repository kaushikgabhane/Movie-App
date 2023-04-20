import React from 'react'

import Card from './Card';
import './FontFamily.css';
// import axios from 'axios';

const Home = () => {

    // First learn context Api
    // const [data,setData] = useState({});

    // const fetchData = async() => {
    //     const fetchData = await axios(`https://www.omdbapi.com/?s=${}&apikey=7948e9ef`)
    // }


  return (
    <div className=' min-h-screen min-w-full bg-zinc-900 quattrocento'>
        <h1 className='text-slate-50 text-xl'> 
            <Card />
        </h1>
    </div>
  )
}

export default Home