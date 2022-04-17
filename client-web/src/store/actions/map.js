import axios from "axios";
export function fetchAdress({ lat, lon }) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=eb4656d7c96d4339936375bf8099f864`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };
}
export function fetchRoute({ lat1, lon1, lat2, lon2 }) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.geoapify.com/v1/routing?waypoints=${lat1},${lon1}|${lat2},${lon2}&mode=drive&apiKey=eb4656d7c96d4339936375bf8099f864`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };
}
