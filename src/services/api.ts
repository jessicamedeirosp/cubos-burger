import axios from "axios";

export default axios.create({
  baseURL: "https://puce-alert-cygnet.cyclic.app",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
