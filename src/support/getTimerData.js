const getTimerData = (countdownDateTime) => {
  let days = Math.floor(countdownDateTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (countdownDateTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor(
    (countdownDateTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  let seconds = Math.floor((countdownDateTime % (1000 * 60)) / 1000);

  days = days < 0 ? 0 : days;
  hours = hours < 0 ? 0 : hours;
  minutes = minutes < 0 ? 0 : minutes;
  seconds = seconds < 0 ? 0 : seconds;

  return { days, hours, minutes, seconds };
};

export default getTimerData;
