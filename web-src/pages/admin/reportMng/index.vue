<template>
    <!-- news -->
    <AdminCommonBoardTableBoard :list="boardList" :paging="pageInfo" :columns="columns" :columnsWidth="columnsWidth"
        :pageSize="10" @update:currentIndex="handlePageChange" :isDtl="true" @update:selectedRows="handleDeleteItems"
        :popupComp="NewsReg" :rowKey="'boardIdx'" :getBoardList="setBoardList" :useExcelDown="false"
        :fileBaseUrl="fileBaseUrl" @excelDown="goExcel" :keyword="searchKeyword" />
</template>

<script setup lang="ts">
import { useBoardMngStore } from '~/stores/admin/boardStore';
import { boardType } from "@/assets/js/static";
import type { ResultInfo } from '@/types/admin/board';
import type { PageInfo } from '@/types/admin/page';
import NewsReg from '@/components/layer/admin/NewsReg.vue';

definePageMeta({
    layout: 'admin',
});

const noticeMngStore = useBoardMngStore('notice');
const router = useRouter();

const fileBaseUrl = apiBase.url() + "/_file/000/";

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
    { label: '썸네일', key: 'thumbnail', type: 'img' },
    { label: '카테고리', key: 'boardType', type: 'text' },
    { label: '제목(en)', key: 'subjectEn', type: 'text' },
    { label: '제목(id)', key: 'subjectId', type: 'text' },
    { label: '등록자', key: 'regUserNameKo', type: 'text' },
    { label: '등록일', key: 'regDttm', type: 'text' },
    { label: '노출여부', key: 'showYn', type: 'text' },
]);

const columnsWidth = [
    { flex: '5' },
    { flex: '10' },
    { flex: '10' },
    { flex: '20' },
    { flex: '20' },
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
        boardType: boardType.contentAll,
    };

    const response = await noticeMngStore.getBoardList(data);

    if (response) {

        response.resultInfo.forEach(item => {
            item.subjectEn = JSON.parse(item.subject)?.subjectEn;
            item.subjectId = JSON.parse(item.subject)?.subjectId;
            item.boardType = item.boardTypeCd == '300' ? '뉴스' : '영상';
        })

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
        boardType: boardType.contentAll,
        searchKeyword: searchKeyword.value,
    }

    const response = await noticeMngStore.getExcel(params);
}

onMounted(async () => {
    await getBoardList(1, 10, '');
});
</script>

<style lang="scss" scoped></style>
