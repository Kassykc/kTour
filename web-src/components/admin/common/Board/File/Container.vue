<template>
    <div class="flex justify-center">
        <div class="w-full max-w-md space-y-4">
            <input type="file" :multiple="isAttFile" @change="handleFileChange"
                :accept="isAttFile ? '*' : '.jpg,.jpeg,.png,.webp'" />

            <Draggable v-model="files" item-key="name" class="file-list flex gap-4 mt-4 overflow-x-auto"
                direction="horizontal" @update:modelValue="emitFilesUpdate">
                <template #item="{ element, index }">
                    <div class="file-item flex flex-col items-center">
                        <div v-if="isImage(element)" class="image-preview mb-2">
                            <img :src="getFilePreviewUrl(element)" alt="preview"
                                class="w-24 h-24 object-cover rounded-md" />
                        </div>
                        <div v-else class="image-preview mb-2">
                            <img :src="fileBaseUrl + element.filePathEnc" alt="preview"
                                class="w-24 h-24 object-cover rounded-md" />
                        </div>
                        <span class="file-name text-sm text-gray-700 truncate w-24 text-center"
                            v-if="isImage(element)">{{ element.name
                            }}</span>
                        <span class="file-name text-sm text-gray-700 truncate w-24 text-center"
                            v-else-if="element.fileNameOrg">{{
                                element.fileNameOrg
                            }}</span>
                        <span class="file-name text-sm text-gray-700 truncate w-24 text-center" v-else>{{
                            element.name
                            }}</span>
                        <button @click="removeFile(index)" class="text-red-500 mt-1 hover:text-red-700 transition-all"
                            v-if="props.isAttFile">삭제</button>
                        <span v-if="!props.isAttFile">변경 시 신규 파일을 첨부하세요.</span>
                    </div>
                </template>
            </Draggable>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';
import Draggable from 'vue3-draggable-next';

const props = defineProps({
    files: {
        type: Array as PropType<File[]>,
        default: () => [],
    },
    mode: String,
    isAttFile: Boolean
});

const fileBaseUrl = apiBase.url() + "/_file/000/";
const files = ref<File[]>(props.files);
const emit = defineEmits(['update:files']);

const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        if (!props.isAttFile) {
            files.value = [target.files[0]];
        } else {
            Array.from(target.files).forEach((file) => {
                files.value.push(file);
            });
        }
        emitFilesUpdate(files.value);
    }
};

const isImage = (file: File) => {
    return file?.type?.startsWith('image/');
};

const getFilePreviewUrl = (file: File) => {
    return URL.createObjectURL(file);
};

const removeFile = (index: number) => {
    files.value.splice(index, 1);
    emitFilesUpdate(files.value);
};

const emitFilesUpdate = (updatedFiles: File[]) => {
    emit('update:files', updatedFiles);
};

watch(() => props.files, (newFiles) => {
    files.value = newFiles;
});
</script>
