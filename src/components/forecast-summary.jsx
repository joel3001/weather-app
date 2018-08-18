import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';
import '../styles/forecast-summary__icon.scss';

const ForecastSummary = props => (
  <div>
    <div className="forecast-summary__date"><span>Date: {moment(props.date).format('ddd Do MMM')}</span></div><br />
    <div className="forecast-summary__temperature"><span>Temp: {props.temperature} &#x2103;</span></div><br />
    <div className="forecast-summary__description"><span>Weather: {props.description}</span></div><br />
    <div className="forecast-summary__icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>
    <br />
    <button onClick={() => props.onSelect(props.date)}>More Details</button>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

export default ForecastSummary;
