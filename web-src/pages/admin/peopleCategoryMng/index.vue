<template>
    <AdminCommonBoardTableBoard :list="boardList" :paging="pageInfo" :columns="columns" :columnsWidth="columnsWidth"
        :pageSize="10" @update:currentIndex="handlePageChange" :isDtl="true" @update:selectedRows="handleDeleteItems"
        :popupComp="MemberCategoryReg" :rowKey="'categoryIdx'" :getBoardList="setBoardList" :useExcelDown="false"
        @excelDown="goExcel" :keyword="searchKeyword" />
</template>

<script setup lang="ts">
import { useMemberMngStore } from '~/stores/admin/peopleStore';
import type { ResultInfo } from '~/types/admin/memberMng';
import type { PageInfo } from '@/types/admin/page';
import MemberCategoryReg from '@/components/layer/admin/MemberCategoryReg.vue';

definePageMeta({
    layout: 'admin',
});

const memberMngStore = useMemberMngStore('member');
const router = useRouter();

const boardList = ref([] as ResultInfo[]);
const pageInfo = ref({} as PageInfo);
const selections = ref([]);

const columns = ref([
    { label: 'No.', key: 'categoryIdx', type: 'text' },
    { label: '구분', key: 'categoryDiv', type: 'text' },
    // { label: '타입', key: 'categoryType', type: 'text' },
    { label: '구분명(en)', key: 'categoryNameEn', type: 'text' },
    { label: '구분명(id)', key: 'categoryNameId', type: 'text' },
    { label: '노출여부', key: 'showYn', type: 'text' },
]);



const columnsWidth = [
    { flex: '5' },
    { flex: '10' },
    { flex: '20' },
    { flex: '20' },
    { flex: '5' },
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
    await memberMngStore.delPeopleCategory(selectedRows);

    await getBoardList(nowPage.value, 10, '');
};

const getBoardList = async (pageNum: number, pageSize: number, searchKeyword: string) => {
    const data = {
        showYn: '',
        pageNum: pageNum,
        pageSize: pageSize,
        searchKeyword: searchKeyword,
    };

    const response = await memberMngStore.getPeopleCategoryList(data);

    if (response) {

        response.resultInfo.forEach(item => {
            item.categoryNameEn = JSON.parse(item.categoryNameKo)?.categoryNameEn;
            item.categoryNameId = JSON.parse(item.categoryNameKo)?.categoryNameId;
        })

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
