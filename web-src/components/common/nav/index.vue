<template>
    <div class="flex gap-x-10 min-w-[250px]">
        <div v-for="(item, index) in menus" :key="index"
            class="flex justify-center items-center text-center cursor-pointer text-[1rem] md:text-[1rem] lg:text-[1rem] text-[#fff] pt-[0.5vh]"
            @click="router.push(item.url)" v-html="t(item.titlePath)">
        </div>
    </div>
</template>


<script setup lang="ts">
import { t } from '@/plugins/i18n';
const router = useRouter();
const menus = [
    { titlePath: "menu.1", url: "/" },
    { titlePath: "menu.2", url: "/" },
    { titlePath: "menu.3", url: "/" },
    { titlePath: "menu.4", url: "/" },
    { titlePath: "menu.5", url: "/" },
    { titlePath: "menu.6", url: "/" },
];
</script>

<style scoped></style>