<template>
    <AdminCommonBoard :list="boardList" :paging="pageInfo" :columns="columns" :columnsWidth="columnsWidth"
        :pageSize="10" @update:currentIndex="handlePageChange" :isDtl="true" @update:selectedRows="handleDeleteItems"
        :popupComp="MemberReg" :rowKey="'user_idx'" :getBoardList="setBoardList" />
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
    { label: 'No.', key: 'user_idx', type: 'text' },
    { label: '구분', key: 'user_role', type: 'text' },
    { label: '이름', key: 'user_name_ko', type: 'text' },
    { label: 'ID', key: 'user_id', type: 'text' },
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
        show_yn: 'Y',
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
    };

    const response = await memberMngStore.getBoardList(data);

    if (response) {
        boardList.value = response.result_info;
        pageInfo.value = response.page_info;
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
