import React from 'react'

const Country = ({country, onRemoveCountry}) => {

    const {name, flags, capital, population, area} = country

    const handleRemove = (name) => {
        onRemoveCountry(name)
    }


  return (
    <article className='flex items-center justify-center bg-[#34495e] p-5 text-white rounded-lg hover:scale-105 transition-all duration-500 ease-in-out'>
        <div className='text-sm'>
            <img className='rounded-md mb-5' src={flags.png} alt={name.common} />
            <h3 className='text-md font-semibold'>Name: {name.common}</h3>
            <h3 className='text-[#aeaeae]'>Population: {population}</h3>
            <h3 className='text-[#aeaeae]'>Capital: {capital}</h3>
            <h3 className='text-[#aeaeae]'>Area: {area}</h3>
            <button onClick={() => {handleRemove(name.common)}} className='bg-orange-500 px-4 py-[5px] rounded-sm mt-3'>
                Remove Country
            </button>
        </div>
    </article>
  )
}

export default Country