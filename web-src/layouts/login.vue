<template>
    <div>
        <main class="h-full w-full">
            <slot></slot>
        </main>
    </div>
</template>

<script setup lang="ts">
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
