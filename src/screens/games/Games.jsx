import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'

import BoardGames from './BoardGames'
import BoardGameDetails from './BoardGameDetails'
import VideoGames from './VideoGames'
import VideoGameDetails from './VideoGameDetails'

import BoardGameList from './components/BoardGameList'
import VideoGameList from './components/VideoGameList'


const Games = ({}) => {
  let { path, url } = useRouteMatch()
  return (
      <Switch>
        <Route exact path={path}>
          <main className="app--screen screen--games">
            <h2>Games</h2>
            <h3><Link to={`${url}/board`}>Board Games</Link></h3>
            <BoardGameList />
            <h3><Link to={`${url}/video`}>Video Games</Link></h3>
            <VideoGameList />
          </main>
        </Route>
        <Route path={`${path}/board/:id`}>
          <BoardGameDetails/>
        </Route>
        <Route path={`${path}/board`}>
          <BoardGames />
        </Route>
        <Route path={`${path}/video/:id`}>
          <VideoGameDetails/>
        </Route>
        <Route path={`${path}/video`}>
          <VideoGames />
        </Route>
      </Switch>
  )
}

export default Games
