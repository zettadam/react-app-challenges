import { useQuery } from 'react-query'
import { getVideoGame, getVideoGames, findVideoGames } from '../videogames'

export const useVideoGames = () =>
  useQuery('videogames', getVideoGames)

export const useVideoGame = (id) =>
  useQuery(['videogames', id], () => getVideoGame(id))

export const useFindVideoGames = (query) =>
  useQuery(['videogames-found', query], () => findVideoGames(query))