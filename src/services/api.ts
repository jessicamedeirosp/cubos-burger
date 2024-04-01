import axios from "axios";

export default axios.create({
  baseURL: "https://puce-alert-cygnet.cyclic.app",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
