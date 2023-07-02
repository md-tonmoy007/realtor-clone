import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
