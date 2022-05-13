import axios from "axios";

axios.defaults.baseURL = 'https://mpark-moments-drf-api.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.withCredentials = true