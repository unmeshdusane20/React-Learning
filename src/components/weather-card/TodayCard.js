import React, { Component } from 'react';
import WeatherIcon from './weather-icon';
import Moment from 'react-moment';
import 'moment-timezone';

class TodayCard extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
		<div className="card toaday-weather-card">
      <div className="card-body text-center">  
        <WeatherIcon icon={this.props.weather.weather}/>       
        <div className="card-date">
          <h3 className="day">Today</h3>  
          <span>
            (<Moment format="dddd, MMMM Do YYYY">
              {this.props.weather.wdate}
            </Moment>)
          </span>  
          <div className="tempRange d-flex justify-content-between">
            <span>{this.props.weather.temp2m.min}<sup>o</sup>C <small>Min</small></span> 
            <span>~{this.props.weather.temp2m.max}<sup>o</sup>C <small>Max</small></span>
          </div>
        </div>          
      </div>      
    </div>
    )
	}

	componentDidMount(){
	}
}

export default TodayCard