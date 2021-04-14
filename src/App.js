
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login'


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
