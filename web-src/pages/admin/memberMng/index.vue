<template>
    <AdminCommonBoardTableBoard :list="boardList" :paging="pageInfo" :columns="columns" :columnsWidth="columnsWidth"
        :pageSize="10" @update:currentIndex="handlePageChange" :isDtl="true" @update:selectedRows="handleDeleteItems"
        :useExcelDown="true"
        :popupComp="MemberReg" :rowKey="'userIdx'" :getBoardList="setBoardList" />
</template>

<script setup lang="ts">
import { useMemberMngStore } from '~/stores/admin/memberMngStore';
import type { ResultInfo } from '~/types/admin/memberMng';
import type { PageInfo } from '@/types/admin/page';
import MemberReg from '@/components/layer/admin/MemberReg.vue';

definePageMeta({
    layout: 'admin',
});

const memberMngStore = useMemberMngStore('member');
const router = useRouter();

const boardList = ref([] as ResultInfo[]);
const pageInfo = ref({} as PageInfo);
const selections = ref([]);

const columns = ref([
    { label: 'No.', key: 'userIdx', type: 'text' },
    { label: '구분', key: 'userRole', type: 'text' },
    { label: '이름', key: 'userNameKo', type: 'text' },
    { label: 'ID', key: 'userId', type: 'text' },
]);

const columnsWidth = [
    { flex: '5' },
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
    await memberMngStore.delUser(selectedRows);

    await getBoardList(nowPage.value, 10, '');
};

const getBoardList = async (pageNum: number, pageSize: number, searchKeyword: string) => {
    const data = {
        showYn: 'Y',
        pageNum: pageNum,
        pageSize: pageSize,
        searchKeyword: searchKeyword,
    };

    const response = await memberMngStore.getBoardList(data);

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
