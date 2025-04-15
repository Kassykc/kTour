<template>
    <div>
        <NuxtLink to="/" class="cursor-pointer">
            <div class="h-[140px] sm:h-[280px] w-[138px] sm:w-[280px] bg-cover bg-center flex flex-col justify-end text-white"
            :style="{ backgroundImage: `url(${bg})` }">
                <div class="flex flex-col gap-[6px] sm:gap-[14px] p-[16px]">
                    <div class="category w-fit text-[6px] sm:text-[12px] font-[700] leading-[14px] sm:leading-[29px] px-[4px] sm:px-[10px] py-[0px] rounded-full bg-[rgba(255,255,255,0.3)]">{{ category }}</div>
                    <div class="content flex flex-col gap-[0px]">
                        <div class="brand w-full h-[13px] sm:h-[27px] text-[10px] sm:text-[18px] font-[700] leading-[13px] sm:leading-[27px] truncate">{{ brand }}</div>
                        <div class="cont w-full h-[13px] sm:h-[27px] text-[10px] sm:text-[18px] font-[700] leading-[13px] sm:leading-[27px] truncate">{{ cont }}</div>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    category: string
    brand: string
    cont: string
    bg: string
    to?: string 
}>()
</script>

<style scoped>

</style>