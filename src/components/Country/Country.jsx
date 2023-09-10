import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }
    // console.log(handleVisitedCountries);
    const {name, flags, capital, area, cca3} = country;
    return (
        <div className={`country ${visited ? 'visited' : 'notVisited'}`}>
            <img className='image' src={flags.png} alt="" />
            <h2>Name: {name.common}</h2>
            <h3>Capital: {capital}</h3>
            <p>Area: {area}</p>
            <small>Code: {cca3}</small>
            <button className='btn' onClick={()=>{handleVisitedCountries(country)}}>Visited Mark</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>add flags</button>
            <br />
            <button className='btn' onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <p>{visited ? 'I already gone there' : 'I want to go'}</p>
        </div>
    );
};

export default Country;