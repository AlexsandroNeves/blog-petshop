import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './assets/components/Cabecalho';
import Post from './paginas/Post';
function App() {
  return (
    <>
      <Router>
        <Cabecalho />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sobre'>
            <Sobre />
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>


      </Router>
    </>
  )
}

export default App