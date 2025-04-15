<template>
    <div class="notice_viewer wrapper">
        <div class="date">
            {{ common.DDMMYYYY(initialData.notice.insertDt, ".") }}
        </div>
        <swiper v-if="initialData.imageList && initialData.imageList.length" :centeredSlides="true" :slidePerView="1" :speed="500" :navigation="true" :pagination="paginationSetting" :modules="modules" class="notice_images_slider">
            <swiper-slide v-for="(item, idx) in initialData.imageList" :key="idx">
                <img :src="item.noticeAttachUrl" :alt="item.noticeAttachNm" />
            </swiper-slide>
        </swiper>
        <div class="title">
            {{ initialData.notice.noticeTitle }}
        </div>
        <div class="content">
            {{ initialData.notice.noticeDesc }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { noticeDtlResponse } from '@/types/notice/notice';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// props 정의
const props = defineProps<{
    initialData: noticeDtlResponse; // ApiResponse 타입을 사용하여 모든 필드 포함
}>();

// swiper 옵션
const modules = [ Autoplay, Pagination, Navigation ];
const paginationSetting = {
    clickable: true
};
</script>

<style lang="scss" scoped>
.notice_viewer {
    padding: 2rem 1rem;
    font-size: 0.86em;
    line-height: 1.5;
    color: $color-grey-text;

    .date {
        margin-bottom: 1.2rem;
    }

    .notice_images_slider {
        @include flexCenter;
        width: 100%;
        height: 300px;
        margin-bottom: 1.2rem;
        overflow: hidden;

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: auto;
            height: auto;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: center;
                border-radius: 10px;
                background: #f4f4f4;
            }
        }
    }

    .title {
        font-weight: 700;
    }

    .content {
        margin-top: 5px;
        white-space: pre-wrap;
    }
}
</style>
