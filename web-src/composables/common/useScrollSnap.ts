export function useScrollSnap() {
  const sections = ref<HTMLElement[]>([]);
  let isScrolling = false;
  const headerHeight = 85;
  let touchStartY = 0;
  let touchEndY = 0;

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sections.value.length) return;

    const section = sections.value[index];
    if (section) {
      window.scrollTo({
        top: section.offsetTop + headerHeight,
        behavior: "smooth",
      });
    }
  };

  const findCurrentSection = () => {
    let currentIndex = 0;
    let minDistance = Infinity;
    const scrollY = window.scrollY;

    sections.value.forEach((section, index) => {
      const distance = Math.abs(section.offsetTop - headerHeight - scrollY);
      if (distance < minDistance) {
        minDistance = distance;
        currentIndex = index;
      }
    });

    return currentIndex;
  };

  const handleWheelScroll = (event: WheelEvent) => {
    if (isScrolling || isTouchDevice) return;
    isScrolling = true;

    window.requestAnimationFrame(() => {
      const currentIndex = findCurrentSection();

      if (event.deltaY > 0 && currentIndex < sections.value.length - 1) {
        scrollToSection(currentIndex + 1);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        scrollToSection(currentIndex - 1);
      }

      setTimeout(() => {
        isScrolling = false;
      }, 300);
    });
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStartY = event.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (isScrolling) return;
    isScrolling = true;

    window.requestAnimationFrame(() => {
      const currentIndex = findCurrentSection();
      const deltaY = touchStartY - touchEndY;

      if (deltaY > 30 && currentIndex < sections.value.length - 1) {
        scrollToSection(currentIndex + 1);
      } else if (deltaY < -30 && currentIndex > 0) {
        scrollToSection(currentIndex - 1);
      }

      setTimeout(() => {
        isScrolling = false;
      }, 300);
    });
  };

  const handleTouchMove = (event: TouchEvent) => {
    touchEndY = event.touches[0].clientY;
  };

  onMounted(() => {
    sections.value = Array.from(document.querySelectorAll(".snap-section"));
    window.addEventListener("wheel", handleWheelScroll, { passive: false });

    if (isTouchDevice) {
      window.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleTouchEnd, { passive: true });
    }
  });

  onUnmounted(() => {
    window.removeEventListener("wheel", handleWheelScroll);

    if (isTouchDevice) {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    }
  });

  return {
    sections,
    scrollToSection,
  };
}
