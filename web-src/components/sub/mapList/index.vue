<template>

        <div v-for="(mapItem, index) in mapBlocks" :key="index" class="map w-[638px]">
            <!-- 타이틀 영역 -->
            <div class="title flex justify-start items-center gap-[20px] font-[700] text-[25px] mb-[30px]">
                <p>{{ t(mapItem.title) }}</p>
                <p>{{ t(mapItem.manager) }}</p>
            </div>
    
            <!-- 지도 영역 -->
            <div class="map w-[638px] h-[422px] mb-[50px]">
                <iframe 
                    :src="mapItem.src" 
                    width="638" 
                    height="422" 
                    style="border:0;" 
                    allowfullscreen 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
    
            <!-- 정보 영역 -->
            <div class="info flex flex-col justify-start items-start gap-[20px]">
                <div v-for="(info, idx) in mapItem.infoData" :key="idx" class="flex justify-start items-start">
                    <div class="tit flex-0 w-[164px] flex justify-start items-center gap-[12px] text-[25px] font-[700]">
                        <img :src="info.icon" alt="" />
                        {{ t(info.label) }}
                    </div>
                    <div class="cont flex-1 w-full text-[20px]">
                        <div v-for="(contentItem, contentIndex) in info.content" :key="contentIndex">
                            {{ t(contentItem) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'

import icon01 from '@/assets/images/sub/inquiry/distance.png'
import icon02 from '@/assets/images/sub/inquiry/mail.png'
import icon03 from '@/assets/images/sub/inquiry/call.png'

// 여러 개의 map + info 묶음 배열
const mapBlocks = [
    {
        title: 'contactUs.Inquiries.inni.title',
        manager: 'contactUs.Inquiries.inni.manager',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1396413524037!2d106.80985784799542!3d-6.226861028027404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1574b766a1b%3A0xa9ac4a66b9a9b96e!2sJl.%20Jend.%20Sudirman%20No.Kav%2052-53%2C%20RT.4%2FRW.1%2C%20Senayan%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012190%2C%20Indonesia!5e0!3m2!1sen!2skr!4v1747393399787!5m2!1sen!2skr', // 첫 번째 지도 주소
        infoData: [
        {
            label: 'Location',
            icon: icon01,
            content: [
            'contactUs.Inquiries.inni.site.name',
            'contactUs.Inquiries.inni.site.address'
            ]
        },
        {
            label: 'Email',
            icon: icon02,
            content: ['contactUs.Inquiries.inni.email']
        },
        {
            label: 'Phone',
            icon: icon03,
            content: ['contactUs.Inquiries.inni.phone']
        }
        ]
    },
    {
        title: 'contactUs.Inquiries.korea.title',
        manager: 'contactUs.Inquiries.korea.manager',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.350462840224!2d126.76446177630045!3d37.66447201850563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c855b9707d1d3%3A0x17347b2ae75e0217!2s43-55%20Mugunghwa-ro%2C%20Ilsandong-gu%2C%20Goyang-si%2C%20Gyeonggi-do!5e0!3m2!1sen!2skr!4v1747395885518!5m2!1sen!2skr', // 두 번째 지도 주소
        infoData: [
        {
            label: 'Location',
            icon: icon01,
            content: [
            'contactUs.Inquiries.korea.site.name',
            'contactUs.Inquiries.korea.site.address'
            ]
        },
        {
            label: 'Email',
            icon: icon02,
            content: ['contactUs.Inquiries.korea.email']
        },
        {
            label: 'Phone',
            icon: icon03,
            content: ['contactUs.Inquiries.korea.phone']
        }
        ]
    }
  // 필요한 만큼 추가
]
</script>

<style lang="">

</style>
