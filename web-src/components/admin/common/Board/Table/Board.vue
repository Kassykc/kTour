<template>
    <div class="adminBoardWrap">
        <AdminCommonBoardTableDelBtn @delete="deleteItems" />
        <AdminCommonBoardTableExceldownBtn v-if="useExcelDown" @download="goExcel" />
        <AdminCommonBoardTableRegBtn @register="goReg" />
        <AdminCommonBoardTable :list="list" :columns="columns" :columnsWidth="columnsWidth" :rowKey="rowKey"
            :paging="paging" :fileBaseUrl="fileBaseUrl" :isDtl="isDtl" @select="updateSelectedRows" @goDetail="goDetail"
            :popupComp="popupComp" @update:selectedRows="updateSelectedRows" />
        <AdminCommonBoardTablePagination v-if="list && list.length != 0" :pageSize="pageSize"
            :currentIndex="paging.pageNum" :totalRows="paging.total" :totalPages="paging.pages" :pagesToShow="5"
            @update:currentIndex="updatePage" />
    </div>
</template>

<script setup lang="ts">
import { usePopup } from '@/composables/layerPopup/usePopup';

const { openPopup } = usePopup();
const emit = defineEmits<{
    (event: 'delete'): void;
    (event: 'download'): void;
    (event: 'register'): void;
    (event: 'select'): void;
    (event: 'goDetail'): void;
    (event: 'update:selectedRows', selectedRows: number[]): void;
    (event: 'excelDown'): void;
    (event: 'update:currentIndex', pageIndex: number): void;
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
const state = reactive({ selections: [] });

const updateSelectedRows = (selectedRows: number[]) => {
    state.selections = selectedRows;
};

const deleteItems = () => {
    emit('update:selectedRows', state.selections);
};

const pageRange = computed(() => {
    const startPage = Math.floor((props.paging.pageNum - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 4, props.paging.total);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
});

const updatePage = (newPage: number) => {
    emit('update:currentIndex', newPage);
};

const movePage = (index: number) => {
    emit('handleGoDetailPage', index);
};

const goExcel = () => {
    console.log("ge")
    emit('excelDown');
}

const goDetail = (index: number) => {
    const closeCallback = () => {
        if (props.getBoardList) {
            props.getBoardList(props.paging.pageNum, props.paging.pageSize);
        }
    };
    openPopup(props.popupComp, { idx: index, mode: 'mod', onClose: closeCallback });
};

const goReg = () => {
    const closeCallback = () => {
        if (props.getBoardList) {
            props.getBoardList(1, 10);
        }
    };
    openPopup(props.popupComp, { mode: 'reg', onClose: closeCallback });
};
</script>
