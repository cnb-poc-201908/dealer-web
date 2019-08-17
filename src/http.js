import axios from 'axios'

export default {
  DATA_URL: "http://bmwpoc.cdkapps.cn:30090",
  getConfirm(id) {
    return axios.get(`${this.DATA_URL}/order/orders/unconfirmed?dealerId=${id}`);
  },
  sendConfirm(id, data) {
    return axios.post(`${this.DATA_URL}/order/orders/unconfirmed?dealerId=${id}`, data);
  }
}
