<template>
    <div v-if="guides.length > 0">
        <div v-for="guide in guides" :key="guide.id" class="layer_guide">
            <!-- 언어설정이 'en'인 경우 -->
            <div v-if="getLang == 'en'" class="slider">
                <swiper class="slides" :resistance-ratio="0" :loop="false" @slideChange="updateSlideStatus">
                    <swiper-slide class="slide">
                        <img src="/assets/images/guide_en01.jpg" alt="Guide Image 1">
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <img src="/assets/images/guide_en02.jpg" alt="Guide Image 2">
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <img src="/assets/images/guide_en03.jpg" alt="Guide Image 3">
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <img src="/assets/images/guide_en04.jpg" alt="Guide Image 4">
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <img src="/assets/images/guide_en05.jpg" alt="Guide Image 5">
                    </swiper-slide>
                </swiper>
            </div>
            <!-- 언어설정이 'id'인 경우 (현재는 'en' 아니면 'id' 설정밖에 없음. 언어가 추가되면 조건문 수정 필요) -->
            <div v-else class="slider">
                <swiper class="slides" :resistance-ratio="0" @slideChange="updateSlideStatus">
                    <swiper-slide class="slide">
                        <img src="/assets/images/guide_id01.jpg" alt="Guide Image 1">
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <img src="/assets/images/guide_id02.jpg" alt="Guide Image 2">
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <img src="/assets/images/guide_id03.jpg" alt="Guide Image 3">
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <img src="/assets/images/guide_id04.jpg" alt="Guide Image 4">
                    </swiper-slide>
                    <swiper-slide class="slide">
                        <img src="/assets/images/guide_id05.jpg" alt="Guide Image 5">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="close" :class="{ 'show': isLastSlide }" @click="close(guide.id)">
                <IconClose fill="#0047A0" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGuide } from "@/composables/layerPopup/useGuide";
import { Swiper, SwiperSlide } from 'swiper/vue';

const router = useRouter();
const { guides, closeGuide } = useGuide();

const isLastSlide = ref(false);

const getLang = computed(() => common.getLang());

// 슬라이드 상태 업데이트
const updateSlideStatus = (swiper: any) => {
    isLastSlide.value = swiper.isEnd;
};

const close = (id: number) => {
    closeGuide(id);
    isLastSlide.value = false;
    router.push('/signup');
};
</script>

<style lang="scss" scoped>
.layer_guide {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
    background: #F9F9F9;

    .slider {
        @include flexCenter;
        width: 100%;
        height: 100%;

        .slides {
            display: flex;
            transition: transform 0.5s ease-in-out;

            .slide {
                @include flexCenter;
                min-width: 100vw;
                min-height: 100vh;

                img {
                    display: block;
                    max-width: 100%;
                    max-height: 100vh;
                    width: auto;
                    height: auto;
                }
            }
        }
    }

    .close {
        position: absolute;
        top: 16px;
        right: 16px;
        display: inline-block;
        cursor: pointer;
        z-index: 10;
        opacity: 0;
        pointer-events: none;

        &.show {
            opacity: 1;
            transition: all .5s ease-in-out;
            pointer-events: auto;
        }
    }
}
</style>