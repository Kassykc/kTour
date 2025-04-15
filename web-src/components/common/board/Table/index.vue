<template>
    <div class="admin_board_wrap">
        <CommonBoardTableHeader :columns="columns" :isDtl="isDtl" :allSelected="allSelected"
            @toggle-all="toggleAllRows" />
        <CommonBoardTableRow v-for="(item, rowIndex) in list" :key="rowIndex" :item="item" :columns="columns"
            :selections="selections" :rowKey="rowKey" :fileBaseUrl="fileBaseUrl" :isDtl="isDtl"
            @update-selection="updateSelectedRows" @go-detail="goDetail" />
        <div v-if="!list || list.length === 0" class="no_data">데이터가 없습니다.</div>
    </div>
</template>

<script setup lang="ts">
interface Column {
    key: string;
    label: string;
    type: 'text' | 'input' | 'select' | 'button' | 'html' | 'img';
    options?: { value: string; label: string }[];
    action?: (item: any) => void;
}

interface ListItem {
    id: string;
    name: string;
    // 추가 필드들...
}

// props 정의
const props = defineProps({
    list: {
        type: Array as PropType<ListItem[]>,
        required: true,
    },
    columns: {
        type: Array as PropType<Column[]>,
        default: () => [],
    },
    rowKey: {
        type: String,  // rowKey 타입 정의
        required: true,
    },
    fileBaseUrl: {
        type: String,  // fileBaseUrl 타입 정의
        required: true,
    },
    isDtl: Boolean,
    allSelected: Boolean,
});

const emit = defineEmits(['update:selectedRows', 'goDetail']);

const selections = ref([]);

// 전체 선택 여부 계산
const allSelected = computed(() => props.list && props.list.length === selections.value.length);

// 선택된 행을 업데이트하는 함수
const updateSelectedRows = (checked: boolean, rowKey: string) => {
    if (checked) {
        selections.value.push(rowKey);
    } else {
        selections.value = selections.value.filter(id => id !== rowKey);
    }
    emit('update:selectedRows', selections.value);
};

// 전체 선택 처리 함수
const toggleAllRows = (checked: boolean) => {
    selections.value = checked ? props.list.map(item => item[props.rowKey]) : [];
    emit('update:selectedRows', selections.value);
};

// 상세보기로 이동하는 함수
const goDetail = (rowKey: string) => {
    emit('goDetail', rowKey);
};
</script>

<style scoped>
.admin_board_wrap {
    padding: 10px 20px;
}

.no_data {
    text-align: center;
    padding: 20px;
}
</style>
