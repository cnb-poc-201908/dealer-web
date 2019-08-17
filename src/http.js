import axios from 'axios'

export default {
  DATA_URL: "http://bmwpoc.cdkapps.cn:30090",
  getData(id) {
    return axios.get(`${this.DATA_URL}/order/orders/unconfirmed?dealerId=${id}`);
  },
  getDetail(id) {
    return axios.get(`${this.DATA_URL}`);
  }
}
