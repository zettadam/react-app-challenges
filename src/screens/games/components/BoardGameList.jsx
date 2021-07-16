import React from 'react'
import { Link } from 'react-router-dom'

import { useBoardGames } from '~/api/hooks/boardgames'


const BoardGameList = () => {
  const {
    data,
    error,
    isLoading,
    isError
  } = useBoardGames()

  if (isLoading) {
    return <p>Loading board games</p>
  }

  if (isError) {
    return (
      <div className="message message--error">
        <h3>Error</h3>
        <p>{ error.message }</p>
      </div>
    )
  }

  return (
    <ul className="boardgames--list">
      { data.map(g => (
        <li key={g.id}><Link to={`/games/board/${g.id}`}>{ g.title }</Link></li>
      ))}
    </ul>
  )
}

export default BoardGameList