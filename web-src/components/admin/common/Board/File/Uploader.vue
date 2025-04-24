<template>
    <div class="file-uploader input_file w-auto">
        <input type="file" multiple @change="handleFileChange"  class="w-[170px] sm:w-full whitespace-nowrap overflow-hidden text-ellipsis"/>
    </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import type { FileInfo } from '@/types/admin/board';

const props = defineProps<{
    modelValue: FileInfo[];
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: FileInfo[]): void;
}>();

const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        const newFiles = Array.from(target.files).map(file => ({
            fileName: file.name,
            fileNameOrg: file.name,
            file
        }));

        // 기존 modelValue에 새 파일 추가해서 업데이트
        emit('update:modelValue', [...props.modelValue, ...newFiles]);
    }
};
</script>

<style lang="scss" scoped>
</style>
