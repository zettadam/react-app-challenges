import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { useBoardGame } from '~/api/hooks/boardgames'

const BoardGameDetails = () => {
  const { id } = useParams()

  const {
    data,
    error,
    isFetching,
    status
  } = useBoardGame(id)

  return (
    <main className="app--screen screen--games screen--boardgames screen--detail">
      {!id || status === 'loading' ? (
        <>
          <h3><Link to="/games/board">Board Games</Link></h3>
          <p>Loading board game details...</p>
        </>
      ) : status === 'error' ? (
        <>
          <h3><Link to="/games/board">Board Games</Link></h3>
          <p>Error: { error.message }</p>
        </>
      ) : (
        <>
          <h2>{ data.title }</h2>
          <h3><Link to="/games/board">Board Games</Link></h3>
          { isFetching ? <p>Updating...</p> : '' }
        </>
      )}
    </main>
  )
}

export default BoardGameDetails