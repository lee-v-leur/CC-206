document.addEventListener('DOMContentLoaded', () => {
  const pages = Array.from(document.querySelectorAll('.book-page.page-right'));

  pages.forEach((p, i) => {
    p.dataset.index = i;
    p.style.zIndex = pages.length - i;
  });

  const pageTurnBtns = document.querySelectorAll('.nextprev-btn');

  pageTurnBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pageId = btn.getAttribute('data-page');
      const page = document.getElementById(pageId);
      if (!page) return console.warn('No page with id', pageId);

      const idx = Number(page.dataset.index);
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
    });
  });
});
