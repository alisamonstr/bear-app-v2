import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Main, Catalogue } from './routes'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {/*<Link to="/">Home</Link>*/}
          {/*<Link to="/catalogue">Catalogue</Link>*/}
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/catalogue" exact component={Catalogue}/>
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App
