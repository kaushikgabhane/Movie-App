import React from 'react'

const Card = () => {
  return (
      <section aria-label='Movie card' className='card h-[350px] w-[250px] bg-slate-400 z-0'>
        <img src='' alt='movie image' className=''/>
        
        <div aria-label='movie details' className=''>
          <h4>Title</h4>
          <var>Release Year</var>
        </div>

      </section>
    )
}

export default Card;