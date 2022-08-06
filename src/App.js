import React, { useState, useEffect} from 'react';
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
import HashLoader from "react-spinners/HashLoader";

const override = {
    display: "block",
    margin: "auto auto",
};

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, [])



  return (
    <div className="App">
      {
        loading ?
        <HashLoader color="#006df0" cssOverride={override} loading={loading} size={50} /> 
        :
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
      }

    </div>

  );
}

export default App;
