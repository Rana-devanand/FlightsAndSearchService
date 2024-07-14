function compareTime(arrivalTime, departureTimes) {
  const dateTime1 = new Date(arrivalTime);
  const dateTime2 = new Date(departureTimes);
  return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
  compareTime,
};
