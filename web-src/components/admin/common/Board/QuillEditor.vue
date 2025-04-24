<script setup lang="ts">
import { ref, onMounted, defineProps, defineExpose } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "quill/dist/quill.snow.css"; // Quill 기본 테마
import Quill from "quill";
import BlotFormatter from "@enzedonline/quill-blot-formatter2"; // quill-blot-formatter 불러오기

// 🔹 Quill 에디터 설정
const editor = ref();
const props = defineProps({
    content: String,
    placeholder: {
        type: String,
        default: "내용을 입력하세요...",
    },
});

const emit = defineEmits(["update:content"]);

// 🔹 Quill 에디터 인스턴스 가져오기 및 BlotFormatter 적용
onMounted(() => {
    if (editor.value?.getQuill) {
        const quill = editor.value.getQuill();
        console.log("Quill instance:", quill);

        // 🔹 이미지 버튼 클릭 시 파일 선택
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

        // 🔹 BlotFormatter 적용
        new BlotFormatter(quill); // BlotFormatter를 Quill에 적용

        // 🔹 이미지 정렬 기능 추가
        quill.getModule("toolbar").addHandler("align", (alignValue: any) => {
            console.log('fdfd')
            const range = quill.getSelection();
            if (range) {
                const [leaf] = quill.getLeaf(range.index);
                if (leaf.domNode.tagName == "IMG" && alignValue == 'center') {
                    leaf.domNode.style.marginLeft = ''
                    leaf.domNode.style.marginRight = ''
                    leaf.domNode.style.margin = '0 auto';  // 이미지 정렬 적용
                } else if (leaf.domNode.tagName == "IMG" && alignValue == 'right') {
                    leaf.domNode.style.margin = ''
                    leaf.domNode.style.marginRight = ''
                    leaf.domNode.style.marginLeft = 'auto';  // 이미지 정렬 적용
                } else {
                    leaf.domNode.style.margin = ''
                    leaf.domNode.style.marginLeft = ''
                    leaf.domNode.style.marginRight = 'auto';  // 이미지 정렬 적용
                }
            }
        });
    }
});

// 🔹 부모 컴포넌트에서 사용할 수 있도록 메서드 노출
defineExpose({
    getEditor: () => editor.value?.getQuill(),
});
</script>

<template>
    <div class="editor-area !py-[10px] !px-0 !m-auto w-full">
        <QuillEditor ref="editor" v-model:content="props.content" :contentType="'html'" :theme="'snow'" :toolbar="[
            ['bold', 'italic', 'underline'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ align: [] }],  // 정렬 버튼 그룹
            ['clean'],
            ['image']
        ]" :placeholder="placeholder" @update:content="emit('update:content', $event)" />
    </div>
</template>

<style scoped>
/* 퀼 에디터 스타일 */
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
