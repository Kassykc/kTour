<template>
    <div class="file-list">
        <div v-for="(file, index) in files" :key="index" class="file-item">
            <span class="file-name">{{ file.fileNameOrg || file.fileName }}</span>
            <span class="del-btn" @click="emit('remove-file', index)">
                <img src="@/assets/images/x.png" alt="삭제 버튼" class="delete-img" />
            </span>

            <AdminCommonBoardFilePreview v-if="isThumbnail" :file="file" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { FileInfo } from '@/types/admin/board';

defineProps<{ files: FileInfo[], isThumbnail?: boolean }>();
const emit = defineEmits(['remove-file']);
</script>

<style lang="scss" scoped>
.file-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.file-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.del-btn {
    cursor: pointer;
}
</style>
