import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Games from './screens/games/Games'
import ScreenTwo from './components/screen-two/ScreenTwo'
import ScreenThree from './components/screen-three/ScreenThree'


const ScreenSwitchboard = () => (
  <Switch>
    <Route path="/screen-three">
      <ScreenThree />
    </Route>
    <Route path="/screen-two">
      <ScreenTwo />
    </Route>
    <Route path="/games">
      <Games />
    </Route>
    <Route exact path="/">
      <Games />
    </Route>
  </Switch>
)

export default ScreenSwitchboard
