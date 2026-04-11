let alarmTime;

function setelAlarm() {
  alarmTime = document.getElementById("waktuAlarm").value;
  document.getElementById("status").textContent = `Alarm disetel untuk ${alarmTime}`;
}

setInterval(() => {
  const now = new Date();
  const waktuSekarang = now.toTimeString().slice(0, 5);
  if (waktuSekarang === alarmTime) {
    alert("⏰ Waktu Alarm!");
    alarmTime = null;
  }
}, 1000);
