// This file is intentionally simple.
// To edit the website, open index.html in a text editor such as VS Code.
// Replace text between the HTML tags. You can also replace the PHOTO placeholder
// with an <img> element when the professional photo is available.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});
