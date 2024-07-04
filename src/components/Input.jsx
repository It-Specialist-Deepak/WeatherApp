import React from 'react';
import { useWeather } from '../context/Weather';

const Input = () => {
    const Weather = useWeather();
   
  return (
    <input type="text" 
    className='p-2 m-3 w-96 mt-10 rounded-full ml-42'
    placeholder='Search Here...'
    value={Weather.searchcity}
    onChange={(e)=>Weather.setsearchcity(e.target.value)}
     />
  )
}

export default Input;