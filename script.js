document.addEventListener('DOMContentLoaded', () => {
  const pages = Array.from(document.querySelectorAll('.book-page.page-right'));

  // Assign z-index and index to each page
  pages.forEach((p, i) => {
    p.dataset.index = i;
    p.style.zIndex = pages.length - i;
  });

  const pageTurnBtns = document.querySelectorAll('.nextprev-btn');

  // Flip logic for a single page
  function turnPage(page, idx) {
    const transitionTime = 1000;

    if (page.classList.contains('turn')) {
      page.classList.remove('turn');
      setTimeout(() => {
        page.style.zIndex = pages.length - idx;
      }, transitionTime);
    } else {
      page.style.zIndex = 1000 + idx;
      requestAnimationFrame(() => page.classList.add('turn'));
    }
  }

  // Handle next/prev buttons
  pageTurnBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pageId = btn.getAttribute('data-page');
      const page = document.getElementById(pageId);
      if (!page) return console.warn('No page with id', pageId);

      const idx = Number(page.dataset.index);
      turnPage(page, idx);
    });
  });

  // Auto-flip to Contact Me (last page)
  const contactBtn = document.querySelector('.btn.contact-me');
  if (contactBtn) {
    contactBtn.addEventListener('click', e => {
      e.preventDefault();
      let i = 0;
      const flipInterval = setInterval(() => {
        if (i < pages.length) {
          turnPage(pages[i], i);
          i++;
        } else {
          clearInterval(flipInterval);
        }
      }, 1100); 
    });
  }
});
