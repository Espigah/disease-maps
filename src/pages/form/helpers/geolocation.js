export default {
  watchPosition(onSuccess, onError) {
    navigator.geolocation.watchPosition(
      (position) => {
        onSuccess(position.coords);
      },
      onError,
      {
        enableHighAccuracy: true,
        maximumAge: 500,
        timeout: 500,
      }
    );
  },
};
