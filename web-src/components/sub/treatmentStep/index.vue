<template>
    <div class="flex flex-col sm:flex-row justify-center items-center flex-wrap 2xl:flex-nowrap gap-[8px]">
        <div
            class="step step1 w-full max-w-[400px] sm:w-[400px] h-fit sm:h-[750px] rounded-[20px] bg-[#eee] py-[40px] px-[20px] sm:px-[30px] text-[#3A3A3A] text-center flex flex-col justify-start items-center">
            <!-- {{ t('about.part4.title2') }} -->
            <div class="tit pb-[32px] border-b border-[#4D4D4D] font-[700] text-[26px] w-full">
                {{ t('about.part4.content2.1.title') }}<br />
                <span class=" font-[500] text-[20px]">{{ t('about.part4.content2.1.subtitle') }}</span>
            </div>
            <div class="cont pt-[32px] flex flex-col justify-start items-center gap-[30px] w-full">
                <div class="text-[20px] font-[700]">
                    📄<br />
                    {{ t('about.part4.content2.1.desc1') }}<br />
                    {{ t('about.part4.content2.1.desc2') }}
                    <span class="block text-[15px] font-[600] mt-[20px]">
                        {{ t('about.part4.content2.1.desc3') }}<br />
                        {{ t('about.part4.content2.1.desc4') }}
                    </span>
                </div>
                <div class="text-[20px] font-[700]">
                    ✈️<br />
                    {{ t('about.part4.content2.1.desc5') }}
                    <span class="block text-[15px] font-[600] mt-[20px]">
                        {{ t('about.part4.content2.1.desc6') }}<br />
                        {{ t('about.part4.content2.1.desc7') }}<br />
                        {{ t('about.part4.content2.1.desc8') }}
                    </span>
                </div>
            </div>
        </div>

        <div>
            <img src="@/assets/images/main/section01/arrow.png" alt="화살표"
                class="transform rotate-90 sm:rotate-0 transition-all duration-500 ease-in-out">
        </div>

        <div
            class="step step2 w-full max-w-[400px] sm:w-[400px] h-fit sm:h-[750px] rounded-[20px] bg-[#FFEEEE] py-[40px] px-[20px] sm:px-[30px] text-[#B23939] text-center flex flex-col justify-start items-center">
            <!-- {{ t('about.part4.title2') }} -->
            <div class="tit pb-[32px] border-b border-[#B23939] font-[700] text-[26px] w-full">
                {{ t('about.part4.content2.2.title') }}<br />
                <span class=" font-[500] text-[20px] text-[#3A3A3A]">{{ t('about.part4.content2.2.subtitle') }}</span>
            </div>
            <div class="cont pt-[32px] flex flex-col justify-start items-center gap-[30px] w-full">
                <div class="text-[20px] font-[700]">
                    🚗<br />
                    {{ t('about.part4.content2.2.desc1') }}<br />
                    {{ t('about.part4.content2.2.desc2') }}
                    <span class="block text-[15px] font-[600] mt-[20px] text-[#3A3A3A]">
                        {{ t('about.part4.content2.2.desc3') }}
                    </span>
                </div>
                <div class="text-[20px] font-[700]">
                    🗣️<br />
                    {{ t('about.part4.content2.2.desc4') }}<br />
                    <span class="block text-[15px] font-[600] mt-[20px] text-[#3A3A3A]">
                        {{ t('about.part4.content2.2.desc5') }}
                    </span>
                </div>
                <div class="text-[20px] font-[700]">
                    🍽️<br />
                    {{ t('about.part4.content2.2.desc6') }}<br />
                    <span class="block text-[15px] font-[600] mt-[20px] text-[#3A3A3A]">
                        {{ t('about.part4.content2.2.desc7') }}
                    </span>
                </div>
            </div>
        </div>

        <div>
            <img src="@/assets/images/main/section01/arrow.png" alt="화살표"
                class="transform rotate-90 sm:rotate-0 transition-all duration-500 ease-in-out">
        </div>

        <div
            class="step step3 w-full max-w-[400px] sm:w-[400px] h-fit sm:h-[750px] rounded-[20px] bg-[#DCE1F9] py-[40px] px-[20px] sm:px-[30px] text-[#46409F] text-center flex flex-col justify-start items-center">
            <!-- {{ t('about.part4.title2') }} -->
            <div class="tit pb-[32px] border-b border-[#46409F] font-[700] text-[26px] w-full">
                {{ t('about.part4.content2.3.title') }}<br />
                <span class=" font-[500] text-[20px] text-[#3A3A3A]">{{ t('about.part4.content2.3.subtitle') }}</span>
            </div>
            <div class="cont pt-[32px] flex flex-col justify-start items-center gap-[30px] w-full">
                <div class="text-[20px] font-[700]">
                    {{ t('about.part4.content2.3.icon1') }}<br />
                    {{ t('about.part4.content2.3.desc1') }}<br />
                    <span class="block text-[15px] font-[600] mt-[20px] text-[#3A3A3A]">
                        {{ t('about.part4.content2.3.desc2') }}<br />
                        {{ t('about.part4.content2.3.desc3') }}<br />
                        {{ t('about.part4.content2.3.desc4') }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'

</script>
<style lang="">

</style>