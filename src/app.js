import './style/sass/main.scss';
import 'materialize-css/dist/css/materialize.min.css';

import uiFactory from './components/dom/main.dom';

import getWeatherFactory from './components/api/get_weather_data';

const cityData = getWeatherFactory();
const ui = uiFactory();

cityData.getData('London');
const faren = document.querySelector('.far');
const celsius = document.querySelector('.cel');
const search = document.querySelector('.white-block');

document.addEventListener('click', (event) => {
  const city = document.querySelector('.loc-info').innerHTML.split()[0];
  const node = event.target;
  if (node.matches('.cel')) {
    if (!node.matches('.active')) {
      cityData.getData(city, true);
      setTimeout(() => {
        ui.activeTempToggle(node, faren);
      }, 300);
    }
  } else if (node.matches('.far')) {
    if (!node.matches('.active')) {
      cityData.getData(city, true, 'imperial');
      setTimeout(() => {
        ui.activeTempToggle(node, celsius);
      }, 300);
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
