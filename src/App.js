import React from 'react'
 
import NewsPage from './pages/NewsPage'
import Navigation from './pages/Navigation'
import Contact from './pages/Contact'
import Error from './pages/Error'
import About from './pages/About'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  


  render() {
    return (
      <React.Fragment>
        <div className="App-header" id="App-header"><h2>Lapo-React-Todo</h2>
    

        </div>
    <BrowserRouter>
        <div >
          <Navigation />
          <Switch>
            <Route path="/" component={NewsPage} exact />
          
            <Route path="/Contact" component={Contact} />

            <Route path="/About" component={About} />
             <Route component={Error} /> 
          </Switch>
        </div>
      </BrowserRouter>
   
      </React.Fragment>
    )
  }
}

export default App;