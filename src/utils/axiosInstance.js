import axios from "axios";

const instance = axios.create({
  baseURL: "https://portal.itscredible.com/api/v1",
});

export default instance;
