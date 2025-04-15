<template>
    <div class="block md:hidden">
        <div @click="router.push('/consultation')" class="cursor-pointer">
            <div class="floating flex flex-col justify-center items-center gap-[8px] w-[68px] h-[68px] rounded-full shadow-[0_3px_14px_rgba(0,0,0,0.25)]"
                :class="[textClass, bgClass]">
                <img class="w-[42px]" :src=iconSrc alt="아이콘 이미지">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import iconPink from "@/assets/images/floating_icon_pink.png";
import iconWhite from "@/assets/images/floating_icon_white.png";

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
const bgClass = props.theme === 'pink' ? 'bg-[linear-gradient(-110deg,_#FFAFBD,_#F33F7A,_#E61673)]' : 'bg-[#fff]'
</script>

<style scoped></style>