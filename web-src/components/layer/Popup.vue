<template>
    <div v-if="popups.length > 0">
        <div v-for="popup in popups" :key="popup.id" class="popup-backdrop fixed top-0 left-0 z-[999] w-full h-full bg-black/50 flex justify-center items-center">
            <div class="popup-content flex justify-center items-center sm:block fixed top-1/2 left-1/2 z-[999] w-[100vw] sm:w-[80vw] max-w-[1100px] h-[100vh] max-h-[100vh] sm:h-auto sm:max-h-[80vh] text-center bg-white rounded-0 sm:rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] overflow-y-scroll sm:overflow-y-auto -translate-x-1/2 -translate-y-1/2 !pt-[100px] !pb-[10px] !pl-[20px] !pr-[10px] sm:!p-[20px]" @click.stop>
                <component :is="popup.component" v-bind="popup.props" @close="close(popup.id)" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePopup } from '@/composables/layerPopup/usePopup';

const { popups, closePopup } = usePopup();

const close = (id: number) => {
    closePopup(id);
};
</script>

<style lang="scss" scoped>
</style>
