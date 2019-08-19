import axios from 'axios'

export default {
  DATA_URL: "http://bmwpoc.cdkapps.cn:30090",
  getConfirm(id) {
    return axios.get(`${this.DATA_URL}/order/orders/unconfirmed?dealerId=${id}`);
  },

  setStatus(status, data) {
    return axios.put(`${this.DATA_URL}/order/orders/status/change/${status}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
  getUnPaid(id) {
    return axios.get(`${this.DATA_URL}/order/orders/unpaid?dealerId=${id}`);
  },
  getPull(id) {
    return axios.get(`${this.DATA_URL}/order/orders/remains?dealerId=${id}`);
  },
  getPaid(id) {
    return axios.get(`${this.DATA_URL}/order/orders/paid?dealerId=${id}`);
  },
}
