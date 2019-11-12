import './style/sass/main.scss';
import 'materialize-css/dist/css/materialize.min.css';

import uiFactory from './components/dom/main.dom';

import getWeatherFactory from './components/api/get_weather_data';

const cityData = getWeatherFactory();
const ui = uiFactory();

cityData.getData('London');
const faren = document.querySelector('.far');
const celsius = document.querySelector('.cel');
document.addEventListener('click', (event) => {
  const node = event.target;
  if (node.matches('.cel')) {
    ui.activeTempToggle(node, faren);
  } else if (node.matches('.far')) {
    ui.activeTempToggle(node, celsius);
  }
}, false);

// console.log(data);
