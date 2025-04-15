<!-- ExcelDownloadButton.vue -->
<template>
    <div class="reg_btn_wrap">
        <div @click="download" class="reg_btn">엑셀 다운로드</div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits();

const download = () => {
    emit('download');
};
</script>

<style lang="scss" scoped>
.reg_btn_wrap {
    position: relative;
    top: 0;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    .reg_btn {
        width: 80px;
        color: $color_white_000;
        background: $color_admin_reg_btn;
        cursor: pointer;
        padding: 10px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 400;
        text-align: center;
    }
}
</style>