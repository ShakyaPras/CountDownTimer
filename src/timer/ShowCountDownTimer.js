const ShowCountdownTimer = (props) => {
  const showDays = props.days > 0;
  return (
    <div className="countdown-timer">
      {showDays && (
        <div className="timer-section border-right">
          <label className="countdown-Number">{props.days}</label>
          <label className="timer-type">Days</label>
        </div>
      )}
      <div className="timer-section border-right">
        <label className="countdown-Number">{props.hours}</label>
        <label className="timer-type">Hours</label>
      </div>
      <div className={`timer-section ${showDays ? "" : "border-right"}`}>
        <label className="countdown-Number">{props.minutes}</label>
        <label className="timer-type">Minutes</label>
      </div>
      {!showDays && (
        <div className="timer-section">
          <label className="countdown-Number">{props.seconds}</label>
          <label className="timer-type">Seconds</label>
        </div>
      )}
    </div>
  );
};

export default ShowCountdownTimer;
