import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimationOnLoad from "./components/AnimationOnLoad";
import Navigation from "./components/navigation/Navigation";
import SearchContextProvider from "./context/SearchContext";
// import PageTransition from "./components/PageTransition";
const Home = lazy(() => import("./routes/Home"));
const Profile = lazy(() => import("./routes/Profile"));
const Search = lazy(() => import("./routes/Search"));
const Post = lazy(() => import("./routes/Post"));
const Signin = lazy(() => import("./routes/Signin"));
const Signup = lazy(() => import("./routes/Signup"));
const UserProfile = lazy(() => import("./routes/UserProfile"));
// const Notifications = lazy(() => import("./routes/Notifications"));
// const Comments = lazy(() => import("./routes/Comments"));

function App() {
  const location = useLocation();

  /*  Loading Animation's State  */
  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState(false);
  const [time, setTime] = useState(0);

  /*  Loading Animation's Function  */
  // useEffect(() => {
  //   let interval = null;

  //   if (touched) {
  //     interval = setInterval(() => {
  //       setTime((prevTime) => prevTime + 100);
  //       if (time >= 2000) {
  //         setLoading(false);
  //       }
  //     }, 100);
  //   } else {
  //     setTime(0);
  //     setLoading(true);
  //     clearInterval(interval);
  //   }

  //   return () => clearInterval(interval);
  // }, [touched, time]);

  return (
    <>
      {loading ? (
        <AnimationOnLoad touched={touched} setTouched={setTouched} />
      ) : (
        <>
          <SearchContextProvider>
            <Navigation />

            <AnimatePresence initial={true}>
              <Routes location={location} key={location.pathName}>
                {/* Home */}
                <Route
                  path="/"
                  element={
                    <Suspense>
                      <Home />
                    </Suspense>
                  }
                />
                {/* Profile */}
                <Route
                  path="/profile"
                  element={
                    <Suspense>
                      <Profile />
                    </Suspense>
                  }
                />
                {/* User Profile */}
                <Route
                  path="/profile/:id"
                  element={
                    <Suspense>
                      <UserProfile />
                    </Suspense>
                  }
                />
                {/* Search */}
                <Route
                  path="/search"
                  element={
                    <Suspense>
                      <Search />
                    </Suspense>
                  }
                />
                {/* Post */}
                <Route
                  path="/post"
                  element={
                    <Suspense>
                      <Post />
                    </Suspense>
                  }
                />
                {/* Sign In */}
                <Route
                  path="/signin"
                  element={
                    <Suspense>
                      <Signin />
                    </Suspense>
                  }
                />
                {/* Sign Up */}
                <Route
                  path="/signup"
                  element={
                    <Suspense>
                      <Signup />
                    </Suspense>
                  }
                />
                {/* <Route
                  path="/comments/:id"
                  element={
                    <Suspense>
                      <Comments />
                    </Suspense>
                  }
                /> */}
                {/* <Route
                  path="/notifications"
                  element={
                    <Suspense>
                      <Notifications />
                    </Suspense>
                  }
                /> */}
              </Routes>
            </AnimatePresence>
          </SearchContextProvider>
        </>
      )}
    </>
  );
}

export default App;
