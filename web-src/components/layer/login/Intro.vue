<template>
    <div class="layer_login_intro">
        <div @click="emit('close')" class="btn_close">
            <IconClose />
        </div>
        <img src="@/assets/images/LayerLoginIntroImage.png" alt="login intro img" class="img" />
        <div class="text">{{ $t("LayerLoginIntro.text") }}</div>
        <div v-html="$t('LayerLoginIntro.subtext')" class="subtext"> </div>
        <div @click="goLogin" class="btn login">{{ $t("LayerLoginIntro.login") }}</div>
        <div @click="goSignup" class="btn signup">{{ $t("LayerLoginIntro.signup") }}</div>
        <div v-if="common.getOS() != '300'" @click="showGuide" class="btn guide">
            <span>{{ $t("LayerLoginIntro.guide") }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGuide } from "@/composables/layerPopup/useGuide";

const { openGuide } = useGuide();

const router = useRouter();
const emit = defineEmits();

const goLogin = () => {
    router.push('/login');
    emit('close');
}

const goSignup = () => {
    router.push('/signup');
    emit('close');
}

const showGuide = () => {
    openGuide();
};
</script>

<style lang="scss" scoped>
.layer_login_intro {
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

        &.login {
            color: $color-white-000;
            background: $color-main-blue;
        }

        &.signup {
            border: 1px solid $color-main-blue;
            background: $color-white-000;
            color: $color-main-blue;
        }

        &.guide {
            margin-top: 0.3rem;

            span {
                padding-bottom: 5px;
                font-weight: 600;
                color: $color-grey-text;
                border-bottom: 1px solid #ccc;
            }
        }
    }
}
</style>