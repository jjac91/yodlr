import axios from "axios";

const BASE_URL = "http://localhost:3000/users";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 
 *
 */

class YodlrApi {


  // Individual API routes
  // Gets all users
  static async getUsers() {
    let res = await axios.get(`${BASE_URL}`)
    return res.data;
  }
  // Post a new user
  static async postUser(data) {
    let res = await axios.post(`${BASE_URL}`, data, );
    return res;
  }
}

export default YodlrApi