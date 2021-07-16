const BASE_API_URL = 'http://localhost:5000/boardgames'

export const getBoardGames = () =>
  fetch(`${BASE_API_URL}`)
    .then(res => res.json())
    .catch(err => err)

export const getBoardGame = id =>
  fetch(`${BASE_API_URL}/${id}`)
    .then(res => res.json())
    .catch(err => err)

export const findBoardGames = query =>
  fetch(`${BASE_API_URL}/find/${query}`)
    .then(res => res.json())
    .catch(err => err)