<template>
    <div v-if="popups.length > 0">
        <div v-for="popup in popups" :key="popup.id" class="popup-backdrop">
            <div class="popup-content" @click.stop>
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
.popup-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    // display: flex;
    // justify-content: center;
    // align-items: center;

    .popup-content {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 999;
        width: 80vw;
        max-width: 500px;
        max-height: 80vh;
        text-align: center;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        overflow-y: auto;
        transform: translate(-50%, -50%);
    }
}
</style>
