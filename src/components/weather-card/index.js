import React from 'react';
import Card from './card';
import './weather.css';
 
const WeatherCard = ({weathers}) => {
  return (      
      <div className="card-deck">
      {
        weathers.map((item, i) => (
          <Card weather={item} key={item.date} />
        ))
      } 
      </div>    
  )
}

export default WeatherCard