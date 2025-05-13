<template>
    <div
        class="view_more w-[100%] h-auto flex items-center cursor-pointer border-b border-black pr-[1rem] pl-[1rem] pb-[0.5rem]">
        <span class="text-[1.2rem] font-[500] pr-[0.2rem]" :class="textClass">
            {{ t('utils.btn.viewMore') }}
        </span>
        <!-- <img :src=imgSrc alt="더보기 버튼" class="w-[23px] md:w-[30px]"> -->
        <!-- <img src="/img/common/arrow_icon/arrow_outward.svg" alt="더보기 버튼" class="w-[1.9rem]"> -->
        <div class="w-[1.9rem]">
            <CommonLinkArrow />
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'
// import viewMoreBasic from "@/assets/images/more_btn_basic.png";
// import viewMoreWhite from "@/assets/images/more_btn_white.png";

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


// const imgSrc = props.theme === 'basic' ? viewMoreBasic : viewMoreWhite
const textClass = props.theme === 'basic' ? 'text-[#000]' : 'text-[#fff]'
</script>

<style scoped></style>