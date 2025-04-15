<template>
    <div class="cont_wrapper">
        <div class="notice_area responsive_padding">
            <div class="g_title">공지사항</div>
            <div class="notice_wrap">
                <CommonTable :list="state.boardList" :paging="state.pageInfo" :columns="columns" :columnsWidth="columnsWidth"
                    :pageSize="maxRowNum.basic" @update:currentIndex="handlePageChange" @handleGoDetailPage="handleGoDetailPage"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { boardListType } from "@/types/board/board";
// import { createBoardStore } from "@/stores/board/boardStore";
import { maxRowNum, boardType } from "assets/js/static";

// const boardStore = createBoardStore('board');

const router = useRouter();

const state = reactive({
    boardList: [],
    pageInfo: {},
});

const columns = ref([
    { label: 'No.', key: 'boardIdx', type: 'text' },
    { label: '제목', key: 'subject', type: 'text' },
    { label: '작성자', key: 'regUserNameKo', type: 'text' },
    { label: '작성일', key: 'regDttm', type: 'text' },
    { label: '조회수', key: 'viewCount', type: 'text' },
]);

const columnsWidth = [
    { flex: '5' },
    { flex: '60' },
    { flex: '12' },
    { flex: '12' },
    { flex: '6' }
];

onBeforeMount(() => {
    getBoardList(1, maxRowNum.basic, "");
});

const getBoardList = async (pageNum:any, pageSize:any, searchKeyword:any) => {
    const data: boardListType = {
        showYn: "Y",
        pageNum: pageNum,
        pageSize: pageSize,
        searchKeyword: searchKeyword,
        boardType: boardType.notice,
    };

    // API 호출
    // const response = await boardStore.boardList(data);

    // if (response) {
    //     state.boardList = response.resultInfo;
    //     state.pageInfo = response.pageInfo;
    // }
};

const handlePageChange = (newPage: number) => {
    getBoardList(newPage, maxRowNum.basic, "");
};

const handleGoDetailPage = (id: number) => {
    router.push(`/community/notice/${id}`);
};

const movePage = (page:string) => {
    router.push(page);
};
</script>

<style lang="scss" scoped>
.cont_wrapper {
    .bg_area {
        position: relative;
        width: 100%;
        height: 520px;
        background: #000;

        .bg_img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 0%;
        }

        .bg_tit {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 0 150px;

            .tit_wrap {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                height: 100%;
                color: #fff;

                .nav_name {
                    font-size: 20px;

                    .dot {
                        margin: 0 16px;
                    }
                }

                .pg_title {
                    font-size: 70px;
                    font-weight: 700;
                    margin-left: -2px;
                }
            }
        }
    }

    .notice_area {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 100px;
        min-height: 50vh;
        margin: 100px auto;
        padding: 0 150px;

        .g_title {
            font-size: 40px;
            font-weight: 600;
        }

        .notice_wrap {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        .notice_area {
            padding: 0 20px;
        }
    }
}
</style>
