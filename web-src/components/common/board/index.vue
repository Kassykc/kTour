<template>
    <div class="admin_board_wrap">
        <CommonBoardDelBtn @delete="deleteItems" />
        <CommonBoardExceldownBtn v-if="useExcelDown" @download="goExcel" />
        <CommonBoardRegBtn @register="goReg" />
        <CommonBoardTable :list="list" :columns="columns" :columnsWidth="columnsWidth" :rowKey="rowKey" :paging="paging"
            :fileBaseUrl="fileBaseUrl" :isDtl="isDtl" @select="updateSelectedRows" @goDetail="goDetail"
            :popupComp="popupComp" @update:selectedRows="updateSelectedRows" />
        <CommonBoardPagination v-if="list && list.length !== 0" :pageSize="pageSize" :currentIndex="paging.page_num"
            :totalRows="paging.total" :totalPages="paging.pages" :pagesToShow="5" @update:currentIndex="updatePage" />
    </div>
</template>

<script setup lang="ts">
import { usePopup } from '@/composables/layerPopup/usePopup';
import { useBoardMngStore } from '@/stores/common/boardStore';

const boardMngStore = useBoardMngStore('commonboard');
const { openPopup } = usePopup();

// defineEmits에서 사용할 이벤트들을 정리
const emit = defineEmits<{
    (event: 'update:selectedRows', selectedRows: string[]): void;
    (event: 'excelDown'): void;
    (event: 'update:currentIndex', newPage: number): void;
    (event: 'handleGoDetailPage', index: number): void;
}>();

interface Column {
    label: string;
    key: string;
    type: 'text' | 'input' | 'select' | 'button' | 'html';
    options?: { label: string; value: string }[];
    action?: (item: any, index: number) => void;
    isDtl: boolean;
}

const props = defineProps({
    list: Array,
    paging: Object,
    keyword: String,
    columns: Array,
    columnsWidth: Array,
    pageSize: Number,
    isDtl: Boolean,
    popupComp: Object,
    rowKey: String,
    fileBaseUrl: String,
    getBoardList: Function,
    useExcelDown: Boolean,
});

const selectedRows = ref<boolean[]>(props.list.map(() => false));
const selections = ref([]);
const state = reactive({
    selections: [],
});

// 선택된 항목들을 업데이트하는 함수
const updateSelectedRows = (selectedRows: string[]) => {
    state.selections = selectedRows;
    emit('update:selectedRows', selectedRows);
};

// 삭제 처리 함수
const deleteItems = () => {
    emit('update:selectedRows', state.selections);
};

// 페이지네이션 범위 계산
const pageRange = computed(() => {
    const startPage = Math.floor((props.paging.page_num - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 4, props.paging.total);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
});

// 페이지 업데이트 함수
const updatePage = (newPage: number) => {
    emit('update:currentIndex', newPage);
};

// Excel 다운로드 처리 함수
const goExcel = () => {
    emit('excelDown');
};

// 상세보기 이동 함수
const goDetail = (index: number) => {
    const closeCallback = () => {
        if (props.getBoardList) {
            props.getBoardList(props.paging.page_num, props.paging.page_size);
        }
    };
    openPopup(props.popupComp, { idx: index, mode: 'mod', onClose: closeCallback });
};

// 등록 폼으로 이동 함수
const goReg = () => {
    const closeCallback = () => {
        if (props.getBoardList) {
            props.getBoardList(1, 10);
        }
    };
    openPopup(props.popupComp, { mode: 'reg', onClose: closeCallback });
};
</script>

<style lang="scss" scoped></style>
