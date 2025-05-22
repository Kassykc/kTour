<template>
    <div class="flex items-center">
        <img 
            :src="props.isHeaderActive 
            ? '/img/languageSwitch/language_switch_icon_b.png' 
            : '/img/languageSwitch/language_switch_icon.png'"
            class="pr-1  sm:pr-5 py-1 rounded-md w-[26px] sm:w-auto" 
        />
        <div v-for="locale in availableLocales" :key="locale" class="">
            <img 
                :src="currentLocale == locale
                ? `/img/languageSwitch/${locale}_chk.png`
                : `/img/languageSwitch/${locale}.png`"
                @click="changeLanguage(locale)"
                class="px-1 py-1 rounded-md text-sm cursor-pointer w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]" 
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getCurrentLocale, setLocale } from '@/plugins/i18n'

const props = defineProps({
    isHeaderActive: {
        type: Boolean,
        default: false
    }
})

// 지원 언어 목록
// const availableLocales = ['ko', 'en', 'id']
const availableLocales = ['en', 'id']

// 현재 언어
const currentLocale = computed(() => getCurrentLocale())

// 언어 이름 표시용 레이블
const getLabel = (locale: string): string => {
    switch (locale) {
        // case 'ko': return '한국어'
        case 'en': return 'English'
        case 'id': return 'Bahasa'
        default: return locale
    }
}

// 언어 변경
const changeLanguage = (locale: string) => {
    if (locale !== currentLocale.value) {
        setLocale(locale)
        currentLang.value = locale
    }
}

const currentLang = ref('en')

</script>

<style scoped>
button {
    transition: all 0.2s;
}
</style>