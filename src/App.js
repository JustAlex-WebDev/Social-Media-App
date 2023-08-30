import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimationOnLoad from "./components/AnimationOnLoad";
import Navigation from "./components/navigation/Navigation";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Search from "./routes/Search";
import Post from "./routes/Post";
import Notifications from "./routes/Notifications";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import UserProfile from "./routes/UserProfile";
import Comments from "./routes/Comments";

function App() {
  const location = useLocation();

  /*  Loading Animation's State  */
  const [loading, setLoading] = useState(true);
  const [touched, setTouched] = useState(false);
  const [time, setTime] = useState(0);

  /*  Loading Animation's Function  */
  useEffect(() => {
    let interval = null;

    if (touched) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
        if (time >= 3000) {
          setLoading(false);
        }
      }, 100);
    } else {
      setTime(0);
      setLoading(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [touched, time]);

  return (
    <>
      {loading ? (
        <AnimationOnLoad touched={touched} setTouched={setTouched} />
      ) : (
        <>
          <Navigation />

          <AnimatePresence initial={true}>
            <Routes location={location} key={location.pathName}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:id" element={<UserProfile />} />
              <Route path="/comments/:id" element={<Comments />} />
              <Route path="/search" element={<Search />} />
              <Route path="/post" element={<Post />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
