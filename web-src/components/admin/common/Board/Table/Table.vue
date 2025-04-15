<template>
    <div class="admin_board_wrap">
        <div class="table_board">
            <div class="table_wrap">
                <!-- 테이블 헤더 -->
                <div class="table_row table_head">
                    <div class="table_cell" :style="{ flex: '2' }">
                        <input type="checkbox" @change="(e) => toggleAllRows(e.target.checked)"
                            :checked="allSelected" />
                    </div>
                    <div v-for="(column, index) in columns" :key="index" class="table_cell"
                        :style="columnsWidth[index] ?? ''">
                        {{ column.label }}
                    </div>
                    <div v-if="props.isDtl" class="table_cell" :style="{ flex: '5' }">
                        상세
                    </div>
                </div>

                <!-- 테이블 데이터 -->
                <div v-for="(item, rowIndex) in list" :key="rowIndex" class="table_row"
                    @click="movePage(item[props.rowKey])">
                    <!-- 체크박스 -->
                    <div class="table_cell" :style="{ flex: '2' }">
                        <input type="checkbox" @change="(e) => updateSelectedRows(e.target.checked, item[props.rowKey])"
                            :checked="selections.includes(item[props.rowKey])" />
                    </div>
                    <!-- 항목 -->
                    <div v-for="(column, colIndex) in columns" :key="colIndex" class="table_cell"
                        :style="columnsWidth[colIndex] ?? ''">
                        <template v-if="column.type === 'text'">
                            <div v-if="column.key == props.rowKey">
                                <p>
                                    {{ paging.total - (rowIndex + (paging.pageNum - 1) *
                                        paging.pageSize) }}
                                </p>
                            </div>
                            <div v-else-if="column.key === 'regDttm'">
                                <p>{{ item[column.key].split(' ')[0] }}</p>
                            </div>
                            <div v-else-if="column.key === 'reservationStatus' && item.reservationStatusCd == '000'">
                                <p><span class="adm-emph">*</span>{{ item[column.key] }}</p>
                            </div>
                            <div v-else>
                                <p>{{ item[column.key] }}</p>
                            </div>
                        </template>
                        <template v-if="column.type === 'input'">
                            <input v-model="item[column.key]" />
                        </template>
                        <template v-if="column.type === 'select'">
                            <select v-model="item[column.key]">
                                <option v-for="(option, optionIndex) in column.options" :key="optionIndex"
                                    :value="option.value">
                                    {{ option.label }}
                                </option>
                            </select>
                        </template>
                        <template v-if="column.type === 'button'">
                            <button @click="column.action(item, rowIndex)">{{ column.label }}</button>
                        </template>
                        <template v-if="column.type === 'html'">
                            <div v-html="item[column.key]"></div>
                        </template>
                        <template v-if="column.type === 'img'">
                            <div v-if="item.fileInfo" class="thumb_area">
                                <!-- 이미지가 있는 경우만 보여줌 -->
                                <div v-for="(set, index) in item.fileInfo.filter(set => Number(set.originTypeCd) === 100)"
                                    :key="index" class="thumb_wrap">
                                    <div class="thumb">
                                        <img :src="fileBaseUrl + set.filePathEnc">
                                    </div>
                                </div>

                                <!-- 이미지가 하나도 없는 경우 -->
                                <div v-if="!item.fileInfo.some(set => Number(set.originTypeCd) === 100)"
                                    class="no_thumb">
                                    <img src="@/assets/images/no_image.png" alt="" />
                                </div>
                            </div>
                        </template>
                    </div>
                    <!-- 상세 -->
                    <div class="table_cell" :style="{ flex: '5' }">
                        <template v-if="props.isDtl">
                            <button @click="goDetail(item[props.rowKey])">상세</button>
                        </template>
                    </div>
                </div>

                <!-- no data -->
                <div v-if="!list || list.length === 0" class="no_data">데이터가 없습니다.</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePopup } from '@/composables/layerPopup/usePopup';
const { openPopup } = usePopup();

const emit = defineEmits();

