import axios from "axios";

const USER_REST_API_URL = "http://localhost:8085/users/";

class UserService {
  registerUser(user) {
    return axios.post(USER_REST_API_URL + "register", user);
  }

  getUserInfoByUsername(username){
    const obj = axios.get(USER_REST_API_URL + username + "/info"); 

  }




}


export default new UserService();
