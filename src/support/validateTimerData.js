const validateTimerData = (day, hour, min) => {
  if (isNaN(day) || isNaN(hour) || isNaN(min)) return false;
  if (Number(day) > 0 || Number(hour) > 0 || Number(min) > 0) return true;
  return false;
};

export default validateTimerData;
