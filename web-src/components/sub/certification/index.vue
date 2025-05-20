<template>
    <div>
        <div
            class="certification_area w-full max-w-[1380px] px-[20px] my-0 mx-auto pb-[100px] flex justify-center sm:justify-start items-center flex-wrap gap-x-[8px] gap-y-[38px]">
            <div v-for="(item, index) in certifications" :key="index" class="w-[216px] flex flex-col gap-[8px]">
                <img :src="item.image" alt="certification" />
                <div
                    class="w-full h-[66px] bg-[#EAE8DD] flex justify-center items-center font-[500] text-[14px] text-center">
                    {{ item.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'
import certification01 from "@/assets/images/sub/about/certification01.png";
import certification02 from "@/assets/images/sub/about/certification02.png";
import certification03 from "@/assets/images/sub/about/certification03.png";
import certification04 from "@/assets/images/sub/about/certification04.png";
import certification05 from "@/assets/images/sub/about/certification05.png";
import certification06 from "@/assets/images/sub/about/certification06.png";
import certification07 from "@/assets/images/sub/about/certification07.png";
import certification08 from "@/assets/images/sub/about/certification08.png";
import certification09 from "@/assets/images/sub/about/certification09.png";
import certification10 from "@/assets/images/sub/about/certification10.png";
import certification11 from "@/assets/images/sub/about/certification11.png";
import certification12 from "@/assets/images/sub/about/certification12.png";

const certifications = [
    {
        image: certification01,
        text: t('about.part1.content3.1'),
    },
    {
        image: certification02,
        text: t('about.part1.content3.2'),
    },
    {
        image: certification03,
        text: t('about.part1.content3.3'),
    },
    {
        image: certification04,
        text: t('about.part1.content3.4'),
    },
    {
        image: certification05,
        text: t('about.part1.content3.5'),
    },
    {
        image: certification06,
        text: t('about.part1.content3.6'),
    },
    {
        image: certification07,
        text: t('about.part1.content3.7'),
    },
    {
        image: certification08,
        text: t('about.part1.content3.8'),
    },
    {
        image: certification09,
        text: t('about.part1.content3.9'),
    },
    {
        image: certification10,
        text: t('about.part1.content3.10'),
    },
    {
        image: certification11,
        text: t('about.part1.content3.11'),
    },
    {
        image: certification12,
        text: t('about.part1.content3.12'),
    },
]
</script>

<style scoped></style>
