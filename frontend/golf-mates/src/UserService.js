import axios from "axios";

const USER_REST_API_URL = "http://localhost:8085/users";

class UserService {
  // getBooks() {
  //   return axios.get(BOOK_REST_API_URL);
  // }

  // getBook(id) {
  //   return axios.get(BOOK_REST_API_URL + "/" + id);
  // }

  // deleteBook(id) {
  //   return axios.delete(BOOK_REST_API_URL + "/" + id);
  // }

  addUser(user) {
    return axios.post(USER_REST_API_URL + "/add", user);
  }

  // updateBook(book, bookId) {
  //   return axios.put(BOOK_REST_API_URL  bookId, book);
  // }
}

export default new UserService();
