<template>
    <div class="layer_referral_check">
        <div @click="closePopup" class="btn_close">
            <IconClose />
        </div>
        <div class="content">
            <div v-html="$t('LayerSignUpRecommendConfirm.text')" class="text"></div>
            <div class="row">
                <div class="label">{{ $t("LayerSignUpRecommendConfirm.row_label_1") }}</div>
                <div class="value">{{ props.info.memberReferralCode }}</div>
            </div>
            <div class="divider"></div>
            <div class="row">
                <div class="label">{{ $t("LayerSignUpRecommendConfirm.row_label_2") }}</div>
                <div class="value">{{ props.info.memberNm }}</div>
            </div>
            <div class="btn_wrap">
                <div @click="goConfirm" class="btn confirm">{{ $t("LayerSignUpRecommendConfirm.ok") }}</div>
                <div @click="closePopup" class="btn close">{{ $t("LayerSignUpRecommendConfirm.close") }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { accountRecommendResponse } from '@/types/accont-recommend/accountRecommend'
import { useSignupStore } from '@/stores/signup/signupStore'
import { usePopup } from '@/composables/layerPopup/usePopup';
import LayerReferralSave from '@/components/layer/referral/Save.vue'

const { openPopup } = usePopup();
const router = useRouter();
const props = defineProps<{ info: accountRecommendResponse, isFin: (fin: boolean) => void, cancel: () => void }>();
const emit = defineEmits();

const referralConfirmStore = useSignupStore('referralConfirm');

const goConfirm = async () => {
    const data = {
        memberReferralCode: props.info.memberReferralCode,
    }
    if (window.location.href.includes('signup')) {
        emit('close');
        common.setCookie('referralCode', props.info.memberReferralCode)
        props.isFin(true);

    } else {
        try {
            const response = await referralConfirmStore.saveReferral(data);
            if (response) {
                if (response.rsltTp == 'R000') {
                    emit('close');
                    openPopup(LayerReferralSave, { info: response.point });
                }
            }
        } catch (err) {
            console.error('SSR Data Fetch Error:', err);
            return null;
        }
    }

}

const closePopup = () => {
    emit('close');
    props.cancel();
};
</script>

<style lang="scss" scoped>
.layer_referral_check {
    height: 70vh;
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

    .text {
        margin: 1.2rem 0 2rem;
        font-size: 1.2em;
        font-weight: 700;
        color: $color-grey-text;
    }

    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: auto;

        /* IE, Edge */
        -ms-overflow-style: none;
        /* Firefox */
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }

        .row {
            @include flexbox(center, space-between);
            padding: 1rem 0.5rem;

            .label {
                font-size: 0.86em;
                color: $color-grey-text;
            }

            .value {
                font-size: 0.86em;
                font-weight: 700;
                color: $color-main-blue;
            }
        }

        .divider {
            height: 4px;
            background-color: $signup_referral_line;
            border-radius: 2px;
        }

        .btn_wrap {
            margin-top: auto;

            .btn {
                @include flexCenter;
                width: 100%;
                height: 50px;
                margin-top: 1rem;
                font-size: 0.86em;
                font-weight: 700;
                border-radius: 25px;
                cursor: pointer;

                &.confirm {
                    color: $color-white-000;
                    background: $color-main-blue;
                }

                &.close {
                    border: 1px solid $color-main-blue;
                    background: $color-white-000;
                    color: $color-main-blue;
                }
            }
        }
    }
}
</style>