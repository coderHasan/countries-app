import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Country from './Country'

const Countries = ({countries, removeCountry}) => {
  return (
    <section className='grid md:grid-cols-3 lg:grid-cols-4 gap-8 sm:grid-cols-2 '>
        {countries?.map((country) => {
            const newCountry = {country, id: uuidv4()}
            return <Country {...newCountry} key={newCountry.id} onRemoveCountry={removeCountry}/>
        })}
    </section>
  )
}

export default Countries