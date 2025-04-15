<template>
    <div class="layer_setting_delete_account">
        <div @click="emit('close')" class="btn_close">
            <IconClose />
        </div>
        <img src="@/assets/images/LayerLoginFail.png" alt="login intro img" class="img" />
        <div class="text">{{ $t("LayerWithdrawConfirm.title") }}</div>
        <div v-html="$t('LayerWithdrawConfirm.text')" class="subtext"> </div>
        <div @click="goCancel" class="btn cancel">{{ $t("LayerWithdrawConfirm.button1") }}</div>
        <div @click="goDel" class="btn delete">{{ $t("LayerWithdrawConfirm.button2") }}</div>
    </div>
</template>

<script setup lang="ts">
import { accountStore } from '@/stores/account/accountStore';
import LayerSettingDeleteAccountFin from '@/components/layer/setting/deleteAccountFin.vue'
import { usePopup } from '@/composables/layerPopup/usePopup';

const useAccountStore = accountStore('deleteAccount');
const { openPopup } = usePopup();
const emit = defineEmits();

const goDel = async () => {
    await useAccountStore.deleteMemberAccount();
    if (useAccountStore.apiResponse.rsltTp == 'R000') {
        emit('close');
        openPopup(LayerSettingDeleteAccountFin);
    }
}

const goCancel = () => {
    emit('close');
}
</script>

<style lang="scss" scoped>
.layer_setting_delete_account {
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem 3rem;
    text-align: center;
    position: relative;

    .btn_close {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        padding: 1.2rem 1rem;
        cursor: pointer;

        >svg {
            fill: $color-grey-text;
        }
    }

    .img {
        display: block;
        margin: 0 auto;
        width: 210px;
    }

    .text {
        margin-top: 1.2rem;
        font-size: 1.2em;
        font-weight: 700;
        color: $color-grey-text;
    }

    .subtext {
        margin: 0.5rem 0;
        font-size: 0.8em;
        color: $color-grey-text;
    }

    .btn {
        @include flexCenter;
        width: 100%;
        height: 50px;
        margin-top: 1rem;
        font-size: 0.86em;
        font-weight: 700;
        border-radius: 25px;
        cursor: pointer;

        &.cancel {
            color: $color-white-000;
            background: $color-main-blue;
        }

        &.delete {
            border: 1px solid $color-main-blue;
            background: $color-white-000;
            color: $color-main-blue;
        }
    }
}
</style>