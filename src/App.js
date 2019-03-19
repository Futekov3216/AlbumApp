import React from 'react'
import './app.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

import List from './components/List/List'
import Favorites from './components/Favorites/Favorites'
import Singlealbum from './components/Singlealbum/Singlealbum'

export default function App(props) {
  return (
    <Router>
      <div className="page-container">
        <Route exact path="/" component={List} />
        <Route path="/Favorites" component={Favorites} />
        <Route path="/Card/:id" component={Singlealbum}/>
      </div>
    </Router>
  )
}

