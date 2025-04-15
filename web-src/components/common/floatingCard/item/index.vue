<template>
    <div class="hidden md:block">
        <div @click="router.push('/consultation')" class="cursor-pointer">
            <div class="floating flex flex-col justify-center items-center gap-[8px] w-[167px] h-[213px] rounded-[20px] shadow-[0_5px_27px_rgba(0,0,0,0.25)]"
                :class="[textClass, bgClass]">
                <img class="w-fit" :src=iconSrc alt="아이콘 이미지">
                <p class="title text-[18px] font-[600] leading-[26px]">{{ title }}</p>
                <img class="w-fit" :src=arrowSrc alt="화살표 이미지">
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import iconPink from "@/assets/images/floating_icon_pink.png";
import iconWhite from "@/assets/images/floating_icon_white.png";
import arrowPink from "@/assets/images/floating_arrow_pink.png";
import arrowWhite from "@/assets/images/floating_arrow_white.png";

const props = defineProps({
    to: {
        type: String,
        required: false,
        default: "/", // 기본값 설정
    },
    title: {
        type: String,
        required: false,
        default: "", // 기본값 설정
    },
    theme: {
        type: String,
        default: "basic",
    },
});

const router = useRouter();

const iconSrc = props.theme === 'pink' ? iconWhite : iconPink
const arrowSrc = props.theme === 'pink' ? arrowWhite : arrowPink
const textClass = props.theme === 'pink' ? 'text-[#fff]' : 'text-[#E61673]'
const bgClass = props.theme === 'pink' ? 'bg-[linear-gradient(-110deg,_#FFAFBD,_#F33F7A,_#E61673)]' : 'bg-[#fff]'
</script>

<style scoped></style>