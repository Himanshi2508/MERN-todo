import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/?",
});

export default instance;

//benefit of axios is this it converts all the data into json