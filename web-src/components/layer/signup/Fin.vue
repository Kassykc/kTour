<template>
    <div class="layer_signup_fin">
        <div @click="emit('close')" class="btn_close">
            <IconClose />
        </div>
        <img src="@/assets/images/LayerLoginSuccess.png" alt="login intro img" class="img" />
        <div class="text">{{ $t('LayerSignUpSuccess.title') }}</div>
        <div v-html="$t('LayerSignUpSuccess.text')" class="subtext"></div>
        <div class="buttons">
            <div @click="goInfo" class="button info">{{ $t('LayerSignUpSuccess.button_1') }}</div>
            <div @click="goMain" class="button main">{{ $t('LayerSignUpSuccess.button_2') }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const emit = defineEmits();

const goInfo = () => {
    router.push('/account');
    emit('close');
}

const goMain = () => {
    router.push('/');
    emit('close');
}
</script>

<style lang="scss" scoped>
.layer_signup_fin {
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

            &.info {
                color: $color-white-000;
                background: $color-main-blue;
            }

            &.main {
                border: 1px solid $color-main-blue;
                background: $color-white-000;
                color: $color-main-blue;
            }
        }
    }
}
</style>