import { useState, useEffect } from "react"
import Countries from "./component/Countries";
import Search from "./component/Search";



const url = 'https://restcountries.com/v3.1/all'

const App = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountry, setfilterCountry] = useState(countries);



    const fatchData = async (url) => {
        setLoading(true)

        try{
          const res = await fetch(url)
          const data = await res.json()
          setCountries(data)
          setfilterCountry(data)
          setLoading(false)
          setError(null)
        } catch (error) {
          setLoading(false)
          setError(error)
        }
        

    }

  useEffect(() => {
      fatchData(url)
  }, []);

  const handleRemove = (name) => {
    const filter = filterCountry.filter((country) => country.name.common !== name)
    setfilterCountry(filter)
  }

  const handleSearch = (searchVale) => {
    let value = searchVale.toLowerCase();
    const newCountries = countries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(value)
    })
    setfilterCountry(newCountries)
  }

  return (
    <div className="container">
      <h1 
      className="text-3xl text-center mb-12 mt-5 font-semibold"
      >
        Country App
      </h1>

    <Search onSearch={handleSearch}/>

      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && (
       <Countries countries={filterCountry} removeCountry={handleRemove}/>
       )}

    </div>
  )
}

export default App