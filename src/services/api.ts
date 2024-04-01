import axios from "axios";

export default axios.create({
  baseURL: "https://my-json-server.typicode.com/jessicamedeirosp/cubos-burger/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
