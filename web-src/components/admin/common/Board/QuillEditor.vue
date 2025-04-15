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

            // 파일 선택 후 실행되는 부분
            input.onchange = () => {
                const file = input.files ? input.files[0] : null;
                if (file) {
                    // 파일을 URL로 변환하여 에디터에 삽입
                    const reader = new FileReader();
                    reader.onload = () => {
                        const imageUrl = reader.result as string;
                        const range = quill.getSelection();
                        quill.insertEmbed(range.index, "image", imageUrl); // 이미지 삽입
                    };
                    reader.readAsDataURL(file); // 파일을 DataURL로 변환
                }
            };
        });

        // 🔹 BlotFormatter 적용
        new BlotFormatter(quill); // BlotFormatter를 Quill에 적용
    }
});

// 🔹 부모 컴포넌트에서 사용할 수 있도록 메서드 노출
defineExpose({
    getEditor: () => editor.value?.getQuill(),
});
</script>

<template>
    <QuillEditor ref="editor" v-model:content="props.content" :contentType="'html'" :theme="'snow'" :toolbar="[
        ['bold', 'italic', 'underline'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ align: [] }],
        ['clean'],
        ['image']
    ]" :placeholder="placeholder" @update:content="emit('update:content', $event)" />
</template>

<style scoped>
/* 퀼 에디터 스타일 */
</style>
