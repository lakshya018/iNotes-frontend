import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import NoteState from "./context/notes/NoteState";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Notes from './component/Notes/Notes';
import Account from './component/Account/Account';
import Footer from './component/Footer/Footer';

const App = () => {


  return (
    <div className="App">
      <NoteState>

        <Routes>

          <Route path="/" element={<Navbar />}>

            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="notes" element={<Notes />} />
            <Route path="account" element={<Account />} />
          </Route>

        </Routes>
        <Footer />
      </NoteState>
    </div>

  );
}

export default App;
