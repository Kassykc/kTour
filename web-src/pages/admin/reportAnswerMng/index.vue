<template>
    <!-- news -->
    <AdminCommonBoardTableBoard :list="boardList" :paging="pageInfo" :columns="columns" :columnsWidth="columnsWidth"
        :pageSize="10" @update:currentIndex="handlePageChange" :isDtl="true" @update:selectedRows="handleDeleteItems"
        :popupComp="ReportAnswerReg" :rowKey="'repotAnswerIdx'" :getBoardList="setBoardList" :useExcelDown="false"
        :fileBaseUrl="fileBaseUrl" @excelDown="goExcel" :keyword="searchKeyword" />
</template>

<script setup lang="ts">
import { useReportStore } from '~/stores/admin/reportStore';
import { boardType } from "@/assets/js/static";
import type { ResultInfo } from '@/types/admin/board';
import type { PageInfo } from '@/types/admin/page';
import ReportAnswerReg from '@/components/layer/admin/ReportAnswerReg.vue';

definePageMeta({
    layout: 'admin',
});

const reportMngStore = useReportStore('admin-report');
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
    { label: 'No.', key: 'repotAnswerIdx', type: 'text' },
    { label: 'repotId', key: 'repotId', type: 'text' },
    { label: 'uuid', key: 'uuid', type: 'text' },
]);

const columnsWidth = [
    { flex: '5' },
    { flex: '20' },
    { flex: '20' },
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
    await reportMngStore.delBoard(selectedRows);

    await getBoardList(nowPage.value, 10, '');
};

const getBoardList = async (pageNum: number, pageSize: number, word: string) => {
    const data = {
        pageNum: pageNum,
        pageSize: pageSize,
        // repotId: "report_01",
        searchKeyword: word ? word : searchKeyword.value,
    };

    const response = await reportMngStore.getBoardAnswerList(data);

    if (response) {

        // response.resultInfo.forEach(item => {
        //     item.titleEn = JSON.parse(item.repotTitle)?.titleEn;
        //     item.questionTextEn = JSON.parse(item.questionText)?.questionTextEn;
        // })

        boardList.value = response.resultInfo;
        pageInfo.value = response.pageInfo;
    }
};

const handlePageChange = (newPage: number) => {
    nowPage.value = newPage;
    getBoardList(newPage, 10, '');
};

// const goExcel = async () => {
//     const params = {
//         pageNum: 1,
//         pageSize: 9999,
//         boardType: boardType.contentAll,
//         searchKeyword: searchKeyword.value,
//     }

//     const response = await reportMngStore.getExcel(params);
// }

onMounted(async () => {
    await getBoardList(1, 10, '');
});
</script>

<style lang="scss" scoped></style>
