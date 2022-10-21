import { useEffect, useState, useRef } from "react";
import getTimerData from "../support/getTimerData";
import ShowCountdownTimer from "./ShowCountDownTimer";

const CountDownTimer = (props) => {
  const [countdown, setCountdown] = useState(
    props.targetDateTime - new Date().getTime()
  );

  const prevTargetDateTime = useRef();
  useEffect(() => {
    if (props.targetDateTime !== prevTargetDateTime.current) {
      setCountdown(props.targetDateTime - new Date().getTime());
    }

    prevTargetDateTime.current = props.targetDateTime;
    const timeInterval = setInterval(() => {
      setCountdown((countdown) => countdown - 1000);
    }, 1000);

    if (countdown <= 0) {
      clearInterval(timeInterval);
    }
    return () => clearInterval(timeInterval);
  }, [countdown, props.targetDateTime]);

  const timerData = getTimerData(countdown);
  const { days, hours, minutes, seconds } = timerData;

  if (days + hours + minutes + seconds <= 0) {
    return <ShowCountdownTimer days={0} hours={0} minutes={0} seconds={0} />;
  }

  return (
    <ShowCountdownTimer
      days={timerData.days}
      hours={timerData.hours}
      minutes={timerData.minutes}
      seconds={timerData.seconds}
    />
  );
};

export default CountDownTimer;
