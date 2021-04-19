
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import UploadForm from './components/UploadForm/UploadForm';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register'
import {AuthState} from './globalContext/AuthContext';
import MenShoes from './components/MenShoes/MenShoes';
import MenCasualShoes from './components/MenCasualShoes/MenCasualShoes'


function App() {
  return (
    <AuthState>
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/upload" exact component={UploadForm} />
        <Route path='/register' exact component={Register} />
        <Route path='/men' exact component={MenShoes} />
        <Route path='/men/casual' exact component={MenCasualShoes} />
      </Switch>
      <Footer />
    </div>
    </Router>
    </AuthState>
  );
}

export default App;
