import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const { lat, lon } = cityData.city.coord;
    const temps = fieldValues(cityData.list, 'temp');
    const pressures = fieldValues(cityData.list, 'pressure');
    const humidities = fieldValues(cityData.list, 'humidity');
    return (
      <tr key={name}>
        <td className="city"><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    )
  }
}

const fieldValues = (list, fieldName) => list.map(i => i.main[fieldName]);

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
