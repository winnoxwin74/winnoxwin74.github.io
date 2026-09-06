const hari=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const bulan=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const d=new Date();
document.getElementById('tanggal').textContent = `${hari[d.getDay()]}, ${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;

fetch('https://api.open-meteo.com/v1/forecast?latitude=-6.2088&longitude=106.8456&current_weather=true')
  .then(res => res.json())
  .then(data => {
    const suhu = Math.round(data.current_weather.temperature);
    const el = document.getElementById('cuaca');
    if (el) el.textContent = `Jakarta ${suhu}°C`;
  })
  .catch(() => {});