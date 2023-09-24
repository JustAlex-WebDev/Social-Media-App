import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimationOnLoad from "./components/AnimationOnLoad";
import Navigation from "./components/navigation/Navigation";
import SearchContextProvider from "./context/SearchContext";
import PageTransition from "./components/PageTransition";
const Home = lazy(() => import("./routes/Home"));
const Profile = lazy(() => import("./routes/Profile"));
const Search = lazy(() => import("./routes/Search"));
const Post = lazy(() => import("./routes/Post"));
const Notifications = lazy(() => import("./routes/Notifications"));
const Signin = lazy(() => import("./routes/Signin"));
const Signup = lazy(() => import("./routes/Signup"));
const UserProfile = lazy(() => import("./routes/UserProfile"));
const Comments = lazy(() => import("./routes/Comments"));

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
                <Route
                  path="/"
                  element={
                    <Suspense
                      fallback={
                        <div className="w-full h-screen flex justify-center items-center animate-pulse text-7xl text-primary font-bold tracking-wider">
                          REV
                        </div>
                      }
                    >
                      <Home />
                    </Suspense>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Suspense
                      fallback={
                        <div className="w-full h-screen flex justify-center items-center animate-pulse text-7xl text-primary font-bold tracking-wider">
                          REV
                        </div>
                      }
                    >
                      <Profile />
                    </Suspense>
                  }
                />
                <Route
                  path="/profile/:id"
                  element={
                    <Suspense
                      fallback={
                        <div className="w-full h-screen flex justify-center items-center animate-pulse text-7xl text-primary font-bold tracking-wider">
                          REV
                        </div>
                      }
                    >
                      <UserProfile />
                    </Suspense>
                  }
                />
                <Route
                  path="/comments/:id"
                  element={
                    <Suspense
                      fallback={
                        <div className="w-full h-screen flex justify-center items-center animate-pulse text-7xl text-primary font-bold tracking-wider">
                          REV
                        </div>
                      }
                    >
                      <Comments />
                    </Suspense>
                  }
                />
                <Route
                  path="/search"
                  element={
                    <Suspense
                      fallback={
                        <div className="w-full h-screen flex justify-center items-center animate-pulse text-7xl text-primary font-bold tracking-wider">
                          REV
                        </div>
                      }
                    >
                      <Search />
                    </Suspense>
                  }
                />
                <Route
                  path="/post"
                  element={
                    <Suspense
                      fallback={
                        <div className="w-full h-screen flex justify-center items-center animate-pulse text-7xl text-primary font-bold tracking-wider">
                          REV
                        </div>
                      }
                    >
                      <Post />
                    </Suspense>
                  }
                />
                <Route
                  path="/notifications"
                  element={
                    <Suspense
                      fallback={
                        <div className="w-full h-screen flex justify-center items-center animate-pulse text-7xl text-primary font-bold tracking-wider">
                          REV
                        </div>
                      }
                    >
                      <Notifications />
                    </Suspense>
                  }
                />
                <Route
                  path="/signin"
                  element={
                    <Suspense
                      fallback={
                        <div className="w-full h-screen flex justify-center items-center animate-pulse text-7xl text-primary font-bold tracking-wider">
                          REV
                        </div>
                      }
                    >
                      <Signin />
                    </Suspense>
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <Suspense
                      fallback={
                        <div className="w-full h-screen flex justify-center items-center animate-pulse text-7xl text-primary font-bold tracking-wider">
                          REV
                        </div>
                      }
                    >
                      <Signup />
                    </Suspense>
                  }
                />
              </Routes>
            </AnimatePresence>
          </SearchContextProvider>
        </>
      )}
    </>
  );
}

export default App;
