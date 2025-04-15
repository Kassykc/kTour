<template>
    <div>
        <div class="portfolio_item_wrap flex flex-wrap gap-x-[10px] gap-y-[20px] md:gap-x-[15px] md:gap-y-[30px] pt-[20px] md:pt-[80px] xl:pt-[150px] pb-[50px] xl:pb-[106px] px-[10px]">
            <div 
                class="portfolio_item cursor-pointer w-[calc((100%-20px)/2)] md:w-[calc((100%-45px)/3)] xl:w-[calc((100%-45px)/4)]"
                v-for="(item, index) in portfolio_items" :key="index"
                >
                <!-- @click="movePage(item.link)" -->
                <img :src="item.src" alt="포트폴리오 이미지" class="w-full">
                <div class="project_name text-[15px] font-[500] mt-[10px]">{{ item.project_name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import portfolio01 from '@/assets/images/sub/portfolio/portfolio01.png';
import portfolio02 from '@/assets/images/sub/portfolio/portfolio02.png';
import portfolio03 from '@/assets/images/sub/portfolio/portfolio03.png';
import portfolio04 from '@/assets/images/sub/portfolio/portfolio04.png';
import portfolio05 from '@/assets/images/sub/portfolio/portfolio05.png';
import portfolio06 from '@/assets/images/sub/portfolio/portfolio06.png';
import portfolio07 from '@/assets/images/sub/portfolio/portfolio07.png';
import portfolio08 from '@/assets/images/sub/portfolio/portfolio08.png';
import portfolio09 from '@/assets/images/sub/portfolio/portfolio09.png';
import portfolio10 from '@/assets/images/sub/portfolio/portfolio10.png';
import portfolio11 from '@/assets/images/sub/portfolio/portfolio11.png';
import portfolio12 from '@/assets/images/sub/portfolio/portfolio12.png';
import portfolio13 from '@/assets/images/sub/portfolio/portfolio13.png';
import portfolio14 from '@/assets/images/sub/portfolio/portfolio14.png';
import portfolio15 from '@/assets/images/sub/portfolio/portfolio15.png';
import portfolio16 from '@/assets/images/sub/portfolio/portfolio16.png';

const router = useRouter();


const movePage = (page:string) => {

    router.push(page);
};


const portfolio_items = ref([
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio01
    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio02

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio03

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio04

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio05

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio06

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio07

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio08

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio09

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio10

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio11

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio12

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio13

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio14

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio15

    },
    {
        project_name: 'ZIESS SMILE FORUM 2024',
        link: '/',
        src: portfolio16

    },
])
</script>

<style scoped>

</style>
