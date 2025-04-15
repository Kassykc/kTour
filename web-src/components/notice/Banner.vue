<template>
    <div class="notice_banner_wrap">
        <div class="wrapper">
            <nuxt-link v-if="notice && noticeTitle" :to="`/notice/detail/${notice?.noticeSq}`" class="notice_link">
                <IconNotice class="icon notice" />
                <div class="notice_text">{{ noticeTitle }}</div>
                <IconNoticeArrow class="icon arrow" />
            </nuxt-link>
            <!-- skeleton & nodata -->
            <div v-if="!notice || !noticeTitle" class="notice_link">
                <IconNotice class="icon notice" />
                <!-- 가상 텍스트 영역. 실제로는 보이지 않음 -->
                <div class="notice_text loading">loding...</div>
                <IconNoticeArrow class="icon arrow" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { mainResponse } from "@/types/main/main";

const props = defineProps<{
    notice: mainResponse["notice"];
}>();

const noticeTitle = computed(() => props.notice?.noticeTitle || "");
</script>

<style lang="scss" scoped>
.notice_banner_wrap {
    background-color: $color-notice-bg;

    .wrapper {
        padding: 1rem 1.5rem;

        .notice_link {
            @include flexbox(center, space-between);

            .icon.notice {
                margin-right: 1rem;
            }

            .icon.arrow {
                margin-left: 1rem;
            }

            .notice_text {
                @include ellipsis(1);
                flex-grow: 1;
                font-size: 0.9em;
                color: $color-grey-text;

                &.loading {
                    color: $color-notice-bg;
                }
            }
        }

    }
}
</style>