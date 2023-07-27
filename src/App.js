import React, { useState, useEffect } from "react";
import AnimationOnLoad from "./components/AnimationOnLoad";

function App() {
  const [loading, setLoading] = useState(true);
  const [touched, setTouched] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // useEffect(() => {
  //   var timer = setInterval(() => {
  //     while (touched) {
  //       setSeconds(seconds + 1);
  //     }
  //   }, 1000);
  //   return () => clearInterval(timer);
  // });
  // useEffect(() => {
  //   if (seconds === 4) {
  //     setLoading(false);
  //   } else setLoading(true);
  // }, [seconds]);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     if (touched) {
  //       setLoading(false);
  //     }
  //     return clearInterval();
  //   }, 4000);
  //   setInterval(() => {
  //     if (!touched) {
  //       setLoading(true);
  //     }
  //     return clearTimeout();
  //   }, 1000);
  // }, [touched]);

  return (
    <>
      {loading ? (
        <AnimationOnLoad touched={touched} setTouched={setTouched} />
      ) : (
        <h1 className="text-3xl font-bold underline bg-red-300">
          Hello world!
        </h1>
      )}
    </>
  );
}

export default App;
