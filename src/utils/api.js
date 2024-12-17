import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2Y3MzdlOWJjYTM0YTQwNWNhMWZmODNiM2E1NjU0NCIsIm5iZiI6MTczNDE4NDEwMi43MDQsInN1YiI6IjY3NWQ4Y2E2NzNlOTU3YTAxYTg3ZTEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wWKUxmLtUp0_jSpS3NqacVXN62hOr1ni1Bc08lK0FrE",
  },
});

export default api;
