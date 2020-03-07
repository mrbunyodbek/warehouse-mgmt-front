import axios from 'axios'
const API_URL = 'http://localhost:8085'
export class DocumentHandler {
  constructor() {
  }
  postPayment(payment) {
    const url = API_URL + '/payments/save'
    return axios.post(url, payment)
  }
}
