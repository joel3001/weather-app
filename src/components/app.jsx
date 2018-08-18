import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import '../styles/app.scss';
import ForecastDetails from './forecast-details';
import axios from 'axios';
import SearchForm from './search-form';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };

    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.handleCitySelect = this.handleCitySelect.bind(this);

  }

  componentDidMount() {
    axios.get('https://mcr-codes-weather.herokuapp.com/forecast').then(response => {
      this.setState({ forecasts: response.data.forecasts });
      this.setState({ location: response.data.location });
    });
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  handleCitySelect(city) {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`).then(response => {
      this.setState({ forecasts: response.data.forecasts });
      this.setState({ location: response.data.location });
    });
  }

  render() {
    const selectedForecast =
      this.state.forecasts.find(forecast => forecast.date ===
      this.state.selectedDate);

    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm
          onSearch={this.handleCitySelect}
        />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />

        {selectedForecast && <ForecastDetails forecasts={selectedForecast} />}
      </div>
    );
  }
}

export default App;
