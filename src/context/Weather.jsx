//creating context by using context API
import { getWeatherDataForCity , getWeatherDataForLocation } from "../api";

import { createContext  , useContext , useState} from "react";

const WeatherContext =  createContext(null);  //deafault value of context is null

export const useWeather =()=>{  //Default HOOK
    return useContext(WeatherContext);  //initailize useContext by WeatherContext
};

export const WeatherProvider = (props) =>{ 
    const [data , setdata] = useState(null);
    const [searchcity , setsearchcity] = useState(null);

const fetchdata = async()=>{
    const response = await getWeatherDataForCity(searchcity)
    setdata(response);
}
const fetchCurrentUserLocation = () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
        getWeatherDataForLocation(position.coords.latitude,
            position.coords.longitude
        ).then((data)=>setdata(data));
    });
};


    return <WeatherContext.Provider value={{searchcity ,  data , setsearchcity , fetchdata  , fetchCurrentUserLocation}}>       
        {props.children}
    </WeatherContext.Provider>
}