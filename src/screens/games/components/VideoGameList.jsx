import React from 'react'
import { Link } from 'react-router-dom'

import { useVideoGames } from '~/api/hooks/videogames'


const VideoGameList = () => {
  const {
    data,
    error,
    isLoading,
    isError
  } = useVideoGames()

  if (isLoading) {
    return <p>Loading video games</p>
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
    <ul className="videogames--list">
      { data.map(g => (
        <li key={g.id}><Link to={`/games/video/${g.id}`}>{ g.title }</Link></li>
      ))}
    </ul>
  )
}

export default VideoGameList