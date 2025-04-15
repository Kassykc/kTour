<template>
    <div class="layer_terms_policy">
        <div class="bg"></div>
        <div class="top">
            <div @click="emit('close')" class="btn_close">
                <IconClose />
            </div>
            <div class="title">Privacy policy</div>
        </div>
        <div v-html="info.termsDesc" class="content"></div>
    </div>
</template>

<script setup lang="ts">
import type { TermsResponse } from '@/types/terms/terms'

const emit = defineEmits();
const props = defineProps<{ info: TermsResponse }>();
const { info } = props;
</script>

<style lang="scss" scoped>
.layer_terms_policy {
    position: relative;
    height: 80vh;

    .bg {
        @include flexCenter;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 200px;
        background: linear-gradient(96.34deg, #2a71dc 0%, #173e78 100%);

        &::after {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 200px;
            background: url("@/assets/images/LoginViewCover.png") no-repeat;
            background-size: cover;
            content: "";
        }
    }

    .top {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;

        .btn_close {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
            padding: 1.2rem 1rem;
            color: $color-white-000;
            cursor: pointer;
        }

        .title {
            padding: 80px 0 96px;
            font-size: 1.2em;
            font-weight: 700;
            color: $color-white-000;
            position: relative;
        }
    }

    .content {
        position: absolute;
        top: 180px;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        padding: 2rem 1.2rem;
        font-size: 0.85em;
        font-weight: 400;
        text-align: left;
        white-space: pre-wrap;
        background-color: $color-white-000;
        border-radius: 1rem;
        overflow-y: auto;
        /* IE, Edge */
        -ms-overflow-style: none;
        /* Firefox */
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>