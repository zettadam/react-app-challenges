import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { useVideoGame } from '~/api/hooks/videogames'

const VideoGameDetails = () => {
  const { id } = useParams()
  
  const {
    data,
    error,
    isFetching,
    status
  } = useVideoGame(id)

  return (
    <main className="app--screen screen--games screen--videogames screen--detail">
      {!id || status === 'loading' ? (
        <>
          <h3><Link to="/games/video">Video Games</Link></h3>
          <p>Loading video game details...</p>
        </>
      ) : status === 'error' ? (
        <>
          <h3><Link to="/games/video">Video Games</Link></h3>
          <p>Error: { error.message }</p>
        </>
      ) : (
        <>
          <h2>{ data.title }</h2>
          <h3><Link to="/games/video">Video Games</Link></h3>
          { isFetching ? <p>Updating...</p> : '' }
        </>
      )}
    </main>
  )
}

export default VideoGameDetails