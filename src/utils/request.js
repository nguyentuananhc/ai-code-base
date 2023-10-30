import axios from "axios";
// import store from "@redux/store";

const request = axios.create({
  baseURL: process.env.API_ENDPOINT,
  timeout: 5000,
  // headers: {
  //   'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Add any custom headers you need
  //   'Content-Type': 'application/json', // Example content type
  // },
  // params: {
  //   // Define default parameters to be sent with every request
  //   param1: 'value1',
  //   param2: 'value2',
  // },
});

// customAxios.interceptors.request.use((config) => {
//   store.dispatch(fetchDataStart()); // Dispatch the loading action before the request
//   return config;
// });

request.interceptors.response.use(
  (response) => {
    // store.dispatch(fetchDataSuccess(response.data)); // Dispatch success action on response
    return response;
  },
  (error) => {
    // store.dispatch(fetchDataFailure(error.message));
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    return Promise.reject(error);
  }
);

export default request;
