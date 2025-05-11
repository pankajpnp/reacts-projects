import React, { useCallback, useEffect, useRef, useState } from 'react'
import WeatherCard from './WeatherCard'
import Failed from './Failed'
import './Weather.css'

const Weather = () => {
    const[longitude,setlongitude]=useState(75.98)
    const[latitude,setlatitude]=useState(26.91)
    const[isday,setday]=useState(0)
    const[direction,setdirection]=useState(0)
    const[location,setlocation]=useState("jaipur")
    const [temprate,settemprature]=useState(0)
    const[windspeed,setwindspeed]=useState(0)
    const[exist,setexist]=useState(false)
    let url1=`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    let url2=`https://geocoding-api.open-meteo.com/v1/search?name=${location}`



    let obj={
        longi :longitude,
        lati :latitude,
        day :isday,
        direction : direction,
        location :location,
        temprate :temprate,
        windspeed :windspeed,
    }


    const callapis=useCallback(()=>{
        console.log(url2)
        fetch(url2)
        .then((res)=>res.json())
        .then((res)=>{
            console.log("jaipur")
            console.log(res)
            if(!res.results){
                setexist(false)
                alert("Sorry No Data Found")
                
            }else{

                console.log(res.results[0].latitude)
                console.log(res.results[0].longitude)
                setlongitude(res.results[0].longitude)
                setlatitude(res.results[0].latitude)
                setexist(true)
            }
        })
        .catch((err)=>{
            console.log(`Eror Occured : ${err}`)
            setexist(false)
        })
        if(exist){

            fetch(url1)
            .then((res)=>res.json())
        .then((res)=>{
            console.log(res.current_weather)
            if(!res.current_weather){
                setexist(false)
                alert("Sorry No Data Found ")
            }else{
                console.log(res)
                settemprature(res.current_weather.temperature)
                setwindspeed(res.current_weather.windspeed)
                setday(res.current_weather.is_day)
                setdirection(res.current_weather.winddirection)
                setexist(true)
            }
        })
        .catch(()=>{
            alert("Unable to Fetch ")
            setexist(false)
        })
    }
    },[location,longitude,latitude])
    useEffect(()=>{
        callapis()
    },[latitude,longitude,location])
    const inp=useRef()
    function getvalue(){
        console.log(inp.current.value)

        setlocation(inp.current.value)
    }
  return (
    <>
    <div className='this'>

    <div className='container row pt-5 '>
    <div className='col-md-4 col-8 offset-md-5 offset-2 d-flex'>
    <input ref={inp} className='form-control' onKeyUp={(ev)=>{
        if(ev.key=='Enter'){
            getvalue()
        }
    }} />
        <button onClick={getvalue} className='btn btn-success'>Submit</button>

    </div>
      
       {exist? <WeatherCard props={obj}/>:<Failed/>} 
    </div>
    </div>
    </>
  )
}

export default Weather
