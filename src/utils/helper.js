function compareTime(timeString1, timeString2) {
  const dateTime1 = new Date();
  const dateTime2 = new Date();
  return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
  compareTime,
};
