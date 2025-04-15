<template>
    <!-- 공지사항 -->
    <CommonBoard :list="boardList" :paging="pageInfo" :columns="columns" :columnsWidth="columnsWidth" :pageSize="10"
        @update:currentIndex="handlePageChange" :isDtl="true" @update:selectedRows="handleDeleteItems"
        :popupComp="BoardReg" :rowKey="'boardIdx'" :getBoardList="setBoardList" :useExcelDown="false"
        @excelDown="goExcel" :keyword="searchKeyword" />
</template>

<script setup lang="ts">
import { useBoardMngStore } from '~/stores/common/boardStore';
import BoardReg from '@/components/layer/admin/BoardReg.vue';

definePageMeta({
    layout: 'admin',
});

const noticeMngStore = useBoardMngStore('notice');
const router = useRouter();

const boardList = ref([]);
const pageInfo = ref({});
const searchKeyword = ref('');

const columns = ref([
    { label: 'No.', key: 'board_idx', type: 'text' },
    { label: '제목', key: 'subject_ko', type: 'text' },
    { label: '내용', key: 'content_ko', type: 'html' },
    { label: '등록자', key: 'reg_user_name_ko', type: 'text' },
    { label: '등록일', key: 'reg_dttm', type: 'text' },
    { label: '노출여부', key: 'show_yn', type: 'text' },
]);

const columnsWidth = [
    { flex: '5' },
    { flex: '30' },
    { flex: '35' },
    { flex: '10' },
    { flex: '10' },
    { flex: '10' },
];

const handleDeleteItems = async (selectedRows: number[]) => {
    SysAlert({
        type: 'confirm',
        message: '삭제하시겠습니까?',
        callback: () => goDel(selectedRows)
    })
};

const nowPage = ref(1);

const setBoardList = async () => {
    await getBoardList(nowPage.value, 10, '');
}

const goDel = async (selectedRows: number[]) => {
    await noticeMngStore.delBoard(selectedRows);

    await getBoardList(nowPage.value, 10, '');
};

const getBoardList = async (pageNum: number, pageSize: number, word: string) => {
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: word ? word : searchKeyword.value,
        board_type: '050',
    };

    const response = await noticeMngStore.getBoardList(data);

    if (response) {
        boardList.value = response.result_info;
        pageInfo.value = response.page_info;
    }
};

const handlePageChange = (newPage: number) => {
    nowPage.value = newPage;
    getBoardList(newPage, 10, '');
};

const goExcel = async () => {
    const params = {
        showYn: 'Y',
        pageNum: 1,
        pageSize: 9999,
        boardType: 0,
        searchKeyword: searchKeyword.value,
        categoryType: '900',
    }

    const response = await noticeMngStore.getExcel(params);
}

onMounted(async () => {
    await getBoardList(1, 10, '');

    console.log('gd')
});
</script>

<style lang="scss" scoped></style>