<template>
    <div class="flex items-center">
        <div v-for="locale in availableLocales" :key="locale">
            <img :src="`/img/languageSwitch/${locale}.png`" @click="changeLanguage(locale)"
                class="px-3 py-1 rounded-md text-sm cursor-pointer" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getCurrentLocale, setLocale } from '@/plugins/i18n'

// 지원 언어 목록
const availableLocales = ['ko', 'en', 'id']

// 현재 언어
const currentLocale = computed(() => getCurrentLocale())

// 언어 이름 표시용 레이블
const getLabel = (locale: string): string => {
    switch (locale) {
        case 'ko': return '한국어'
        case 'en': return 'English'
        case 'id': return 'Bahasa'
        default: return locale
    }
}

// 언어 변경
const changeLanguage = (locale: string) => {
    if (locale !== currentLocale.value) {
        setLocale(locale)
    }
}
</script>

<style scoped>
button {
    transition: all 0.2s;
}
</style>