import axios from "axios";

export const instance = axios.create({
  // baseURL: 'http://127.0.0.1:8080/api',
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const imageUrl = "https://storage.googleapis.com/omz-bucket/";

export // 음악추천 api Django Url
const djInstance = axios.create({
  // baseURL: "http://localhosst:8000",
  baseURL: "http://127.0.0.1:8000/django",
  headers: { "Content-Type": "application/json" },
});
