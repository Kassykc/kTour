<template>
    <div class="thumbnail-preview">
        <img :src="getPreviewUrl(file)" class="thumbnail-img" alt="썸네일 미리보기" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { FileInfo } from '@/types/admin/board';

const props = defineProps<{ file: FileInfo }>();

const getPreviewUrl = (fileInfo: FileInfo) => {
    return fileInfo.file ? URL.createObjectURL(fileInfo.file) : '';
};
</script>

<style lang="scss" scoped>
</style>
