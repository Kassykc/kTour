<template>
    <div class="thumb">
        <img :src="imageUrl" :alt="altText" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    imageUrl: {
        type: String,
        required: true,
    },
    altText: {
        type: String,
        required: true,
    },
});
</script>
