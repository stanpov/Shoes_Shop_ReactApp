
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import UploadForm from './components/UploadForm/UploadForm';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/upload" exact component={UploadForm} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
