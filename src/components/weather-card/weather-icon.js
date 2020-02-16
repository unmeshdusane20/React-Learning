import React, { Component } from 'react'

class WeatherIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (  
      (() => {
        var img = '';
        switch(this.props.icon) {
          case 'clear':
            img =  <img id="imglogo" src="/animated/day.svg" />
            break;
          case 'mcloudy':
            img =  <img id="imglogo" src="/animated/cloudy-day-1.svg" />
            break;
          case 'cloudy':
            img =  <img id="imglogo" src="/animated/cloudy.svg" />
            break;

          case 'rain':
            img =  <img id="imglogo" src="/animated/day.svg" />
            break;

          case 'snow':
            img =  <img id="imglogo" src="/animated/day.svg" />
            break;

          case 'ts':
            img =  <img id="imglogo" src="/animated/day.svg" />
            break;

          case 'tsrain':
            img =  <img id="imglogo" src="/animated/day.svg" />
            break;

          default:
            img =  <img id="imglogo" src="/animated/day.svg" />
            break;
        }
        return(
         img
        )
      })()
    )
  }

  componentDidMount() {
  }
}

export default WeatherIcon
