import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import BookUser from "./components/BookUser";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>  {/* authentication route */}
        <Route path='/register' element={<Signup />}/> {/* authentication route */}
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/profile/:id' element={<Profile />}/>
        <Route path='/book/:user' element={<BookUser />}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </div>
  );
}

export default App;
