import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Dashboard from './pages/Dashboard'
import Login from "./pages/account/Login";
import RegisterAccount from "./pages/account/Register";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/account/login' element={<Login />} />
        <Route path='/account/register' element={<RegisterAccount />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
