<template>
    <div class="flex flex-col justify-center items-center bg-[#FAFAFA] py-[120px]">
        <div class="flex flex-col justify-center items-center max-w-[1340px] w-full">
            <div class="font-[700] text-[#000] text-[40px] md:text-[70px] pb-[1rem]">
                {{ t('main.section2.part1.title') }}
            </div>
            <div class="font-[500] text-[20px] md:text-[26px] mb-[42px] w-fit mx-auto text-center">
                {{ t('main.section2.part1.subtitle') }}
            </div>
            <div class="mb-[100px]">
                <CommonBtnViewMore />
            </div>
            <div class="chart_area w-full max-w-[1340px] flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start gap-[70px] mb-[126px] px-[20px]">
                <div class="rank w-full md:w-[632px] h-fit md:h-[780px] flex flex-col justify-between items-center gap-[20px] md:gap-0">
                    <div class="flex flex-col justify-center items-start w-full">
                        <h1 class="title font-[700] text-[20px] md:text-[26px] mb-[6px] md:mb-[20px]">
                            {{ t('main.section2.part1.desc.1.title') }}
                        </h1>
                        <p class="font-[700] text-[16px] md:text-[20px] mb-[10px]">
                            {{ t('main.section2.part1.desc.1.desc') }}
                        </p>
                    </div>
                    <div>
                        <img src="@/assets/images/main/section02/rank.png" alt="rank"
                            class="w-full h-full object-cover">
                    </div>
                    <p class="text-right text-[12px] sm:text-[14px] w-full">
                        <i>{{ t('about.part3.content1.source') }}</i>
                    </p>
                </div>

                <div class="tourism w-full md:w-[632px] h-fit md:h-[780px] flex flex-col justify-between items-center gap-[20px] md:gap-0">
                    <div class="flex flex-col justify-center items-start w-full">
                        <h1 class="title font-[700] text-[20px] md:text-[26px] mb-[6px] md:mb-[20px]">
                            {{ t('main.section2.part1.desc.2.title') }}
                        </h1>
                        <p class="font-[700] text-[16px] md:text-[20px] mb-[10px]">
                            {{ t('main.section2.part1.desc.2.desc') }}
                        </p>
                    </div>
                    <div>
                        <img src="@/assets/images/main/section02/tourism.png" alt="rank"
                            class="w-full h-full object-cover">
                    </div>
                    <p class="text-right text-[12px] sm:text-[14px] w-full">
                        <i>{{ t('about.part3.content3.source') }}</i>
                    </p>
                </div>
            </div>
            <div class="font-[400] text-[1.5rem]">
                <h1 class="font-[700] text-[20px] md:text-[26px] mb-[20px] md:mb-[45px]">
                    {{ t('main.section2.part1.desc.3.title') }}
                </h1>
                <MainSection02List />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'

</script>

<style scoped></style>