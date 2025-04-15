<template>
    <div class="flex gap-0 min-w-[250px]">
        <div v-for="(item, index) in menus" :key="index"
            class="flex justify-center items-center w-[97px] md:w-[110px] lg:w-[125px] h-[85px] text-center cursor-pointer font-bold text-[13px] md:text-[14px] lg:text-[18px] text-[#E61673]"
            @click="router.push(item.url)">
            <i18n-t :keypath="item.titlePath" />
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