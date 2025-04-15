<template>
    <div class="flex items-center gap-2">
        <button v-for="locale in availableLocales" :key="locale" :class="[
            'px-3 py-1 rounded-md text-sm',
            currentLocale === locale ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
        ]" @click="changeLanguage(locale)">
            {{ getLabel(locale) }}
        </button>
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