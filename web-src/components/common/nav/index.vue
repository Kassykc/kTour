<template>
    <div class="flex gap-0 min-w-[250px]">
        <div v-for="(item, index) in menus" :key="index" class="flex justify-center items-center w-[97px] md:w-[110px] lg:w-[125px] h-[85px] text-center cursor-pointer font-bold text-[13px] md:text-[14px] lg:text-[18px] text-[#E61673]" @click="router.push(item.url)">
            {{ item.title }}
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const menus = [
    { title: "WE ARE", url: "/" },
    { title: "IT", url: "/" },
    { title: "DESIGN", url: "/" },
    { title: "MICE", url: "/" },
    { title: "INFORMATION", url: "/" },
];
</script>

<style scoped></style>