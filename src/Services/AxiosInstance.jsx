import axios from "axios";

import cookie from 'js-cookie'

const yourAccessToken = cookie.get('authToken');

const instance  = axios.create({
    baseURL: 'http://localhost:4743/',
    headers: {
      'Authorization': `Bearer ${yourAccessToken}`,
      'Content-Type': 'application/json',
    },
})

export default instance