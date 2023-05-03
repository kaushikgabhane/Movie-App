import Card from './Card';
import './FontFamily.css';

import useAPI from '../Utils/useAPI';


const Home = () => {

  const {data} = useAPI();

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