<template>
    <!-- no use -->
    <div v-if="notice" class="notice_list_wrap wrapper">
        <div v-for="item in notice" :key="item.noticeSq" @click="navigateToDetail(item.noticeSq)" class="item">
            <div class="date">
                {{ common.formatDate(item.insertDt) }}
            </div>
            <!-- !TODO : item.new 추가해주세요 (백엔드) -->
            <!-- 1. <div class="title" :class="{ 'is_new': item.new }"> -->
            <div class="title">
                {{ item.noticeTitle }}
            </div>
            <!-- 2. <IconSettingNew v-if="item.new" class="new" /> -->
            <!-- <IconSettingNew class="new" /> -->
        </div>
    </div>
    <div v-if="!notice" class="nodata wrapper">{{ $t("NoticeIntro.nodata") }}</div>
</template>

<script setup lang="ts">
import type { noticeListResponse } from '@/types/notice/notice';

const router = useRouter();

const navigateToDetail = (sq: string) => {
    router.push(`/notice/detail/${sq}`);
};

const props = defineProps<{
    notice: noticeListResponse["list"];
}>();
</script>

<style lang="scss" scoped>
.notice_list_wrap {
    min-height: calc(100vh - 66px);
    max-height: calc(100vh - 66px);
    padding: 1.5rem 1rem 2rem;
    overflow-y: auto;

    /* IE, Edge */
    -ms-overflow-style: none;
    /* Firefox */
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    .item {
        padding: 1.2rem 0.5rem;
        border-bottom: 0.5px solid $notice_grey_border;
        position: relative;
        cursor: pointer;

        .date {
            font-size: 0.86em;
            color: $color-grey-text;
        }

        .title {
            font-size: 0.86em;
            color: $color-grey-text;

            &.is_new {
                font-weight: 600;
            }
        }

        .new {
            position: absolute;
            top: 1.2rem;
            right: 0;
            width: 15px;
            height: 15px;
        }
    }
}

.nodata {
    @include flexCenter;
    min-height: calc(100vh - 66px);
    max-height: calc(100vh - 66px);
    padding: 1.5rem 1rem;
    overflow-y: auto;
    text-align: center;

    /* IE, Edge */
    -ms-overflow-style: none;
    /* Firefox */
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>