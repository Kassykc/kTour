<template>
    <div class="admin_board_wrap">
        <div v-if="list && columns" class="table_board">
            <div class="table_wrap">
                <!-- 테이블 헤더 -->
                <div class="table_row table_head">
                    <div v-for="(column, index) in columns" :key="index" class="table_cell"
                        :style="columnsWidth[index] ?? ''">
                        {{ column.label }}
                    </div>
                    <div v-if="props.isDtl" class="table_cell" :style="{ flex: '5' }">
                        상세
                    </div>
                </div>

                <!-- 테이블 데이터 -->
                <div v-if="list && list.length > 0" v-for="(item, rowIndex) in list" :key="rowIndex" class="table_row"
                    @click="movePage(item[props.rowKey])">
                    <!-- 항목 -->
                    <div v-for="(column, colIndex) in columns" :key="colIndex" class="table_cell"
                        :style="columnsWidth[colIndex] ?? ''">
                        <template v-if="column.type === 'text'">
                            <div v-if="column.key == props.rowKey">
                            </div>
                            <div v-else-if="column.key === 'regDttm'">
                                <p>{{ item[column.key].split(' ')[0] }}</p>
                            </div>
                            <div v-else-if="column.key === 'reservationStatus' && item.reservationStatusCd == '000'">
                                <p><span class="adm-emph">*</span>{{ item[column.key] }}</p>
                            </div>
                            <div v-else-if="column.key === 'startTime'">
                                <p>{{ item.reservationSummaryList[0].reservationSummaryStartDt }}</p>
                            </div>
                            <div v-else-if="column.key === 'endTime'">
                                <p>{{
                                    addMinutes(item.reservationSummaryList[item.reservationSummaryList.length
                                        - 1].reservationSummaryStartDt, props.unit)
                                }}</p>
                            </div>
                            <div v-else-if="column.key === 'during'">
                                <p>{{
                                    getTimeDifference(item.reservationSummaryList[0].reservationSummaryStartDt,
                                        item.reservationSummaryList[item.reservationSummaryList.length
                                            - 1].reservationSummaryStartDt)

                                }}</p>
                            </div>
                            <div v-else-if="column.key === 'reservationPeople'">
                                <p>{{ item.reservationPeople.reservationPeopleName }}</p>
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
    type: 'text' | 'input' | 'select' | 'button' | 'html';
    options?: { label: string; value: string }[];
    action?: (item: any, index: number) => void;
    isDtl: boolean;
}

const props = defineProps({
    list: Array,
    columns: Array,
    columnsWidth: Array,
    isDtl: Boolean,
    popupComp: Object,
    rowKey: String,
    getBoardList: Function,
    unit: Number,
});

const addMinutes = (time: string, minutesToAdd: number): string => {
    if (time) {
        const [hours, minutes] = time.split(":").map(Number);
        const date = new Date();
        date.setHours(hours, minutes + minutesToAdd);

        const newHours = String(date.getHours()).padStart(2, "0");
        const newMinutes = String(date.getMinutes()).padStart(2, "0");

        return `${newHours}:${newMinutes}`;
    }
}

const getTimeDifference = (start: string, end: string): string => {
    const today = new Date().toISOString().split('T')[0];
    const startDate = new Date(today + " " + start);
    const endDate = new Date(today + " " + end);
    const diffInMinutes = (endDate.getTime() - startDate.getTime()) / (1000 * 60) + props.unit;

    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;

    if (hours === 0) return `${minutes}분`;
    if (minutes === 0) return `${hours}시간`;
    return `${hours}시간 ${minutes}분`;
};

const movePage = (index: number) => {
    emit('handleGoDetailPage', index);
};

const goDetail = (index: number) => {
    const closeCallback = () => {
        if (props.getBoardList) {
            props.getBoardList();
        }
    };
    openPopup(props.popupComp, { idx: index, mode: 'mod', onClose: closeCallback });
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

        .delete_btn {
            width: 80px;
            color: $color_white_000;
            background: $color_admin_delete_btn;
            cursor: pointer;
            padding: 10px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 400;
            text-align: center;
        }
    }

    .reg_btn_wrap {
        position: relative;
        top: 0;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;

        .reg_btn {
            width: 80px;
            color: $color_white_000;
            background: $color_admin_reg_btn;
            cursor: pointer;
            padding: 10px;
            border-radius: 8px;
            text-align: center;
            // margin-bottom: 20px;
            font-size: 12px;
            font-weight: 400;
        }
    }

    .table_board {
        padding: 10px 20px 20px;

        .table_row {
            display: flex;
            // height: 40px;
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
                        max-width: 200px;

                        &>img {
                            width: 100%;
                        }
                    }

                    // }
                }
            }
        }

        @media (max-width: 768px) {
            overflow-x: scroll;

            .table_wrap {
                width: 1200px;
            }
        }
    }
}

.no_data {
    text-align: center;
    padding: 20px;
}
</style>
