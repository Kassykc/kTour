<template>
    <div
        class="relative h-[100vh] max-h-[1440px] sm:h-[538px] lg:h-[85vh] flex items-center justify-center overflow-hidden">

        <video autoplay muted loop playsinline class="absolute w-full h-[100vh] max-h-[1440px] sm:h-[538px] lg:h-[85vh] object-cover z-0">
            <source src="/video/main/banner.webm" type="video/webm" />
        </video>

        <img src="/img/main/banner_logo.png" alt="배너로고"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-auto h-auto max-w-[40%] sm:max-w-[30%] pb-[10vh]" />

        <div
            class="relative z-20 flex flex-col sm:gap-[28px] justify-center items-center sm:items-start w-full sm:w-[320px] sm:w-full max-w-[1340px] ml-[20px] mr-auto sm:mx-auto min-w-[320px] px-[28px] sm:px-[18px] h-full text-white">
            <div class="sub_title text-[18px] lg:text-[20px]  md:text-[24px] lg:text-[30px] font-[500] text-center sm:text-left">
                {{ t("main.banner.text1") }}
            </div>
            <div class="main_title text-[24px] md:text-[40px] lg:text-[50px] xl:text-[75px] text-left break-keep md:leading-[45px] lg:leading-[55px] xl:leading-[85px] font-[700]  text-center sm:text-left">
                {{ t("main.banner.text2") }} <br />
                {{ t("main.banner.text3") }} <br />
                {{ t("main.banner.text4") }}
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'
</script>

<style scoped></style>