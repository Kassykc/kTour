<template>
    <div class="file-upload-container">
        <AdminCommonBoardFileUploader @files-added="handleFilesAdded" />
        <AdminCommonBoardFileList :files="files" @remove-file="removeFile" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FileInfo } from '@/types/admin/board';

const files = ref<FileInfo[]>([]);

const handleFilesAdded = (newFiles: FileInfo[]) => {
    files.value = [...files.value, ...newFiles];
};

const removeFile = (index: number) => {
    files.value.splice(index, 1);
};
</script>

<style lang="scss" scoped>
.file-upload-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
