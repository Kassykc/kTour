<template>
    <div class="flex flex-col pb-0 sm:py-[100px] items-center ">
        <div class="flex flex-col items-start w-[100vw] max-w-[1340px] pb-0 md:pb-12 pl-6">
            <!-- <div class="text-[500] text-[1.65rem] pb-[1rem]">
                메디씨티는 이런 서비스를 제공합니다.
            </div> -->
            <div class="pb-[2rem]">
                <MainSectionLinkTitle :title="t('main.section3.part1.title')" :color="'#5C8F3F'" :link="true" @click="router.push('/mtc')"/>
            </div>
            <div class="font-[400] text-[20px] md:text-[26px] text-[#717171]">
                {{ t('main.section3.part1.desc1') }}<br />
                {{ t('main.section3.part1.desc2') }}
            </div>
        </div>

        <div class="max-w-[1340px] pt-[50px] sm:pt-[6rem] px-[12px] xl:pl-[0] ">
            <MainSection03List :list="list" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n';
import img1 from '@/assets/images/main/section03/img1.png';
import img2 from '@/assets/images/main/section03/img2.png';
import img3 from '@/assets/images/main/section03/img3.png';
import img4 from '@/assets/images/main/section03/img4.png';
import img5 from '@/assets/images/main/section03/img5.png';
import img6 from '@/assets/images/main/section03/img6.png';
import img7 from '@/assets/images/main/section03/img7.png';
import img8 from '@/assets/images/main/section03/img8.png';
import img9 from '@/assets/images/main/section03/img9.png';
import img10 from '@/assets/images/main/section03/img10.png';

const router = useRouter();

const list = computed(() => [
    {
        // plastic
        img: img9,
        title: t('menu.2.2depth.1.3depth.9.name'),
        url: '/mtc?tab=8&key=73'
    },
    {
        // stem
        img: img2,
        title: t('menu.2.2depth.1.3depth.2.name'),
        url: '/mtc?tab=1&key=48'
    },
    {
        // ophthalmology
        img: img5,
        title: t('menu.2.2depth.1.3depth.5.name'),
        url: '/mtc?tab=4&key=62'
    },
    {
        // health
        img: img1,
        title: t('menu.2.2depth.1.3depth.1.name'),
        url: '/mtc?tab=0&key=46'
    },
    {
        // dentistry
        img: img6,
        title: t('menu.2.2depth.1.3depth.6.name'),
        url: '/mtc?tab=5&key=64'
    },
    {
        // interanl
        img: img3,
        title: t('menu.2.2depth.1.3depth.3.name'),
        url: '/mtc?tab=2&key=50'
    },
    {
        // obstetrics
        img: img4,
        title: t('menu.2.2depth.1.3depth.4.name'),
        url: '/mtc?tab=3&key=55'
    },
    {
        //  oncology
        img: img7,
        title: t('menu.2.2depth.1.3depth.7.name'),
        url: '/mtc?tab=6&key=69'
    },
    {
        // oriental
        img: img8,
        title: t('menu.2.2depth.1.3depth.8.name'),
        url: '/mtc?tab=7&key=71'
    },
    {
        // varicose
        img: img10,
        title: t('menu.2.2depth.1.3depth.10.name'),
        url: '/mtc?tab=9&key=77'
    }
])

</script>

<style scoped></style>