<template>
    <div>
        <div class="day1 flex flex-col md:flex-row gap-0 md:gap-[30px] mb-[20px]">
            <div 
                class="day w-[82px] py-[10px] md:pt-[30px] text-center text-[15px] sm:text-[20px] font-[800] shrink-0"
                :class="{'bg-[#DAE9FF]': dayColor === 'day1', 'bg-[#5E91FF]': dayColor === 'day2'}"    
            >
                {{ day }}
            </div>
            <div class="tour_timeline flex flex-col">
                <div 
                    class="tour_name py-[20px] text-[22px] sm:text-[28px] font-[700]"
                    :class="{'text-[#6D97D4]': dayColor === 'day1', 'text-[#5E91FF]': dayColor === 'day2'}"    
                >
                    {{ dayTitle }}
                </div>
                <div class="tour_details px-[20px] py-[10px] border-l border-[#000]">
                    <div class="tour_img_area w-full h-full md:w-[660px] md:h-[340px] mb-[40px]">
                        <img :src="dayImage" alt="" class="w-full h-full oject-cover">
                    </div>
                    <div class="timeline flex flex-col items-start justify-center gap-[30px]">
                        <div v-for="(part, index) in dayDesc" :key="index" class="part flex-col sm:flex-row flex gap-[10px] sm:gap-0 justify-start items-start">
                            <div class="time w-[160px] text-[18px] sm:text-[20px] font-[700] flex-0 relative">
                                <span class="absolute left-[-26px] top-1/2 transform -translate-y-1/2 w-[10px] h-[10px] bg-black rounded-full"></span>
                                    {{ part.time }}
                            </div>
                            <div class="cont flex-1">
                                <div class="tit text-[18px] sm:text-[20px] font-[600]">
                                    {{ part.title }}
                                </div>
                                <div class="desc text-[16px] sm:text-[18px]">
                                    {{ part.desc }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'

import { defineProps } from 'vue'

// Props 받아오기
const props = defineProps({
    day: {
        type: String,
        required: true
    },
    dayTitle: {
        type: String,
        required: true
    },
    dayImage: {
        type: String,
        required: true
    },
    dayDesc: {
        type: Array,
        required: true
    },
    dayColor: {
        type: String,
        required: true
    },
})

</script>
<style lang="">
    
</style>