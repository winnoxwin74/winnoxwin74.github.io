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