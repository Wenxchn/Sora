import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Signup from './Signup'
import AnimeList from './AnimeList'
import MangaList from './MangaList'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Homepage />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/myanime'>
                    <AnimeList />
                </Route>
                <Route path='/mymanga'>
                    <MangaList />
                </Route>
            </Switch>
        </Router>
    )
}

export default App