import { useEffect, useRef, useState } from "react";
import "./App.css";

function App () {

  const [time, setTime] = useState({hr: 0, min:0, sec:0});

  useEffect(() => {
    return () => clearInterval(id.current);
  },[])

  let id =  useRef();

  function handleTime () {
    id.current =  setInterval(() => {
      setTime((previousSec) => {

        if(previousSec.sec == 60){
          return {...previousSec, min: previousSec.min + 1, sec: 0}
        }
        if(previousSec.min == 60){
          return {...previousSec, hr: previousSec.hr + 1,min: 0, sec: 0}
        }

        return {...previousSec, sec: previousSec.sec + 1}
      }) ;
    }, 1000);
  }

  return (
    <div className="div1">
      <h1 className="time">{time.hr}:{time.min}:{time.sec}</h1>
      <div className="div2">
      <button className="start-btn" onClick={() => handleTime()}>Start</button>
      <button className="pause-btn" onClick={() => clearInterval(id.current)}>Pause</button>
      <button className="reset-btn" onClick={() => {
        clearInterval(id.current);
        setTime({hr: 0, min:0, sec:0})
      }}>Reset</button>
      </div>
    </div>
  )
}

export default App;