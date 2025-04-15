<template>
    <div>
        <header class="fixed top-0 left-0 w-full h-[85px] z-50">
            <CommonHeader />
        </header>

        <main>
            <div class="relative h-full flex flex-col overflow-hidden">
                <slot></slot>
                <CommonGoToTop />
                <CommonFloatingCard />
            </div>
        </main>

        <footer>
            <CommonFooter />
        </footer>
    </div>
</template>

<script setup lang="ts">
import { useScrollingHeader } from "@/composables/common/useScrollingHeader";
import { useScrollSnap } from "@/composables/common/useScrollSnap";

const { isScrollingUp } = useScrollingHeader();
const { sections, scrollToSection } = useScrollSnap();
</script>

<style scoped>
.snap-section {
    touch-action: pan-y;
    overscroll-behavior: contain;
}

main {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
</style>
