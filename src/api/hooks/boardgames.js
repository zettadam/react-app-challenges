import { useQuery } from 'react-query'
import { getBoardGame, getBoardGames, findBoardGames } from '../boardgames'

export const useBoardGames = () =>
  useQuery('boardgames', getBoardGames)

export const useBoardGame = (id) =>
  useQuery(['boardgames', id], () => getBoardGame(id))

export const useFindBoardGames = (query) =>
  useQuery(['boardgames-found', query], () => findBoardGames(query))