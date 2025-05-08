<template>
    <div class="block">
        <div @click="router.push('/')" class="cursor-pointer">
            <div class="floating flex flex-col justify-center items-center gap-[8px] w-[80px] h-[80px] rounded-full shadow-[0_3px_14px_rgba(0,0,0,0.25)]"
                :class="[textClass, bgClass]">
                <img class="w-[40px]" :src=iconSrc alt="아이콘 이미지">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import iconLocation from "@/assets/images/location.png";
import iconTel from "@/assets/images/tel.png";
import iconMail from "@/assets/images/mail.png";

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

const iconSrc = computed(() => {
    if (props.theme === 'tel') return iconTel
    if (props.theme === 'mail') return iconMail // 예시 아이콘
    return iconLocation // 기본
})
const bgClass = computed(() => {
    if (props.theme === 'tel') {
        return 'bg-[#F57E1F]'
    }
    if (props.theme === 'mail') {
        return 'bg-[#5C8F3F]'
    }
    return 'bg-[#7A5083]'
})
</script>

<style scoped></style>