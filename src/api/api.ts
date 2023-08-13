import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2ZkMDBlMzZlODE2Y2ZiOWFhNTVhYWMxM2RkN2ExYSIsInN1YiI6IjVlMDJiZDNhNzUxMTBkMDAxM2RiNzIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.so2POIGKG7HDJi9kreKXwaqEphcxMyU5XIkMkGboGSE'
  }
});
