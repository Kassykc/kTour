<template>
    <div class="delete_btn_wrap">
        <div @click="deleteItems" class="delete_btn">체크 삭제</div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (event: 'delete'): void;
}>();

const deleteItems = () => {
    emit('delete');
};
</script>

<style lang="scss" scoped>
.delete_btn_wrap {
    position: relative;
    top: 34px;
    right: 90px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 0 20px;
    z-index: 1;

    .delete_btn {
        width: 80px;
        color: $color_white_000;
        background: $color_admin_delete_btn;
        cursor: pointer;
        padding: 10px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 400;
        text-align: center;
    }
}
</style>
