function currentClock() {
  var currentTime = new Date()
  var Hours = currentTime.getHours()
  var Min = currentTime.getMinutes()
  var Sec = currentTime.getSeconds()

  Min = (Min < 10 ? "0" : " ") + Min
  Sec = (Sec < 10 ? "0" : "") + Sec

  var amPm = Hours < 12 ? "AM" : "PM"

  Hours = Hours > 12 ? Hours - 12 : Hours
  Hours = Hours == 0 ? 12 : Hours
  var display = Hours + " : " + Min + " : " + Sec + " " + amPm

  document.getElementById("clock").innerHTML = display
}
