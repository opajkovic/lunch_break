import axios from "axios"
const url = import.meta.env.VITE_BACKEND_URL

export const apiCall = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer 19|lIGJSzoAoeeeNj27hxMUmeQoZprxPylm7ZrH3xjm803f824d"
    },
  }) 