<template>
    <div>
        <CommonBoard :list="boardList" :columns="columns" :columnsWidth="columnsWidth" :rowKey="'id'" :paging="paging"
            :fileBaseUrl="fileBaseUrl" :isDtl="true" :popupComp="popupComp" :useExcelDown="true"
            @update:selectedRows="handleSelectedRows" @excelDown="handleExcelDownload" @goDetail="handleGoDetail"
            @update:currentIndex="handlePageChange" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const boardList = ref([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
]);

const columns = ref([
    { label: 'Name', key: 'name', type: 'text', isDtl: true },
    { label: 'Action', key: 'action', type: 'button', action: (item) => alert(`Action on ${item.name}`), isDtl: false }
]);

const columnsWidth = ref([200, 100]);

const paging = ref({
    page_num: 1,
    page_size: 10,
    total: 30,
    pages: 3,
});

const fileBaseUrl = 'https://example.com/files/';
const popupComp = { /* Popup 컴포넌트 정의 */ };

const handleSelectedRows = (selectedRows: string[]) => {
    console.log('Selected rows:', selectedRows);
};

const handleExcelDownload = () => {
    console.log('Download Excel...');
};

const handleGoDetail = (rowKey: string) => {
    console.log('Go to detail of row with id:', rowKey);
};

const handlePageChange = (newPage: number) => {
    console.log('Page changed to:', newPage);
};
</script>

<style scoped></style>