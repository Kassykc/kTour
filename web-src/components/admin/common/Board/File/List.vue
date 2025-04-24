<template>
    <div class="file-list file_item_wrap !py-[10px] !px-0">
        <div v-for="(file, index) in files" :key="index" class="file-item flex items-center justify-start flex-wrap" v-if="props.files && props.files.length > 0">
            <span class="file-name w-auto max-w-[190px] whitespace-nowrap overflow-hidden text-ellipsis">{{ getName(file) }}</span>
            <span class="del_btn flex justify-center items-center w-[12px] h-[12px] cursor-pointer !ml-[4px]" @click="emit('remove-file', index)">
                <img src="@/assets/images/x.png" alt="삭제 버튼" class="delete_img w-full" />
            </span>

            <AdminCommonBoardFilePreview v-if="isThumbnail" :file="file" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FileInfo } from '@/types/admin/board';

const props = defineProps<{ files: any[], isThumbnail?: boolean }>();
const emit = defineEmits(['remove-file']);

const getName = (file: any) => {
    return file.fileNameOrg ? file.fileNameOrg : file.fileName ? file.fileName : ""; 
}
</script>

<style lang="scss" scoped>

</style>
