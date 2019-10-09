import './style/sass/main.scss';
import 'materialize-css/dist/css/materialize.min.css';

import weatherFactory from './components/api/get_weather_data';

const cityData = weatherFactory('London');

cityData.getData();

// console.log(data);
