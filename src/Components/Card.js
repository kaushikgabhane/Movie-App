import React from 'react'

const Card = ({details}) => {

  
  return (
      <section aria-label='Movie card' className='card h-[350px] w-[250px] bg-slate-800  z-0 flex flex-col gap-5 items-center justify-center'>
        <img src={details.Poster} alt='Sorry!! Media Not Found 🥲' className='w-[80%] h-[70%] rounded-xl text-white font-bold'/>
        
        <div aria-label='movie details' className=' w-full text-white text-center'>
          <h4 className='font-extrabold p-2'>{details.Title}</h4>
        </div>

      </section>
    )
}

export default Card;