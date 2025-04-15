<template>
    <div id="leftmenu">
        <div @click="router.push('/')" :class="{ active: route.path === '/' }">
            Gallery
        </div>
        <div @click="goRoute('artist-list')" :class="{ active: route.path .includes('/artist') }">
            Artist
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute(); // 현재 경로 가져오기

const goRoute = (activeMenu: string) => {
    router.push(`/${activeMenu}`);
}
</script>
