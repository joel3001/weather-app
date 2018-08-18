import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../styles/forecast-details.scss';

const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="big-date">
      <span><b>Date:</b> {moment(props.forecasts.date).format('ddd Do MMM')}</span>
    </div><br />
    <div className="temp-max">
      <span><b>Max Temperature:</b> {props.forecasts.temperature.max} &#x2103;</span>
    </div><br />
    <div className="temp-min">
      <span><b>Min Temperature:</b> {props.forecasts.temperature.min} &#x2103;</span>
    </div><br />
    <div className="big-humidity">
      <span><b>Humidity:</b> {props.forecasts.humidity} %</span>
    </div><br />
    <div className="wind-speed">
      <span><b>Wind Speed:</b> {props.forecasts.wind.speed} mph</span>
    </div><br />
    <div className="wind-direction">
      <span><b>Direction:</b> {props.forecasts.wind.direction.toUpperCase()}</span>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};


export default ForecastDetails;
