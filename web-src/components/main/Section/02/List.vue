<template>
    <div class="flex justify-center items-center flex-col md:flex-row flex-wrap gap-10 md:gap-2">
        <div v-for="(item, index) in imgList" :key="index" class="">
            <div class="w-[296px] h-[340px]">
                <img :src="item.img" alt="img" class="w-full h-full object-cover">
            </div>
            <div class="pt-[0.5rem] font-[500] text-[1.2rem]">{{ item.title }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'
import img01 from '@/assets/images/main/section02/drama.png'
import img02 from '@/assets/images/main/section02/pop.png'
import img03 from '@/assets/images/main/section02/life.png'
import img04 from '@/assets/images/main/section02/travel.png'

const imgList = [
    {
        img: img01,
        title: t('main.section2.part1.desc.3.content.1.title'),
    }, {
        img: img02,
        title: t('main.section2.part1.desc.3.content.2.title'),
    }, {
        img: img03,
        title: t('main.section2.part1.desc.3.content.3.title'),
    }, {
        img: img04,
        title: t('main.section2.part1.desc.3.content.4.title'),
    },
];


</script>

<style scoped></style>