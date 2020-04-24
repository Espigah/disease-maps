export default {
  watchPosition(onSuccess, onError) {
    const option = {
      enableHighAccuracy: true,
      maximumAge: 1,
      timeout: 100,
    };
    const successHandler = ({ coords }) => {
      onSuccess(coords);
    };

    navigator.geolocation.getCurrentPosition(successHandler, onError, option);
    // navigator.geolocation.watchPosition(successHandler, onError, option);
  },
};
//Everytime you call getCurrentLocation the gps is spun up which takes a few moments. If you call watchPosition and wait until you get a certain accuracy, then remove your watch you will have better results, without the overhead of a constant watch.
