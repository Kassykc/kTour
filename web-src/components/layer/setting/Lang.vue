<template>
    <div class="layer_setting_lang">
        <img src="@/assets/images/LayerLoginIntroImage.png" alt="login intro img" class="img" />
        <div @click="emit('close')" class="btn_close">
            <IconClose />
        </div>
        <div class="title">
            <div class="text">{{ $t("LayerLanguageSelector.name") }}</div>
        </div>
        <div class="list">
            <div @click="selectFilter('en')" class="menu">
                <div class="icon">
                    <IconCheck v-if="isCheck == 'en'" class="icon_check" />
                </div>
                <div class="name">
                    {{ $t('LANGS.EN') }}
                </div>
            </div>
            <div @click="selectFilter('id')" class="menu">
                <div class="icon">
                    <IconCheck v-if="isCheck == 'id'" class="icon_check" />
                </div>
                <div class="name">
                    {{ $t('LANGS.ID') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentLocale, setLocale } from "@/plugins/i18n";

const emit = defineEmits();
const isCheck = ref(); // 초기 선택 필터 값

// 필터 선택 이벤트 핸들러
const selectFilter = (filter: string) => {
    isCheck.value = filter; // 선택된 필터 업데이트
    common.setLang(filter);
    if (common.getOS() != '300') { native.subscribeTopic(common.getLang()); }

    const cookieLang = common.getCookie("lang"); // 쿠키에서 현재 언어 가져오기
    const currentLocale = getCurrentLocale(); // 현재 i18n 언어 가져오기

    if (cookieLang && cookieLang !== currentLocale) {
        // 쿠키와 i18n 언어가 다르면 동기화
        if (["en", "id"].includes(cookieLang)) {
            setLocale(cookieLang); // i18n 언어 업데이트
            console.log(`Locale synced with cookie: ${cookieLang}`);
        } else {
            console.warn(`Invalid language in cookie: ${cookieLang}`);
        }
    }

    emit('close'); // 팝업 닫기
};


onMounted(() => {
    isCheck.value = common.getLang();
    // console.log('is : ', isCheck.value)
});
</script>

<style lang="scss" scoped>
.layer_setting_lang {
    @include flexbox(flex-start, flex-start);
    flex-direction: column;
    padding: 4rem 2rem 3rem;
    text-align: left;
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

    .title {
        @include flexbox(center, flex-start);
        gap: 1.2rem;
        width: 100%;
        margin-bottom: 1.5rem;

        .icon {
            width: 20px;
        }

        .text {
            font-size: 0.86em;
            color: $color-grey-text;
            font-weight: 600;
        }
    }

    .list {
        width: 100%;

        .menu {
            @include flexbox(center, flex-start);
            gap: 1.2rem;
            margin-top: 1.5rem;
            cursor: pointer;

            .icon {
                width: 20px;
            }

            .name {
                font-size: 0.86em;
                color: $color-grey-text;
            }
        }
    }
}
</style>