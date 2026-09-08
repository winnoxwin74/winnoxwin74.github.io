// ============================================
// KODE LAMA KAMU (TIDAK DIUBAH, UTUH 100%)
// ============================================

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

// Tombol Back to Top
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.id = 'backToTop';
backToTopBtn.setAttribute('aria-label', 'Kembali ke atas');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Estimasi Waktu Baca
const articleBody = document.querySelector('article');
if (articleBody) {
  const text = articleBody.innerText || articleBody.textContent;
  const wordCount = text.trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  const byline = document.querySelector('.byline');
  if (byline) {
    const readTimeSpan = document.createElement('p');
    readTimeSpan.className = 'read-time';
    readTimeSpan.innerHTML = `⏱️ ${readingTime} Menit Membaca`;
    byline.insertAdjacentElement('afterend', readTimeSpan);
  }
}

// ============================================
// KODE BARU: FACT BOX OTOMATIS
// (Ditempelkan otomatis di semua halaman artikel)
// ============================================
document.addEventListener("DOMContentLoaded", function() {
  // Rem 1: Hanya jalan di halaman artikel
  var halamanArtikel = document.querySelector("article");
  if (!halamanArtikel) return;

  // Rem 2: Cari elemen catatan kaki .note sebagai titik tempel
  var titikTempel = document.querySelector(".note");
  if (!titikTempel) return;

  // Buat kotak fact box
  var kotak = document.createElement("div");
  kotak.className = "fact-box";
  kotak.innerHTML = '<h3>📌 Catatan Redaksi WartaKini</h3><p>Artikel ini disusun berdasarkan pengalaman langsung dan observasi lapangan. Data dan kondisi dapat berubah sewaktu-waktu sesuai perkembangan di lokasi.</p>';

  // Tempelkan dengan aman, tepat sebelum elemen .note
  titikTempel.parentNode.insertBefore(kotak, titikTempel);
});