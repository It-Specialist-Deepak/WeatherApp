import { useEffect } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
import { useWeather } from './context/Weather';

function App() {
  const Weather = useWeather();
  console.log(Weather);

  useEffect(() => {   //HOOK to fetch data on mounting page
    Weather.fetchCurrentUserLocation();
  }, []);

  //function to refresh page
    const handleRefresh = () => {
      window.location.reload();
    };

  return (
    <>
      <div className='bg-zinc-800 w-full h-screen  m-0 p-0  items-center'>
        <h1 className='bg-green-400  p-5 text-3xl text-white flex justify-center'>Weather App</h1>
       <div className='flex  justify-center items-center'>
       <Input />
        <Button onClick={Weather.fetchdata} value="serach" />
        </div>
        <div className='flex flex-col justify-center items-center'>
        <Card />
        <Button value="Refresh" onClick={handleRefresh} />
        </div>
      </div>
    </>
  )
}

export default App
