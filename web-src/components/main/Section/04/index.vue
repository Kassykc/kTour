<template>
    <div class="flex flex-col py-[100px] items-center w-full h-full bg-[#FAFAFA]">
        <div class="flex flex-col items-start w-[100vw] max-w-[1340px] pb-12 px-6">
            <div class="pb-[2rem]">
                <MainSectionLinkTitle :title="t('main.section4.part1.title')" :color="'#F57E1F'" :link="true" @click="router.push('/tour/seoul')"/>
            </div>
            <div class="font-[400] text-[20px] md:text-[26px] text-[#717171]">
                {{ t('main.section4.part1.desc1') }}<br />
                {{ t('main.section4.part1.desc2') }}
            </div>
        </div>

        <div class="max-w-[1340px] w-full pt-[4rem] border-t border-black">
            <MainSection04List :list="list" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n';
import img1 from '@/assets/images/main/section04/img1.png';
import img2 from '@/assets/images/main/section04/img2.png';

const router = useRouter();

const list = [
    {
        img: img1,
        title: t('main.section4.part1.content1'),
        url: '/tour/seoul'
    },
    {
        img: img2,
        title: t('main.section4.part1.content2'),
        url: '/tour/gangwon'
    },
]
</script>

<style scoped></style>