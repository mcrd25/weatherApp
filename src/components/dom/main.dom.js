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
  
  // const updateIcon = (icon) => {
  //   const icon = document.query
  // };

  return {
    updateLocation,
    changeImage,
    updateDateTime,
  };
};

export default uiFactory;
