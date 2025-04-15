<template>
    <div class="common_filter_wrap">
        <div @click="showFilterLayer" class="btn_filter">
            <IconQnAFilter class="icon_filter" />
            <div class="text">{{ $t("CommonFilters.sort") }}</div>
        </div>
        <div v-if="isCheck !== ''" class="btn_filter is_on">
            {{ $t('FILTERS.' + isCheck) }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usePopup } from '@/composables/layerPopup/usePopup';
import LayerFilterList from '@/components/layer/filter/List.vue';

const emit = defineEmits();
const { openPopup } = usePopup();
const isCheck = ref("");

// 필터 선택 이벤트 핸들러
const handleFilterSelected = () => {
    isCheck.value = common.getCookie('selectFilter');
    emit('updateFilter');  // 필터 선택 값을 emit으로 전달
};

// 팝업을 여는 메서드
const showFilterLayer = () => {
    openPopup(LayerFilterList, {
        onFilterSelected: handleFilterSelected // 필터 선택 핸들러를 팝업에 전달
    });
};

// 초기 선택 값 설정
const showSelect = () => {
    isCheck.value = common.getCookie('selectFilter') || 'ALL';
};

onMounted(() => {
    showSelect();
});
</script>

<style lang="scss" scoped>
.common_filter_wrap {
    @include flexbox(center, flex-start);

    .btn_filter {
        @include flexCenter;
        gap: 0.8rem;
        margin-right: 0.7rem;
        cursor: pointer;

        &.is_on {
            font-weight: 600;
            color: $color-main-blue;
            cursor: default;
        }

        .icon_filter {
            flex-shrink: 0;
        }

        .text {
            color: $color-grey-text;
            font-size: 0.9em;
            font-weight: 400;
        }
    }
}
</style>