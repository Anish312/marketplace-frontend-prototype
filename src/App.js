import logo from './logo.svg';
import './App.css';
import {BrowserRouter  as Router ,Route ,Routes} from "react-router-dom"
import Login from './screens/login/Login';
import SignUp from './screens/signUp/SignUp';
import Dashboard from './screens/dashboard/Dashboard';
import Console from './screens/console/Console';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from "./store"
import { loadUser } from './actions/userAction';
import Header from './components/header/Header';
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);


  useEffect(() => {

      store.dispatch(loadUser())
 
}, [])
  return (
    <div className="app">
      
      <Router>
              <Header isAuthenticated={isAuthenticated} user={user}/>
              <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/console/:marketplaceId" element={<Console />} />

              <Route path="/signUp" element={<SignUp />} />
              <Route path="/" element={<Dashboard />} />

              </Routes>
         
      </Router>

    </div>
  );
}

export default App;
