
const axios = require('axios');

export const apiURL = "https://rickandmortyapi.com/api/"

export const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/'
})

