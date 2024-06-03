import axios from "axios";
// import { store } from "../redux/store"; // Import your Redux store

const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    // Add any other common headers here
  },
});

// // Add a request interceptor
// authApi.interceptors.request.use(
//   (config) => {
//     const state = store.getState();
//     const authToken = state.auth.user._token; // Adjust this based on your Redux store structure
//     if (authToken) {
//       config.headers.Authorization = `Bearer ${authToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default authApi;
