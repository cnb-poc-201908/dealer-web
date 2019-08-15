import axios from 'axios'

export default {
  DATA_URL: "https://randomuser.me/api/",
  getData() {
    return axios.get(`${this.DATA_URL}/?results=50`);
  },
  getDetail(id) {
    return axios.get(`${this.DATA_URL}`);
  }
}
