import axios from "axios";

const instance = axios.create()

instance.defaults.baseURL = 'http://43.142.95.160:28019/p-cloud/v1'

instance.interceptors.response.use(response => {
  if (response.data.resultCode === 200) {
    return response.data.data
  }
  throw new Error(response.data.message)
})

export default instance