// File: src/services/newsApi.js
import axios from "axios";

const API_KEY = "7182750eeb4d47e2aaf21947b26f2daf";
const BASE_URL = "https://newsapi.org/v2";

export function getTopHeadlines(category, page = 1) {
  return axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      apiKey: API_KEY,
      category,
      page,
      pageSize: 10,
    },
  });
}

export function searchArticles(query, sortBy = "publishedAt", page = 1) {
  return axios.get(`${BASE_URL}/everything`, {
    params: {
      apiKey: API_KEY,
      q: query,
      sortBy,
      page,
      pageSize: 10,
    },
  });
}
