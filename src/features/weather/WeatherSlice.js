import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clouds: 'undefined',
    main: {
        feels_like: 'undefined'
    }, 
    name: 'undefined',
    sys: {
        country: 'undefined',
        sunrise: 'undefined'
    },
    weather: 'undefined',
    wind: {
        speed: 'undefined'
    },
    isLoaded: false
}

export const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setData: (state, action) => {
            const {lat, lon, clouds, main, name, sys, weather, wind} =  action.payload
            state.lat = lat
            state.lon = lon
            state.clouds = clouds
            state.main = main
            state.name = name
            state.sys = sys
            state.weather =  weather
            state.wind = wind
            state.isLoaded = true
        }, 
        resetData: (state) => {
            state.isLoaded = false
        }
    }
}) 

export const {setData, resetData} = WeatherSlice.actions
export default WeatherSlice.reducer