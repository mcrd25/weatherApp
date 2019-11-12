const uiFactory = () => {
  const updateLocation = (locationText) => {
    const location = document.querySelector('.location');
    location.append(` ${locationText}`);
  };

  const changeImage = (theme) => {
    const image = document.querySelector('.card-img');
    image.src = `https://source.unsplash.com/1600x900/?${theme.split(' ').join('+')}`;
  };

  const updateDateTime = (date) => {
    const dateTime = document.querySelector('.date');
    dateTime.innerHTML = date;
  };
  
  const updateIcon = (iconId) => {
    const icon = document.querySelector('.wicon');
    icon.src = `http://openweathermap.org/img/w/${iconId}.png`;
  };

  const updateTemp = (value) => {
    const temp = document.querySelector('.value');
    temp.innerHTML = value;
  };

  return {
    updateLocation,
    changeImage,
    updateDateTime,
    updateIcon,
    updateTemp,
  };
};

export default uiFactory;
