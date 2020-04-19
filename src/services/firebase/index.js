import service from "./service";
export default {
  getCoordinates() {
    return service.getCoordinates().then((dataList) => {
      let spots = dataList
        .filter((data) => data.lastSteps)
        .map((data) => data.lastSteps)
        .reduce((a, b) => a.concat(b), []);

      let clumping = [
        {
          center: {
            lat: -22.9228481,
            lng: -43.54955,
          },
          radius: 60,
        },
      ];
      return {
        spots,
        clumping,
      };
    });
  },
  add() {
    return service.add();
  },
};
