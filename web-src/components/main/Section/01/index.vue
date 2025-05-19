<template>
    <!-- <div class="flex flex-col justify-center items-center mt-[10rem] mb-[8rem] max-h-[500px]">
        <div class="font-[500] text-[#C2C2C2] tracking-[0.6rem] pb-[1rem]">
            ABOUT US
        </div>
        <div class="font-[400] text-[1.5rem]">
            Medi-City is the company operating Medi-Tour,
        </div>
        <div class="font-[400] text-[1.5rem]">
            a comprehensive service platform that connects patients in Indonesia with
        </div>
        <div class="font-[400] text-[1.5rem]">
            top-tier medical care in South Korea.
        </div>
    </div> -->
    <div>
        <div class="about_service w-full max-w-[1340px] my-0 mx-auto py-[136px]">
            <div class="service_area mb-[120px] md:mb-[240px]">
                <h1 class="title font-[700] text-[40px] md:text-[60px] text-center mb-[40px] md:mb-[64px]">
                    {{ t('main.section1.part1.title') }}
                </h1>
                <div
                    class="program w-full max-w-[884px] flex flex-col justify-center items-center gap-[25px] mx-auto mb-[90px]">
                    <h3 class="font-[600] text-[20px] md:text-[26px] text-center">
                        {{ t('main.section1.part1.subtitle') }}
                    </h3>
                    <p class="text-[18px] md:text-[22px] text-center">
                        {{ t('main.section1.part1.desc') }}
                    </p>
                </div>
                <div class="w-full max-w-[884px] flex justify-center items-center mx-auto">
                    <img src="@/assets/images/main/section01/k_medi_tour.png" alt="Medi Tour" v-if="common.getCookie('lang')=='en'">
                    <img src="@/assets/images/main/section01/k_medi_tour_id.png" alt="Medi Tour" v-if="common.getCookie('lang')=='id'">
                </div>
            </div>
            <div class="works_area">
                <h1 class="title font-[700] text-[40px] md:text-[60px] text-center mb-[40px] md:mb-[64px]">
                    {{ t('main.section1.part2.title') }}
                </h1>
                <h3 class="font-[600] text-[20px] md:text-[26px] text-center mx-auto mb-[70px]">
                    {{ t('main.section1.part2.desc') }}
                </h3>

                <SubWorksStep />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n';

</script>

<style scoped></style>