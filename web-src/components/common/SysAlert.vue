<template>
    <div v-if="show" class="common_sys_alert_modal fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[9999]">
        <!-- 배경 클릭 시 모달이 닫히지 않도록 설정 -->
        <div class="modal_overlay absolute top-0 left-0 right-0 bottom-0 bg-black/50" @click="handleOverlayClick"></div>
        <div class="modal_content flex flex-col w-[70vw] max-w-[500px] !pt-[4rem] !px-[2rem] !pb-[2rem] bg-white rounded-[8px] text-center relative" @click.stop>
            <div v-if="isHtml">{{ message }}</div>
            <div v-if="!isHtml" v-html="message"></div>
            <div class="modal_buttons flex justify-center items-center flex-col gap-[0.5rem] !mt-auto !pt-[3rem]">
                <div @click="handleOk" class="btn ok flex justify-center items-center w-full h-[50px] rounded-[25px] text-[0.85em] font-[700] cursor-pointer text-white bg-[#5e0088]">{{ okText }}</div>
                <!-- confirm일 때만 cancel 버튼을 추가 -->
                <div v-if="cancelText" @click="handleCancel" class="btn cancel flex justify-center items-center w-full h-[50px] rounded-[25px] text-[0.85em] font-[700] cursor-pointer text-[#5e0088] border border-[#5e0088] bg-white">{{ cancelText }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

// Props 정의
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    message: {
        type: String,
        default: ''
    },
    okText: {
        type: String,
        default: '확인'
    },
    cancelText: {
        type: String,
        default: ''
    },
    isHtml: {
        type: Boolean,
        default: false
    }
});

// Emits 정의
const emit = defineEmits(['close', 'ok', 'cancel']);

// 배경 클릭 시 모달 닫히지 않도록 처리
const handleOverlayClick = () => {
    // 배경 클릭 시 닫히지 않도록 아무 동작도 하지 않음
};

// OK 버튼 클릭 시 처리
const handleOk = () => {
    emit('ok');
    emit('close');
};

// Cancel 버튼 클릭 시 처리
const handleCancel = () => {
    emit('cancel');
    emit('close');
};
</script>

<style lang="scss" scoped>
.common_sys_alert_modal {
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // z-index: 9999;

    .modal_overlay {
        // position: absolute;
        // top: 0;
        // left: 0;
        // right: 0;
        // bottom: 0;
        // background-color: rgba(0, 0, 0, 0.5);
    }

    .modal_content {
        // display: flex;
        // flex-direction: column;
        // width: 70vw;
        // max-width: 500px;
        // padding: 4rem 2rem 2rem;
        // background-color: white;
        // border-radius: 8px;
        // text-align: center;
        // position: relative;

        .modal_buttons {
            // @include flexCenter;
            // flex-direction: column;
            // gap: 0.5rem;
            // margin-top: auto;
            // padding-top: 3rem;

            .btn {
                // @include flexCenter;
                // width: 100%;
                // height: 50px;
                // border-radius: 25px;
                // font-size: 0.85em;
                // font-weight: 700;
                // cursor: pointer;

                &.ok {
                    // color: $color-white-000;
                    // background: $art_buddy_btn_purple;
                }

                &.cancel {
                    // color: $art_buddy_btn_purple;
                    // background: $color-white-000;
                    // border: 1px solid $art_buddy_btn_purple;
                }
            }
        }
    }
}
</style>