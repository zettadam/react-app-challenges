import React from 'react'

import VideoGameList from './components/VideoGameList'


const VideoGames = ({}) => {
  return (
    <main className="app--screen screen--games screen--boardgames">
      <h2>Video Games</h2>
      <VideoGameList />

    </main>
  )
}

export default VideoGames