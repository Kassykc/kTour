<template>
    <div class="layer_filter_list_wrap">
        <div @click="emit('close')" class="btn_close">
            <IconClose />
        </div>
        <div class="title">
            <IconQnAFilter class="icon filter" />
            <div class="text">{{ $t("LayerQnAFilter.name") }}</div>
        </div>
        <div class="list">
            <div @click="selectFilter('ALL')" class="menu">
                <div class="icon">
                    <IconCheck v-if="isCheck == 'ALL'" class="icon_check" />
                </div>
                <div class="name">
                    {{ $t('FILTERS.ALL') }}
                </div>
            </div>
            <div @click="selectFilter('UNREPLY')" class="menu">
                <div class="icon">
                    <IconCheck v-if="isCheck == 'UNREPLY'" class="icon_check" />
                </div>
                <div class="name">
                    {{ $t('FILTERS.UNREPLY') }}
                </div>
            </div>
            <div @click="selectFilter('REPLIED')" class="menu">
                <div class="icon">
                    <IconCheck v-if="isCheck == 'REPLIED'" class="icon_check" />
                </div>
                <div class="name">
                    {{ $t('FILTERS.REPLIED') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

// props와 emits 정의
const props = defineProps<{
    onFilterSelected: (filter: string) => void; // 상위 컴포넌트에서 전달받은 함수
}>();

const emit = defineEmits();
const isCheck = ref(); // 초기 선택 필터 값

// 필터 선택 이벤트 핸들러
const selectFilter = (filter: string) => {
    isCheck.value = filter; // 선택된 필터 업데이트
    common.setCookie('selectFilter', isCheck.value);
    props.onFilterSelected(filter); // 상위 컴포넌트의 핸들러 호출
    emit('close'); // 팝업 닫기
};


onMounted(() => {
    isCheck.value = common.getCookie('selectFilter') || 'ALL';
    // console.log('is : ', isCheck.value)
});
</script>

<style lang="scss" scoped>
.layer_filter_list_wrap {
    @include flexbox(flex-start, flex-start);
    flex-direction: column;
    padding: 4rem 2rem 3rem;
    text-align: left;
    position: relative;

    .btn_close {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        padding: 1.2rem 1rem;
        cursor: pointer;

        >svg {
            fill: $color-grey-text;
        }
    }

    .title {
        @include flexbox(center, flex-start);
        gap: 1.2rem;
        width: 100%;
        margin-bottom: 1.5rem;

        .icon {
            width: 20px;
        }

        .text {
            font-size: 0.86em;
            color: $color-grey-text;
            font-weight: 600;
        }
    }

    .list {
        width: 100%;

        .menu {
            @include flexbox(center, flex-start);
            gap: 1.2rem;
            margin-top: 1.5rem;
            cursor: pointer;

            .icon {
                width: 20px;
            }

            .name {
                font-size: 0.86em;
                color: $color-grey-text;
            }
        }
    }
}
</style>