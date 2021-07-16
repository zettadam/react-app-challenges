import React from 'react'

import BoardGameList from './components/BoardGameList'


const BoardGames = ({}) => {
  return (
    <main className="app--screen screen--games screen--boardgames">
      <h2>Board Games</h2>
      <BoardGameList />
    </main>
  )
}

export default BoardGames