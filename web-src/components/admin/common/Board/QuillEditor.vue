<script setup lang="ts">
import { ref, watch, onMounted, defineProps, defineEmits, defineExpose } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import BlotFormatter from "@enzedonline/quill-blot-formatter2";

const editor = ref();

const props = defineProps({
    modelValue: String,
    placeholder: {
        type: String,
        default: "내용을 입력하세요...",
    },
});

const emit = defineEmits(["update:modelValue"]);

// onMounted에서 Quill 설정
onMounted(() => {
    if (editor.value?.getQuill) {
        const quill = editor.value.getQuill();

        quill.getModule("toolbar").addHandler("image", () => {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();

            input.onchange = () => {
                const file = input.files ? input.files[0] : null;
                if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const img = new Image();
                        img.onload = () => {
                            const canvas = document.createElement("canvas");
                            canvas.width = img.width;
                            canvas.height = img.height;
                            const ctx = canvas.getContext("2d");
                            if (ctx) {
                                ctx.drawImage(img, 0, 0);
                                const webpUrl = canvas.toDataURL("image/webp", 0.8);
                                const range = quill.getSelection();
                                if (range) {
                                    quill.insertEmbed(range.index, "image", webpUrl);
                                }
                            }
                        };
                        img.src = reader.result as string;
                    };
                    reader.readAsDataURL(file);
                }
            };
        });

        new BlotFormatter(quill);

        quill.getModule("toolbar").addHandler("align", (alignValue: any) => {
            const range = quill.getSelection();
            if (range) {
                const [leaf] = quill.getLeaf(range.index);
                if (leaf.domNode.tagName === "IMG") {
                    leaf.domNode.style.margin = "";
                    if (alignValue === "center") {
                        leaf.domNode.style.margin = "0 auto";
                    } else if (alignValue === "right") {
                        leaf.domNode.style.marginLeft = "auto";
                    } else {
                        leaf.domNode.style.marginRight = "auto";
                    }
                }
            }
        });
    }
});

// v-model을 위한 change 핸들러
function onContentChange(val: string) {
    emit("update:modelValue", val);
}

defineExpose({
    getEditor: () => editor.value?.getQuill(),
});
</script>

<template>
    <div class="editor-area !py-[10px] !px-0 !m-auto w-full">
        <QuillEditor ref="editor" :content="props.modelValue" @update:content="onContentChange" :contentType="'html'"
            :theme="'snow'" :toolbar="[
                ['bold', 'italic', 'underline'],
                [{ header: 1 }, { header: 2 }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ align: [] }],
                ['clean'],
                ['image']
            ]" :placeholder="placeholder" />
    </div>
</template>

<style scoped>
:deep(.ql-toolbar) {
    text-align: left;
}

:deep(.ql-editor) {
    height: 300px;
}

@media (max-width: 480px) {
    :deep(.ql-editor) {
        height: 200px;
    }
}
</style>
