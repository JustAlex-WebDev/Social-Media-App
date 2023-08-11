import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimationOnLoad from "./components/AnimationOnLoad";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Search from "./routes/Search";
import Notifications from "./routes/Notifications";
import {
  PostModalContext,
  PostModalContextProvider,
} from "./context/PostModalContext";
import PostModal from "./components/PostModal";

function App() {
  const location = useLocation();
  const [postModal, setPostModal] = useState(false);

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
          <PostModalContextProvider>
            <Navigation />
            <PostModal />

            <AnimatePresence initial={false}>
              <Routes location={location} key={location.pathName}>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/notifications" element={<Notifications />} />
              </Routes>
            </AnimatePresence>
          </PostModalContextProvider>
        </>
      )}
    </>
  );
}

export default App;
