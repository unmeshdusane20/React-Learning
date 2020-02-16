import React, { Component } from 'react';
import WeatherCard from '../../components/weather-card';
import TodayCard from '../../components/weather-card/TodayCard';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {      
      weatherData: null,
      todayWeather: null
    }
  }  

  getLocation(){
    var _this = this
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        _this.getWeatherData(position)
      })      
    }
  }

  filterData (dataseries) {
    var newArray = []
    for(var i=0;i< dataseries.length;i++) {
      var currentStatus = dataseries[i];
      var dateInt = currentStatus.date;
      dateInt = dateInt+"";
        // convert to YYYY/MM/DD
      dataseries[i]['convertedDate'] = dateInt.slice(0,4)+"/"+dateInt.slice(4,6)+"/"+dateInt.slice(6,9);   
      newArray.push(dataseries[i]);      
    }

    return newArray;
  }

  getWeatherData(position) {
    console.log(position)
    let lat = position.coords.latitude,
        long = position.coords.longitude;
    let _this = this;    
    fetch('http://www.7timer.info/bin/api.pl?lon='+long+'&lat='+lat+'&product=civillight&output=json')
    .then(res => res.json())
    .then(data => {
      
      var filterDataArray = _this.filterData(data.dataseries);
      console.log(filterDataArray)
      var nextDays = [];

      for(var i=0;i< filterDataArray.length;i++) {
        // check today and store it in another state
        if(new Date().toDateString() == new Date(filterDataArray[i]['convertedDate']).toDateString()) {
          _this.setState({
            todayWeather: filterDataArray[i]
          })
        } else {
          nextDays.push(filterDataArray[i]);
        }
      }

       console.log(nextDays)
      this.setState({weatherData: nextDays})
    })
  }

  showPosition(position) {    
    this.getWeatherData()
  }

  render() {
    return(
      <div className="App">  
        { 
          this.state.todayWeather ? <TodayCard weather={this.state.todayWeather}/> :''
        }
         
        {
          this.state.weatherData ? <WeatherCard weathers={this.state.weatherData}/> : ''         
        }  
      </div>
    )
  }

  componentDidMount() {
    this.getLocation()    
  }
}

export default Home