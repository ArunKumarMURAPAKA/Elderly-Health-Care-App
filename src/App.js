import './App.css';
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom";
import {Home} from "./pages/Home";
import {Prescription} from "./pages/Prescription";
import {User} from "./pages/User"

function App() {
  return (
    <div className="App" >
      <h1 style={{margin:"0px",backgroundColor:"#FFB2FA", padding:"2rem" , fontSize:"4rem",fontFamily:"Roboto Mono , monospace"}}>Arogya</h1>

      <Router>
        <Link to = "/" style={{fontSize : "2rem" ,margin : "2rem", textDecoration:"none"}}>Home </Link>
        <Link to = "/Prescription" style={{fontSize : "2rem" ,margin : "2rem", textDecoration:"none"}}>Prescription </Link>
        <Link to = "/User" style={{fontSize : "2rem" ,margin : "2rem", textDecoration:"none"}}>Profile</Link>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/Prescription" element={<Prescription/>}/>
          <Route path ="/User" element = {<User/>}/>
          
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
