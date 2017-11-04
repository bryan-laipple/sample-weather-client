import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

const hPaToInHg = hPa => (0.02953 * hPa);
const kelvinToFehrenheit = K => ((9/5) * kelvinToCelsius(K)) + 32;
const kelvinToCelsius = K => (K - 273);

const tempUnits = {
  conversionFn: kelvinToFehrenheit,
  label: '°F'
};

const pressureUnits = {
  conversionFn: hPaToInHg,
  label: 'inHg'
};

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Avg. Temperature ({tempUnits.label})</th>
            <th>Avg. Pressure ({pressureUnits.label})</th>
            <th>Avg. Humidity (%)</th>
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
    const temps = fieldValues(cityData.list, 'temp', tempUnits.conversionFn);
    const pressures = fieldValues(cityData.list, 'pressure', pressureUnits.conversionFn);
    const humidities = fieldValues(cityData.list, 'humidity');
    return (
      <tr key={name}>
        <td className="city"><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color="orange" units={tempUnits.label} /></td>
        <td><Chart data={pressures} color="green" units={pressureUnits.label} /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    )
  }
}

const fieldValues = (list, fieldName, conversionFn = (v => v)) => list.map(i => i.main[fieldName]).map(conversionFn);

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
