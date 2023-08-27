import React, { useEffect, useState } from 'react'

const Search = ({onSearch}) => {

    const [searchTex, setSearchTex] = useState('');

    const habdleChange = (e) => {
        setSearchTex(e.target.value)

    }

    useEffect(() => {
        onSearch(searchTex)
    }, [searchTex]);

  return (
    <div className='mb-5 mx-auto text-center'>
        
        <input
            className='outline-none border border-[gray] rounded-sm px-2 '
            type="text"
            placeholder='Search country'
            onChange={habdleChange}
            value={searchTex}
        />

    </div>
  )
}

export default Search