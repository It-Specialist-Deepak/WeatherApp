import React from 'react';
import { useWeather } from '../context/Weather';

const Card= ()=> {
const Weather = useWeather();
  return (
  <div className='card p-2 items-center flex flex-col justify-center'>
    <img className='w-48' src={Weather?.data?.current?.condition?.icon} alt="" />
    <div className='flex itemes-end  text-white gap-2'>
    <h2 className=' text-6xl'>{Weather.data?.current?.temp_c}°c ,</h2>
    <h2 className='text-2xl mt-8'>{Weather?.data?.current?.condition?.text}</h2>
    </div>
    <h5 className='text-white mt-2 items-center'>{Weather?.data?.location?.name} , {Weather?.data?.location?.country} </h5>
  </div>
  )
}

export default Card