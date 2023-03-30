import axios from "axios";

const USER_REST_API_URL = "http://localhost:8085/users";

class UserService {
  registerUser(user) {
    return axios.post(USER_REST_API_URL + "/register", user);
  }
}

export default new UserService();
