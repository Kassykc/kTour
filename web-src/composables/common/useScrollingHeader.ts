export function useScrollingHeader() {
  const isScrollingUp = ref(true);
  let lastScrollY = 0;
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < 50) {
          isScrollingUp.value = true;
        } else {
          isScrollingUp.value = currentScrollY < lastScrollY;
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });

  return { isScrollingUp };
}
