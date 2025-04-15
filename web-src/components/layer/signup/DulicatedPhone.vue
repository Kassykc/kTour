<template>
    <div class="layer_signup_dulicated_phone">
        <div @click="emit('close')" class="btn_close">
            <IconClose />
        </div>
        <img src="@/assets/images/LayerLoginFail.png" alt="sinup fail img" class="img" />
        <div class="text">{{ $t('LayerDulicatedPhone.title') }}</div>
        <div v-html="$t('LayerDulicatedPhone.text')" class="subtext"></div>
        <div class="buttons">
            <div @click="goLogin" class="button go_login">{{ $t('LayerDulicatedPhone.button') }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const emit = defineEmits();

const goLogin = () => {
    router.push('/login');
    emit('close');
}
</script>

<style lang="scss" scoped>
.layer_signup_dulicated_phone {
    display: flex;
    flex-direction: column;
    min-height: 65vh;
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

    .buttons {
        margin-top: auto;

        .button {
            @include flexCenter;
            width: 100%;
            height: 50px;
            margin-top: 1rem;
            font-size: 0.86em;
            font-weight: 700;
            border-radius: 25px;
            cursor: pointer;

            &.go_login {
                color: $color-white-000;
                background: $color-main-blue;
            }
        }
    }
}
</style>