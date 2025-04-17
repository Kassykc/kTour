<template>
    <div class="flex justify-center items-center gap-2">
        <div v-for="(item, index) in imgList" :key="index">
            <img :src="item.img" alt="img" class="w-[17vw]">
            <div class="pt-[0.5rem] font-[500] text-[1.2rem]">{{ item.title }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import img01 from '@/assets/images/main/section02/drama.png'
import img02 from '@/assets/images/main/section02/pop.png'
import img03 from '@/assets/images/main/section02/life.png'
import img04 from '@/assets/images/main/section02/travel.png'

const imgList = [
    {
        img: img01,
        title: '🎬 ' + 'K-Drama',
    }, {
        img: img02,
        title: '🎤 ' + 'K-Pop',
    }, {
        img: img03,
        title: '🥢 ' + 'K-Lifestyle Experiences',
    }, {
        img: img04,
        title: '🗺️ ' + 'Unique Travel',
    },
];


</script>

<style scoped></style>