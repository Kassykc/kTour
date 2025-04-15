<template>
    <div class="layer_setting_delete_account_fin">
        <div @click="emit('close')" class="btn_close">
            <IconClose />
        </div>
        <img src="@/assets/images/LayerWithdrawSuccess.png" alt="login intro img" class="img" />
        <div class="text">{{ $t("LayerWithdrawSuccess.title") }}</div>
        <div class="subtext" v-html="$t('LayerWithdrawSuccess.text')"></div>

        <div class="btn ok" @click="goMain">
            {{ $t("LayerWithdrawSuccess.button") }}
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits();
const router = useRouter();

const goMain = () => {
    router.push('/');
    emit('close');
}
</script>

<style lang="scss" scoped>
.layer_setting_delete_account_fin {
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

        &.ok {
            color: $color-white-000;
            background: $color-main-blue;
        }
    }
}
</style>