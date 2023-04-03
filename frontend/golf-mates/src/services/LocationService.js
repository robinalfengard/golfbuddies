import axios from "axios";

const USER_REST_API_URL = "http://localhost:8085/api/location";

class LocationService {
  getDistricts() {
    return axios.get(USER_REST_API_URL + "/all");
  }
}

export default new LocationService();
