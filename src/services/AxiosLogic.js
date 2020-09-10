import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getLabels() {
    return apiClient.get('/labels')
  },
  postLabel(label) {
    return apiClient.post('/labels', label)
  },
  deleteLabel(id) {
    return apiClient.delete('/labels/' + id)
  }
}
