import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:5000/workout",
  withCredentials: true,
});

export default apiRequest;
