<template>
    <div class="file-uploader">
        <input type="file" multiple @change="handleFileChange" />
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['files-added']);

const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        const newFiles = Array.from(target.files).map(file => ({
            fileName: file.name,
            fileNameOrg: file.name,
            file
        }));
        emit('files-added', newFiles);
    }
};
</script>

<style lang="scss" scoped>
.file-uploader {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
