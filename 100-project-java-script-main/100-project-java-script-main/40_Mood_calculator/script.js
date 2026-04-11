function cekMood() {
  const moodList = ["😴 Mengantuk", "😊 Bahagia", "😡 Kesal", "😭 Galau", "😎 Pede", "🤯 Stres"];
  const emoji = ["😴", "😊", "😡", "😭", "😎", "🤯"];
  const index = Math.floor(Math.random() * moodList.length);

  document.getElementById("mood").textContent = `${emoji[index]} ${moodList[index]}`;
}
