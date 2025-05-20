<template>
    <AdminCommonBoardTableBoard :list="boardList" :paging="pageInfo" :columns="columns" :columnsWidth="columnsWidth"
        :pageSize="10" @update:currentIndex="handlePageChange" :isDtl="true" @update:selectedRows="handleDeleteItems"
        :popupComp="MembersReg" :rowKey="'peopleIdx'" :getBoardList="setBoardList" :useExcelDown="false"
        @excelDown="goExcel" :keyword="searchKeyword" />
</template>

<script setup lang="ts">
import { useMemberMngStore } from '~/stores/admin/peopleStore';
import type { ResultInfo } from '~/types/admin/memberMng';
import type { PageInfo } from '@/types/admin/page';
import MembersReg from '@/components/layer/admin/MembersReg.vue';

definePageMeta({
    layout: 'admin',
});

const memberMngStore = useMemberMngStore('people-adm');
const router = useRouter();

const boardList = ref([] as ResultInfo[]);
const pageInfo = ref({} as PageInfo);
const selections = ref([]);
const fileBaseUrl = apiBase.url() + "/_file/000/";

const columns = ref([
    { label: 'No.', key: 'peopleIdx', type: 'text' },
    { label: '이름', key: 'nameFirstKo', type: 'text' },
]);

const columnsWidth = [
    { flex: '5' },
    { flex: '50' },
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
    await memberMngStore.delPeople(selectedRows);

    await getBoardList(nowPage.value, 10, '');
};

const getBoardList = async (pageNum: number, pageSize: number, searchKeyword: string) => {
    const data = {
        showYn: 'Y',
        pageNum: pageNum,
        pageSize: pageSize,
        searchKeyword: searchKeyword,
    };

    const response = await memberMngStore.getPeopleList(data);

    if (response) {
        boardList.value = response.resultInfo;
        pageInfo.value = response.pageInfo;
    }
};

const handlePageChange = (newPage: number) => {
    nowPage.value = newPage;
    getBoardList(newPage, 10, '');
};

onMounted(async () => {
    await getBoardList(1, 10, '');
});
</script>

<style lang="scss" scoped></style>
