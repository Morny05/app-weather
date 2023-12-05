import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clouds: '',
    main: '', 
    name: '',
    sys: '',
    weather: '',
    wind: ''
}

export const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setData: (state, action) => {
            state = action.payload
        }
    }
}) 

export const {setData} = WeatherSlice.actions
export default WeatherSlice.reducer