interface Column {
    label: string;
    key: string;
    type: 'text' | 'input' | 'select' | 'button' | 'html' | 'img';
    options?: { label: string; value: string }[];
    action?: (item: any, index: number) => void;
    isDtl: boolean;
}

const props = defineProps({
    list: Array,
    paging: Object,
    keyword: String,
    columns: Array,
    columnsWidth: Array,
    pageSize: Number,
    isDtl: Boolean,
    popupComp: Object,
    rowKey: String,
    fileBaseUrl: String,
    getBoardList: Function,
    useExcelDown: Boolean,
});

const selectedRows = ref<boolean[]>(props.list.map(() => false));
const selections = ref([]);
const state = reactive({
    selections: [],
});

const allSelected = computed(() => props.list && props.list.length === state.selections.length);

const updateSelectedRows = (checked: boolean, rowKey: number) => {
    if (checked) {
        // 선택된 항목의 rowKey를 selections 배열에 추가
        selections.value.push(rowKey);
    } else {
        // 선택 해제된 항목의 rowKey를 selections 배열에서 제거
        selections.value = selections.value.filter(id => id !== rowKey);
    }

    // 부모 컴포넌트로 선택된 항목들의 rowKey를 전달
    emit('update:selectedRows', selections.value);
};

const toggleAllRows = (checked: boolean) => {
    if (checked) {
        // 전체 선택
        selections.value = props.list.map(item => item[props.rowKey]);
    } else {
        // 전체 해제
        selections.value = [];
    }

    // 부모 컴포넌트로 전체 선택 상태 전달
    emit('update:selectedRows', selections.value);
};

const deleteItems = () => {
    emit('update:selectedRows', state.selections);
};

const pageRange = computed(() => {
    const startPage = Math.floor((props.paging.pageNum - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 4, props.paging.total);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
});

const updatePage = (newPage: number) => {
    emit('update:currentIndex', newPage);
};

const movePage = (index: number) => {
    emit('handleGoDetailPage', index);
};

const goExcel = () => {
    emit('excelDown');
}

const goDetail = (index: number) => {
    const closeCallback = () => {
        if (props.getBoardList) {
            props.getBoardList(props.paging.pageNum, props.paging.pageSize);
        }
    };
    openPopup(props.popupComp, { idx: index, mode: 'mod', onClose: closeCallback });
};

const goReg = () => {
    const closeCallback = () => {
        if (props.getBoardList) {
            props.getBoardList(1, 10);
        }
    };
    openPopup(props.popupComp, { mode: 'reg', onClose: closeCallback });
};
</script>

<style lang="scss" scoped>
.admin_board_wrap {
    .delete_btn_wrap {
        position: relative;
        top: 34px;
        right: 90px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        padding: 0 20px;
        z-index: 1;
    }

    .reg_btn_wrap {
        position: relative;
        top: 0;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
    }

    .table_board {
        padding: 10px 20px 20px;

        .table_wrap {
            max-height: 500px;
            overflow-y: auto;

            .table_row {
                display: flex;
                border: 1px solid $color_header_border;
                border-top: 0;

                &.table_head {
                    font-weight: bold;
                    background-color: #f4f4f4;
                    border-top: 1px solid $color_header_border;
                }

                .table_cell {
                    @include flexCenter;
                    position: relative;
                    padding: 10px;
                    text-align: center;
                    border-right: 1px solid $color_header_border;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    & *:not(img):not(button):not(a) {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    &>button {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: $color_gray_600;
                        width: 80%;
                        height: 80%;
                        max-width: 64px;
                        max-height: 34px;
                        color: $color_white_000;
                        border-radius: 8px;
                        cursor: pointer;
                    }

                    &:last-child {
                        border-right: 0;
                    }

                    input,
                    select {
                        width: 100%;
                        padding: 5px;
                    }

                    .thumb_area {

                        // .thumb_wrap {
                        .thumb,
                        .no_thumb {
                            @include flexCenter;
                            width: 100%;
                            max-width: 100px;
                            height: 46px;

                            &>img {
                                width: 100%;
                                height: 100%;
                                object-fit: contain;
                            }
                        }

                        // }
                    }
                }
            }
        }
    }
}

.no_data {
    text-align: center;
    padding: 20px;
}
</style>
