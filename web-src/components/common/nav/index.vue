<template>
    <div class="flex h-full gap-x-10 min-w-[250px] h-full">
        <div v-for="(item, index) in menus" :key="index"
            class="flex items-center justify-center cursor-pointer text-[1rem] pt-[5px] h-full border-b-[3px] font-[600]"
            @mouseenter="$emit('hover', index)" @mouseleave="$emit('leave')" :class="[
                activeNav === index
                    ? 'text-[#F57E1F] border-[#F57E1F]'
                    : isHoveredHeader
                        ? 'text-black border-transparent'
                        : 'text-white border-transparent',
                'hover:text-[#F57E1F] hover:border-[#F57E1F]'
            ]" @click="$emit('select', index)">
            {{ t(item.titlePath) }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'

defineProps<{
    isHoveredHeader: boolean
    activeNav: number | null
}>()

defineEmits(['select'])

const menus = [
    { titlePath: 'menu.1.name', url: '/' },
    { titlePath: 'menu.2.name', url: '/' },
    { titlePath: 'menu.3.name', url: '/' },
    // { titlePath: 'menu.4.name', url: '/' },
    // { titlePath: 'menu.5.name'), url: '/' },
    { titlePath: 'menu.6.name', url: '/' },
]
</script>
