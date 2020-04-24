import service from "./service";
export default {
  getCoordinates() {
    return service.getCoordinates().then((dataList) => {
      let spots = dataList
        .filter((data) => data.lastSteps)
        .map((data) => data.lastSteps)
        .reduce((a, b) => a.concat(b), []);

      let suspicions = dataList
        .filter((data) => "infected" in data && !data.infected)
        .map((data) => data.local);

      let clumping = [
        {
          lat: -22.9228481,
          lng: -43.54955,
        },
      ];
      return {
        suspicions,
        spots,
        clumping,
      };
    });
  },
  add({ lat, lng }) {
    return service.add({ lat, lng });
  },
};
