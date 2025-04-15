<template>
    <div>
        <NuxtLink to="/"
            class="view_more w-[100px] h-[23px] md:w-[130px] md:h-[30px] flex items-center gap-[8px] md:gap-[20px] cursor-pointer">
            <span class="text-[12px] md:text-[14px] font-[700]" :class="textClass">VIEW MORE</span>
            <img :src=imgSrc alt="더보기 버튼" class="w-[23px] md:w-[30px]">
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import viewMoreBasic from "@/assets/images/more_btn_basic.png";
import viewMoreWhite from "@/assets/images/more_btn_white.png";

const props = defineProps({
    to: {
        type: String,
        required: false,
        default: "/", // 기본값 설정
    },
    theme: {
        type: String,
        default: "basic",
    },
});


const imgSrc = props.theme === 'basic' ? viewMoreBasic : viewMoreWhite
const textClass = props.theme === 'basic' ? 'text-[#000]' : 'text-[#fff]'
</script>

<style scoped></style>