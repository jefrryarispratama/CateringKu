export const scrollers = document.querySelectorAll('.scroller');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute('data-animated', true);
    const scrollerInner = scroller.querySelector('.scroller__inner');
    const scrollerContent = Array.from(scrollerInner.children);
    const duplicatedItems = [];

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      duplicatedItems.push(duplicatedItem);
    });

    duplicatedItems.forEach((duplicatedItem) => {
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
