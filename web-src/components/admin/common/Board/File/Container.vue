<template>
    <div class="file-upload-container flex flex-row md:flex-col items-start md:items-center justify-start gap-0 md:gap-[10px] !p-[10px] md:!py-[10px] md:!px-0">
        <AdminCommonBoardFileUploader :model-value="files" @update:modelValue="handleFilesAdded" />
        <AdminCommonBoardFileList :files="files" @remove-file="removeFile" v-if="props.files && props.files.length > 0"/>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { FileInfo } from '@/types/admin/board';

const props = defineProps<{
    modelValue: FileInfo[];
    isThumbnail: boolean;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: FileInfo[]): void;
}>();

// 내부 관리용 ref
const files = ref<FileInfo[]>(props.modelValue || []);

watch(
    () => props.modelValue,
    (newVal) => {
        files.value = [...newVal];
    }
);

// 자식 → 부모 변경 emit
const handleFilesAdded = (newFiles: FileInfo[]) => {
    files.value = newFiles;
    emit('update:modelValue', files.value);
};

const removeFile = (index: number) => {
    files.value.splice(index, 1);
    emit('update:modelValue', files.value);
};
</script>
