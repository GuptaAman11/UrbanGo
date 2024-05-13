import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import EmailVerify from "./components/EmailVerify/EmailVerify";



function App() {
  return (
    <div className="App">
      
      
      
      <Router>
      
      
        <Routes>



          <Route path='/login' element={<Login /> } />
          <Route path='/register' element={<SignUp /> } />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />




        </Routes>
      
    </Router>

    </div>
  );
}

export default App;
