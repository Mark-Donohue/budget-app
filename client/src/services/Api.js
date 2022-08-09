import axios from 'axios'

// Register back-end URI
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
