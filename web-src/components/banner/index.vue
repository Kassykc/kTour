<template>
    <div>
        <div 
            class="banner_area relative w-full h-[435px] bg-cover bg-center"
            >
            <!-- :style="{ backgroundImage: `url(${bgImage})` }"     -->
        <!-- bg-[url('@/assets/images/sub/banner_bg.png')] -->
            <video autoplay muted loop playsinline
                class="absolute w-full h-full object-cover z-0">
                <source :src="videoSrc" type="video/webm" />
            </video>
            <div
                class="title_area relative z-10 max-w-[1340px] w-full h-[435px] flex flex-col justify-center items-center my-0 mx-auto">
                <div class="title text-white font-[700] text-[32px] sm:text-[48px] lg:text-[80px] mt-[100px]">{{ title }}</div>
                <SubTab v-model="selectedTab" :category="category" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const fileBaseUrl = apiBase.url() + "/_file/000/";

const props = defineProps({
title: {
            type: String,
            default: '',
        },
        bgImage: {
            type: Array,
            default: [], // 기본값을 빈 문자열로 설정
        },
        videoSrc: { type: String, default: '' },
        category: {
            type: String,
            default: 'about', // 기본값 설정
        },
        selectedTab: {
            type: String,
            default: 'company', // 부모로부터 전달된 기본 탭 값
        }
})

const selectedTab = ref(props.selectedTab);

        // 카테고리 변경 시, 탭 초기화
        watch(() => props.category, (newCategory) => {
            selectedTab.value = 'company'; // 카테고리 변경 시 'company'로 초기화
        });
</script>
<style lang="">
    
</style>