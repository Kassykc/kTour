<template>
    <div class="flex flex-col justify-center items-center bg-[#FAFAFA] py-[120px]">
        <div class="flex flex-col justify-center items-center max-w-[1340px]">
            <div class="font-[700] text-[#000] text-[4.5rem] pb-[1rem]">
                {{ t('main.section2.part1.title') }}
            </div>
            <div class="font-[500] text-[1.5rem] mb-[42px] max-h-[1.5rem]">
                {{ t('main.section2.part1.subtitle') }}
            </div>
            <div class="mb-[100px]">
                <CommonBtnViewMore />
            </div>
            <div class="chart_area w-full max-w-[1340px] flex justify-between items-start mb-[126px]">
                <div class="rank w-[632px] h-[780px] flex flex-col justify-between items-center">
                    <div class="flex flex-col justify-center items-start w-full">
                        <h1 class="title font-[700] text-[26px] mb-[20px]">
                            {{ t('main.section2.part1.desc.1.title') }}
                        </h1>
                        <p class="font-[700] text-[20px] mb-[10px]">
                            {{ t('main.section2.part1.desc.1.desc') }}
                        </p>
                    </div>
                    <div>
                        <img src="@/assets/images/main/section02/rank.png" alt="rank"
                            class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="tourism w-[632px] h-[780px] flex flex-col justify-between items-center">
                    <div class="flex flex-col justify-center items-start w-full">
                        <h1 class="title font-[700] text-[26px] mb-[20px]">
                            {{ t('main.section2.part1.desc.2.title') }}
                        </h1>
                        <p class="font-[700] text-[20px] mb-[10px]">
                            {{ t('main.section2.part1.desc.2.desc') }}
                        </p>
                    </div>
                    <div>
                        <img src="@/assets/images/main/section02/tourism.png" alt="rank"
                            class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
            <div class="font-[400] text-[1.5rem]">
                <h1 class="font-[700] text-[26px] mb-[45px]">
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