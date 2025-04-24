<template>
    <div class="flex flex-col pt-[10rem] items-center h-[100%] max-h-[2400px] bg-[#FAFAFA]">
        <div class="flex flex-col items-start w-[100vw] max-w-[1340px] pb-12 pl-6">
            <div class="pb-[2rem]">
                <MainSectionLinkTitle :title="'Medi Tour'" :color="'#F57E1F'" :link="true" />
            </div>
            <div class="font-[400] text-[1.5rem] text-[#717171]">
                Our service offers personalized care before, during, and after treatment, starting from your departure
            </div>
            <div class="font-[400] text-[1.5rem] text-[#717171]">
                in Indonesia to your safe return—so you can focus on healing while we handle the rest.
            </div>
        </div>

        <div class="max-w-[1340px] pt-[4rem] pb-[10rem] border-t border-black">
            <MainSection04List :list="list" />
        </div>

    </div>
</template>

<script setup lang="ts">
import img1 from '@/assets/images/main/section04/img1.png';
import img2 from '@/assets/images/main/section04/img2.png';

const list = [
    {
        img: img1,
        title: 'Seoul Tour'
    },
    {
        img: img2,
        title: 'Gangwon Tour'
    },
]
</script>

<style scoped></style>