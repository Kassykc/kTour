<template>
    <div class="table_row" @click="$emit('go-detail', item[rowKey])">
        <div class="table_cell" :style="{ flex: '2' }">
            <input type="checkbox" @change="(e) => emit('update-selection', e.target.checked, item[rowKey])"
                :checked="selections.includes(item[rowKey])" />
        </div>
        <div v-for="(column, colIndex) in columns" :key="colIndex" class="table_cell">
            <p v-if="column.type === 'text'">{{ item[column.key] }}</p>
            <input v-if="column.type === 'input'" v-model="item[column.key]" />
            <select v-if="column.type === 'select'" v-model="item[column.key]">
                <option v-for="(option, optionIndex) in column.options" :key="optionIndex" :value="option.value">
                    {{ option.label }}
                </option>
            </select>
            <button v-if="column.type === 'button'" @click="column.action(item)">{{ column.label }}</button>
            <div v-if="column.type === 'html'" v-html="item[column.key]"></div>
            <img v-if="column.type === 'img' && item[column.key]" :src="fileBaseUrl + item[column.key]" />
        </div>
        <div v-if="isDtl" class="table_cell" :style="{ flex: '5' }">
            <button @click.stop="emit('go-detail', item[rowKey])">상세</button>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Column {
    label: string;
    key: string;
    type?: 'text' | 'input' | 'select' | 'button' | 'html' | 'img';
    options?: { value: string | number; label: string }[];
    action?: (item: any) => void;
}

interface Item {
    [key: string]: any; // item의 키가 문자열이고 값은 any
}

const props = defineProps<{
    item: Item;
    columns: Column[];
    selections: any[]; // 선택된 항목들을 배열로 정의
    rowKey: string;
    fileBaseUrl: string;
    isDtl: boolean;
}>();

const emit = defineEmits<{
    (event: 'update-selection', checked: boolean, rowKey: string): void;
    (event: 'go-detail', rowKey: string): void;
}>();
</script>

<style scoped>
.table_row {
    display: flex;
    border: 1px solid #ddd;
    cursor: pointer;
}

.table_cell {
    padding: 10px;
    text-align: center;
    border-right: 1px solid #ddd;
}
</style>