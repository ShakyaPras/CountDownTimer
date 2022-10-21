import "./App.css";
import { useState } from "react";
import CountdownTimer from "./timer/CountDownTimer";
import SetTimer from "./timer/SetTimer";
import getMonth from "./support/getMonth";

function App() {
  const [targetDate, setTargetDate] = useState(new Date().getTime());
  const [showSetTimer, setShowSetTimer] = useState(false);

  const targetDateDescription = new Date(targetDate);
  const year = targetDateDescription.getFullYear();
  let month = targetDateDescription.getMonth();
  const day = targetDateDescription.getDate();
  let hour = targetDateDescription.getHours();
  if (hour > 11) hour = hour - 12;
  if (hour === 0) hour = 12;
  const min = targetDateDescription.getMinutes();
  const ampm = targetDateDescription.getHours() < 12 ? "AM" : "PM";

  const handleReset = () => {
    setTargetDate(new Date().getTime());
  };

  const handleShowTimer = () => {
    setShowSetTimer((showSetTimer) => !showSetTimer);
  };

  return (
    <div className="App">
      <label className="timer-description">{`Time until: ${hour}:${min} ${ampm}, ${getMonth(
        Number(month) + 1
      )} ${day}, ${year}`}</label>
      <CountdownTimer targetDateTime={targetDate} />
      <button onClick={handleReset}>Reset Timer</button>
      {!showSetTimer && <button onClick={handleShowTimer}>Set Timer</button>}
      {showSetTimer && (
        <SetTimer
          setTargetDate={setTargetDate}
          setShowSetTimer={setShowSetTimer}
        />
      )}
    </div>
  );
}

export default App;
