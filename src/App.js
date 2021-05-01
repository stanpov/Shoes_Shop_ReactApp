import React,{useContext} from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register'
import {AuthContext} from './globalContext/AuthContext';
import MenShoes from './components/MenShoes/MenShoes';
import MenCasualShoes from './components/MenCasualShoes/MenCasualShoes';
import Basket from './components/Basket/Basket';
import History from './components/History/History';
import Favorites from './components/Favorites/Favorites';
import WomenShoes from './components/WomenShoes/WomenShoes'
import KidsShoes from './components/KidsShoes/KidsShoes';
import HotSales from './components/HotSales/HotSales';
import WomenCasual from './components/WomenCasual/WomenCasual';
import ManRunning from './components/ManRunning/ManRunning';
import MenFormal from './components/MenFormal/MenFormal';
import WomenRunning from './components/WomenRunning/WomenRunning';
import WomenFormal from './components/WomenFormal/WomenFormal';
import KidsBoysShoes from './components/KidsBoysShoes/KidsBoysShoes';
import KidsGirlShoes from './components/KidsGirlShoes/KidsGirlShoes';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Terms from './components/Terms/Terms';
import GlobalErrorBoundary from './globalContext/GlobalErrorBoundary';
import WrongAddress from './components/WrongAddress/WrongAddress'
import ProtectedRoute from './hooks/isAuth'


function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
    <GlobalErrorBoundary>
    <Router>
    <div className="App">
      <Header />
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        {/* <Route path="/upload" exact component={UploadForm} /> */}
        <Route path='/register' exact component={Register} />
        <Route path='/men' exact component={MenShoes} />
        <ProtectedRoute path='/men/casual' exact component={MenCasualShoes} isAuth={user} />
        <ProtectedRoute path='/myorder' exact component={Basket} isAuth={user} />
        <ProtectedRoute path='/history' exact component={History} isAuth={user} />
        <ProtectedRoute path='/favorites' exact component={Favorites} isAuth={user} />
        <Route path='/women' exact component={WomenShoes} />
        <Route path='/kids' exact component={KidsShoes} />
        <ProtectedRoute path='/hotsale' exact component={HotSales} isAuth={user} />
        <ProtectedRoute path='/women/casual' exact component={WomenCasual} isAuth={user} />
        <ProtectedRoute path='/men/running' exact component={ManRunning} isAuth={user} />
        <ProtectedRoute path='/men/formal' exact component={MenFormal} isAuth={user} />
        <ProtectedRoute path='/women/running' exact component={WomenRunning} isAuth={user} />
        <ProtectedRoute path='/women/formal' exact component={WomenFormal} isAuth={user} />
        <ProtectedRoute path='/kids/boys' exact component={KidsBoysShoes} isAuth={user} />
        <ProtectedRoute path='/kids/girl' exact component={KidsGirlShoes}  isAuth={user}/>
        <Route path='/about' exact component={About} />
        <Route path='/contacts' exact component={Contacts} />
        <Route path='/terms' exact component={Terms} />
        <Route path="*" component={WrongAddress} />
      </Switch>
      
      <Footer />
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
    </div>
    </Router>
    </GlobalErrorBoundary>
    </>
  );
}

export default App;
