import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


export default class App extends Component {


  render() {
    return (
      <>
        <Navbar />
        <Router>
          <Switch>
            <Route path="/business">
              <News pageSize={6} country={"in"} topic={"top-headlines"} category={"business"} /></Route>
            <Route path="/entertainment">
              <News pageSize={6} country={"in"} topic={"top-headlines"} category={"entertainment"} /></Route>
            <Route path="/general">
              <News pageSize={6} country={"in"} topic={"top-headlines"} category={"general"} /></Route>
            <Route path="/health">
              <News pageSize={6} country={"in"} topic={"top-headlines"} category={"health"} /></Route>
            <Route path="/science">
              <News pageSize={6} country={"in"} topic={"top-headlines"} category={"science"} /></Route>
            <Route path="/sports">
              <News pageSize={6} country={"in"} topic={"top-headlines"} category={"sports"} /></Route>
            <Route path="/technology">
              <News pageSize={6} country={"in"} topic={"top-headlines"} category={"technology"} /></Route>

          </Switch>
        </Router>

      </>
    )
  }
}

