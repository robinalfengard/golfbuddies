import axios from "axios";

const USER_REST_API_URL = "http://localhost:8085/api/playad/";

class PlayAdService {
  registerPlayAd(playAd) {
    return axios.post(USER_REST_API_URL + "register", playAd);
  }

  getPlayAds() {
    return axios.get(USER_REST_API_URL);
  }

  updatePlayAd(id, user) {
    console.log(user);
    return axios.put(USER_REST_API_URL + id + "/" + user);
  }
}

export default new PlayAdService();
