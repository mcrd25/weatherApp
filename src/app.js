import './style/sass/main.scss';
import 'materialize-css/dist/css/materialize.min.css';

import uiFactory from './components/dom/main.dom';
import { convertFarToCel, convertCelToFar } from './components/logic/helpers';

import getWeatherFactory from './components/api/get_weather_data';

const cityData = getWeatherFactory();
const ui = uiFactory();

cityData.getData('London');
const faren = document.querySelector('.far');
const celsius = document.querySelector('.cel');
const search = document.querySelector('.white-block');

document.addEventListener('click', (event) => {
  const value = document.querySelector('.value').innerHTML;
  const node = event.target;
  if (node.matches('.cel')) {
    if (!node.matches('.active')) {
      ui.updateTemp(convertFarToCel(value));
      ui.activeTempToggle(node, faren);
    }
  } else if (node.matches('.far')) {
    if (!node.matches('.active')) {
      ui.updateTemp(convertCelToFar(value));
      ui.activeTempToggle(node, celsius);
    }
  } else if (node.matches('#go_btn')) {
    const city = document.querySelector('#city').value;
    cityData.getData(city);
  } else if (node.matches('#search_icon') || node.matches('#search')) {
    const icon = document.querySelector('#search_icon');
    icon.innerHTML = icon.innerHTML === 'search' ? 'close' : 'search';
    search.style.display = search.style.display === 'block' ? 'none' : 'block';
  }
}, false);
