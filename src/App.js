import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Default from './components/Default/Default';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Default />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/home" element = {<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
