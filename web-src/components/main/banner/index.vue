<template>
    <div
        class="relative h-[100vh] max-h-[1440px] sm:h-[538px] lg:h-[85vh] flex items-center justify-center overflow-hidden">

        <video autoplay muted loop playsinline class="absolute w-full h-[85vh] object-cover z-0">
            <source src="/video/main/banner.webm" type="video/webm" />
        </video>

        <img src="/img/main/banner_logo.png" alt="배너로고"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-auto h-auto max-w-[60%] sm:max-w-[30%] pb-[10vh]" />

        <div
            class="relative z-20 flex flex-col sm:gap-[28px] justify-center items-start w-[320px] sm:w-full max-w-[1400px] ml-[20px] mr-auto sm:mx-auto min-w-[320px] px-[28px] sm:px-[18px] h-full text-white">
            <div class="sub_title text-[1.7rem] font-[500] text-left">
                Welcome To Medicity
            </div>
            <div class="main_title text-[6rem] text-left break-keep leading-[6.5rem] font-[700]">
                Global Integrated<br />
                Medical Platform
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>