import React from 'react'
import WeatherIcon from './weather-icon'
import Moment from 'react-moment';
import 'moment-timezone';
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const wdate = this.props.weather.convertedDate;
    return (
       <div className="card weather-card">
        <div className="card-body" >   
          <div className="card-date">
            <small className="badge mr-1">
              <Moment format="ddd">
                {wdate}
              </Moment>
            </small>  
            <small className="badge">
              <Moment format="DD/MM/YYYY">
                {wdate}
              </Moment>
            </small>  
          </div>  
            
          <WeatherIcon icon={this.props.weather.weather}/>
          <div className="tempRange d-flex justify-content-between">
            <span>{this.props.weather.temp2m.min}<sup>o</sup>C <small>Min</small></span> 
            <span>~{this.props.weather.temp2m.max}<sup>o</sup>C <small>Max</small></span>
          </div>                   
        </div>       
      </div>
    );
  }
}

export default Card