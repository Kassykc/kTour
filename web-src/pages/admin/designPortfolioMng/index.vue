<template>
    <!-- 공지사항 -->
    <AdminCommonBoardTableBoard :list="boardList" :paging="pageInfo" :columns="columns" :columnsWidth="columnsWidth"
        :pageSize="10" @update:currentIndex="handlePageChange" :isDtl="true" @update:selectedRows="handleDeleteItems"
        :popupComp="DesignReg" :rowKey="'boardIdx'" :getBoardList="setBoardList" :useExcelDown="false" @excelDown="goExcel"
        :keyword="searchKeyword" :fileBaseUrl="fileBaseUrl" />
</template>

<script setup lang="ts">
import { useBoardMngStore } from '~/stores/admin/boardStore';
import { boardType } from "@/assets/js/static";
import type { ResultInfo } from '@/types/admin/board';
import type { PageInfo } from '@/types/admin/page';
import BoardReg from '@/components/layer/admin/BoardReg.vue';
import DesignReg from '~/components/layer/admin/DesignReg.vue';

definePageMeta({
    layout: 'admin',
});

const fileBaseUrl = apiBase.url() + "/_file/000/";

const noticeMngStore = useBoardMngStore('notice');
const router = useRouter();

const emit = defineEmits<{
    (event: 'update:currentIndex', pageIndex: number): void;
    (event: 'update:selectedRows', selectedRows: number[]): void;
    (event: 'excelDown'): void;
}>();

const boardList = ref([] as ResultInfo[]);
const pageInfo = ref({} as PageInfo);
const searchKeyword = ref('');

const columns = ref([
    { label: 'No.', key: 'boardIdx', type: 'text' },
    { label: '제목', key: 'subject', type: 'text' },
    { label: '썸네일', key: 'thumbnail', type: 'img' },
    { label: '내용', key: 'content', type: 'html' },
    { label: '등록자', key: 'regUserNameKo', type: 'text' },
    { label: '등록일', key: 'regDttm', type: 'text' },
    { label: '노출여부', key: 'showYn', type: 'text' },
]);

const columnsWidth = [
    { flex: '5' },
    { flex: '30' },
    { flex: '15' },
    { flex: '35' },
    { flex: '10' },
    { flex: '10' },
    { flex: '10' },
];

const handleDeleteItems = async (selectedRows: number[]) => {
    if (selectedRows.length == 0) {
        SysAlert({
            type: 'alert',
            message: '삭제할 데이터를 선택해주세요',
        })
    } else {
        SysAlert({
            type: 'confirm',
            message: '삭제하시겠습니까?',
            callback: () => goDel(selectedRows)
        })
    }
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
        pageNum: pageNum,
        pageSize: pageSize,
        searchKeyword: word ? word : searchKeyword.value,
        boardType: boardType.design,
    };

    const response = await noticeMngStore.getBoardList(data);

    if (response) {
        boardList.value = response.resultInfo;
        pageInfo.value = response.pageInfo;
    }
};

const handlePageChange = (newPage: number) => {
    nowPage.value = newPage;
    getBoardList(newPage, 10, '');
};

const goExcel = async () => {
    const params = {
        pageNum: 1,
        pageSize: 9999,
        boardType: boardType.design,
        searchKeyword: searchKeyword.value,
    }

    const response = await noticeMngStore.getExcel(params);
}

onMounted(async () => {
    await getBoardList(1, 10, '');
});
</script>

<style lang="scss" scoped></style>
