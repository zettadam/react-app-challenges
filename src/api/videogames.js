const BASE_API_URL = 'http://localhost:5000/videogames'

export const getVideoGames = () =>
  fetch(`${BASE_API_URL}`)
    .then(res => res.json())
    .catch(err => err)

export const getVideoGame = id =>
  fetch(`${BASE_API_URL}/${id}`)
    .then(res => res.json())
    .catch(err => err)

export const findVideoGames = query =>
  fetch(`${BASE_API_URL}/find/${query}`)
    .then(res => res.json())
    .catch(err => err)