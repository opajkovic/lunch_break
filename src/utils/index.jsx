import axios from "axios"
const url = import.meta.env.VITE_BACKEND_URL

export const apiCall = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer 81|pgWgnHs6oKKhF2872qxky9nhuUGxz0sl6Y9P8jW305a64e01"
    },
  }) 