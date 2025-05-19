<template>
    <div>
        <h1>
            <NuxtLink to="/">
                <img 
                    :src="isHoveredHeader 
                    ? '/img/common/logo/logo_color.png'
                    : '/img/common/logo/logo_white.png'"
                    class="w-[120px] sm:w-[150px] h-auto"
                    alt="로고"
                >
            </NuxtLink>
        </h1>
    </div>
</template>

<script setup lang="ts">
defineProps<{ isHoveredHeader: boolean }>()
</script>

<style scoped></style>
