import axios from "axios";

const USER_REST_API_URL = "http://localhost:8085/api/playad/";

class PlayAdService {
  registerPlayAd(playAd) {
    return axios.post(USER_REST_API_URL + "register", playAd);
  }

  getPlayAds() {
    return axios.get(USER_REST_API_URL);
  }
}

export default new PlayAdService();
