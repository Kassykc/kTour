<template>
    <div>
        <NuxtLink to="/" class="cursor-pointer">
            <div
                class="flex flex-col md:flex-row justify-center gap-[10px] md:justify-between md:items-center w-[100%] sm:w-[530px] h-[90px] md:h-[88px] text-[#000] border-b border-[#939393]">
                <div class="notice_info max-w-[100%] md:max-w-[420px]">
                    <div v-if="props.period"
                        class="period text-[14px] md:text-[16px] leading-[16px] md:leading-[27px] font-[600] mb-[4px] md:mb-[0px]">
                        {{ props.period }}
                    </div>
                    <div class="title text-[14px] md:text-[18px] leading-[16px] md:leading-[27px] font-[500]"
                        :class="titleClampClass">{{ props.title }}</div>
                </div>
                <div
                    class="posting_date flex flex-row items-center justify-between flex-row-reverse gap-[8px] md:flex-col md:items-end">
                    <img :src=arrowLink alt="화살표 아이콘" class="w-[16px] md:w-fit pr-[4px]">
                    <div class="date text-[#515151] text-[8px] md:text-[14px] md:font-[400]">{{ props.date }}</div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import arrowLink from "@/assets/images/arrow_link.png";

const props = defineProps({
    to: {
        type: String,
        required: false,
        default: "/", // 기본값 설정
    },
    period: {
        type: String,
        default: "",
    },
    title: {
        type: String,
        default: "",
    },
    date: {
        type: String,
        default: "",
    },
});


const titleClampClass = computed(() =>
    props.period ? 'line-clamp-1' : 'line-clamp-2'
)
</script>

<style scoped></style>