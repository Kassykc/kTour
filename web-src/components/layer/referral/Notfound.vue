<template>
    <div class="layer_referral_notfound">
        <div @click="emit('close')" class="btn_close">
            <IconClose />
        </div>
        <div class="content">
            <img src="@/assets/images/LayerLoginFail.png" alt="login intro img" class="img" />
            <div class="text">{{ $t("LayerSignUpRecommendNotFound.title") }}</div>
            <div class="subtext"> {{ $t("LayerSignUpRecommendNotFound.text") }} </div>
        </div>
        <div @click="goRetry" class="btn close">{{ $t("LayerSignUpRecommendNotFound.close") }}</div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const emit = defineEmits();

const goRetry = () => {
    emit('close');
};
</script>

<style lang="scss" scoped>
.layer_referral_notfound {
    display: flex;
    flex-direction: column;
    min-height: 70vh;
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

    .content {
        @include flexCenter;
        flex-direction: column;
        flex: 1;
        margin-bottom: 2rem;

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
    }

    .btn {
        @include flexCenter;
        width: 100%;
        height: 50px;
        margin-top: auto;
        font-size: 0.86em;
        font-weight: 700;
        border-radius: 25px;
        cursor: pointer;

        &.close {
            color: $color-white-000;
            background: $color-main-blue;
        }
    }
}
</style>