import axios from "axios";

export const api = axios.create({
  baseURL: "http://ec2-52-91-5-122.compute-1.amazonaws.com:8000",
});