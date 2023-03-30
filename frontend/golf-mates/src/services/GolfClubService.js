import axios from "axios";

const USER_REST_API_URL = "http://localhost:8085/api/golfclub/";

class GolfClubService {
  getGolfClubs(id) {
    return axios.get(USER_REST_API_URL + id);
  }
}

export default new GolfClubService();
