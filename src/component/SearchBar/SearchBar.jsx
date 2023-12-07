import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import styles from './SearchBar.module.scss';
import { Autocomplete, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { resetData, setData } from '../../features/weather/WeatherSlice';

export const SearchBar = () => {
  const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY;

  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API;
  
  const [cities, setCities] =useState([]);
  const [unity, setUnity] = useState('metric');
  
  const dispatch = useDispatch(); 


  const handleInputChange = (e) => {
    const {value} = e.currentTarget
    console.log(GEO_API_KEY)
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${GEO_API_KEY}`)
      .then(response => response.json())
      .then(json => setCities(json.results?.map(data => {
        const {lat, lon, city, country, formatted} = data
        return {lat, lon, city, country, formatted}
      })))
    console.log(value)
  }


  const handleAutocompleteSelect = (e, value) => {
    if (value !== null) {
      const {lat, lon} = value
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=${unity}&lon=${lon}&appid=${WEATHER_API_KEY}`)
        .then(response => response.json())
        .then(json => {
          const {lat, lon, clouds, main, name, sys, weather, wind} = json
          dispatch(setData({lat, lon, clouds, main, name, sys, weather, wind}))
        })
    } else {
      dispatch(resetData())
    }
  }

  
  return (
    <>
      <Form >
        <Form.Group className={`d-flex ${styles.serachContainer}`}>
          <Autocomplete className={styles.searchInput} 
                        onChange={handleAutocompleteSelect}
                        getOptionLabel={(option) => option.formatted}
                        renderInput={ (params) => 
                          <TextField onChange={handleInputChange} {...params} 
                                    label={'Enter City...'}/>}              
                        options={cities}/>
          <Button variant='primary' className={styles.button}>
            Search</Button>
        </Form.Group>
      </Form>
    </>
  )
}
