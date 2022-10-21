import { useState } from "react";

import validateTimerData from "../support/validateTimerData";

const SetTimer = (props) => {
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const disableButton = !validateTimerData(day, hour, min);

  const setTargetDate = props.setTargetDate;
  const setShowSetTimer = props.setShowSetTimer;

  const handelSetTimer = () => {
    const timerDay = Number(day);
    const timerHour = Number(hour);
    const timerMin = Number(min);

    if (timerDay + timerHour + timerMin > 0) {
      let timestamp = new Date().getTime();

      timestamp +=
        timerMin * 60000 + timerHour * 60000 * 60 + timerDay * 60000 * 60 * 24;

      setTargetDate(timestamp);
      setShowSetTimer(false);
    }
  };

  return (
    <div className="set-timer">
      <div>
        <label>Days:</label>
        <input type="text" onChange={(e) => setDay(e.target.value)} />
      </div>
      <div>
        <label>Hours:</label>
        <input type="text" onChange={(e) => setHour(e.target.value)} />
      </div>
      <div>
        <label>Minutes:</label>
        <input type="text" onChange={(e) => setMin(e.target.value)} />
      </div>
      <div>
        <button disabled={disableButton} onClick={handelSetTimer}>
          Set Timer
        </button>
        <button onClick={() => setShowSetTimer(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default SetTimer;
