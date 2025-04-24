<!-- RegisterButton.vue -->
<template>
    <div class="reg_btn_wrap">
        <div @click="register" class="reg_btn w-[80px] text-white bg-[#0047a0] cursor-pointer !p-[10px] rounded-[8px] text-[12px] font-[400] text-center">등록</div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits();

const register = () => {
    emit('register');
};
</script>

<style lang="scss" scoped>
.reg_btn_wrap {
    // position: relative;
    // top: 0;
    // right: 20px;
    // display: flex;
    // align-items: center;
    // justify-content: flex-end;
    // width: 100%;

    .reg_btn {
        // width: 80px;
        // color: $color_white_000;
        // background: $color_admin_reg_btn;
        // cursor: pointer;
        // padding: 10px;
        // border-radius: 8px;
        // font-size: 12px;
        // font-weight: 400;
        // text-align: center;
    }
}
</style>