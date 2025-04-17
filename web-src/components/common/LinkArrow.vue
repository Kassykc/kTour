<template>
    <svg :style="{ color: color }" viewBox="0 0 30 31" xmlns="http://www.w3.org/2000/svg">
        <mask id="arrow-mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="31">
            <rect x="0.00341797" y="0.865234" width="30" height="30" fill="#D9D9D9" />
        </mask>
        <g mask="url(#arrow-mask)">
            <path
                d="M7.87123 22.9205L6.56592 21.6152L18.8665 9.30273H7.68373V7.42773H22.0587V21.8027H20.1837V10.6199L7.87123 22.9205Z"
                fill="currentColor" />
        </g>
    </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
    color?: string
}>()

const color = props.color ?? '#000'
</script>