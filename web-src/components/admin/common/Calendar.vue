<template>
    <div class="calendar">
        <div class="header2">
            <button @click="prevMonth">
                <img src="@/assets/images/admin/prev.png" alt="이전 아이콘" class="prev_icon">
            </button>
            <span @click="toggleMonthList" class="month-text">{{ year }}년 {{ month + 1 }}월</span>
            <button @click="nextMonth">
                <img src="@/assets/images/admin/next.png" alt="다음 아이콘" class="next_icon">
            </button>
        </div>

        <div v-if="showMonthList" class="month-list">
            <div class="months-scroll" ref="monthScroll" @scroll="handleScroll">
                <div v-for="y in yearsRange" :key="y" class="year-months">
                    <div>{{ y }}년</div>
                    <div class="months-grid">
                        <div v-for="m in getMonthsForYear(y)" :key="m" class="month-item" :class="{
                            selected: y === year && m === month + 1
                        }" @click="selectMonth(y, m)">
                            {{ m }}월
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="weekdays">
            <div v-for="day in weekdays" :key="day">{{ day }}</div>
        </div>
        <div class="days">
            <div v-for="day in calendarDays" :key="day.id" class="day" :class="{
                selected: isSelected(day.date),
                disabled: isDisabled(day.date)
            }" @click="selectDate(day.date, day.id)">
                <span>{{ day.day }}</span>
                <div class="events">
                    <div v-for="event in getEvents(day.date)" :key="event.id" class="event">
                        {{ event.title }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    mode: { type: String, required: true }, // 'single' | 'range' | 'disabled'
    selectedDates: { type: Array as () => string[], required: true },
    propsData: {}, // 배열 타입 기본값 추가
});

const emit = defineEmits(['date-selected', 'update-selection']);

const today = new Date();
const year = ref(today.getFullYear());
const month = ref(today.getMonth());
const events = ref<{ id: number; date: string; title: string }[]>([]);

const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const daysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

const firstDayOfMonth = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

const calendarDays = computed(() => {
    const totalDays = daysInMonth(year.value, month.value);
    const startDay = firstDayOfMonth(year.value, month.value);
    const days = [];

    for (let i = 0; i < startDay; i++) {
        days.push({ id: `empty-${i}`, day: '', date: '' });
    }

    for (let i = 1; i <= totalDays; i++) {
        const date = `${year.value}-${String(month.value + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        days.push({ id: date, day: i, date });
    }

    return days;
});

const isSelected = (date: string) => props.selectedDates.includes(date);

// 날짜가 선택되었을 때 처리
const selectDate = (date: string, id: any) => {
    if (props.mode === 'disabled') return;
    let newSelection = [...props.selectedDates];
    if (props.selectedDates.includes(date)) { newSelection = [] } else {

        if (props.mode === 'single') {
            newSelection = [date];
        } else if (props.mode === 'range') {
            if (newSelection.length === 1) {
                newSelection.push(date);
            } else {
                newSelection = [date];
            }
        }
    }
    emit('update-selection', newSelection);
};

// 이벤트가 있는지 확인
const getEvents = (date: string) =>
    events.value.filter((event) => event.date === date);

// 이전/다음 달 처리
const prevMonth = () => {
    const nowDate = new Date();
    if (year.value == nowDate.getFullYear()) {
        if (month.value == nowDate.getMonth()) {
            return;
        }
    }
    if (month.value === 0) {
        year.value--;
        month.value = 11;
    } else {
        month.value--;
    }
};

const nextMonth = () => {
    if (month.value === 11) {
        year.value++;
        month.value = 0;
    } else {
        month.value++;
    }
};

// 월 리스트 토글
const showMonthList = ref(false);
const toggleMonthList = () => {
    showMonthList.value = !showMonthList.value;
};

// 연도 범위 처리
const yearsRange = ref([today.getFullYear(), today.getFullYear() + 1]);

// 월 리스트 선택
const getMonthsForYear = (y: number) => {
    return months.map((m) => m);
};

// 월 선택 처리
const selectMonth = (selectedYear: number, selectedMonth: number) => {
    year.value = selectedYear;
    month.value = selectedMonth - 1;
    showMonthList.value = false;
};

const isDisabled = (date: string) => {
    const nowDate = new Date();
    const targetDate = new Date(date);

    nowDate.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    console.log("date : " + date);
    console.log("targetDate <= nowDate : " + (targetDate <= nowDate));
    return targetDate < nowDate;
};
</script>


<style scoped lang="scss">
.calendar {
    margin: 0 auto;
    text-align: center;
    overflow: hidden;

    .header2 {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 60px;

        &>button {
            cursor: pointer;
        }
    }
}

.month-text {
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
}

.month-list {
    position: absolute;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 350px;
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px;
    text-align: left;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    max-height: 300px;
    overflow-y: auto;
}

.months-scroll {
    max-height: 200px;
    overflow-y: auto;
}

.year-months {
    margin-bottom: 10px;
}

.months-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}

.month-item {
    padding: 10px;
    cursor: pointer;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.month-item.selected {
    background-color: $color-main-text-blue;
    color: $color_white_000;
}

.weekdays,
.days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-family: "MinSans-M";
    font-size: 16px;
}

.weekdays {
    margin-bottom: 10px;
}

.days {
    gap: 1px;
    background-color: $color-show-more-btn;
    border: 1px solid $color-show-more-btn;
}

.day {
    padding: 1rem;
    text-align: center;
    background-color: $color_white_000;
    cursor: pointer;

    &:nth-child(7n+1) {
        color: $color_admin_delete_btn;
    }

    &.selected {
        background-color: $color-main-text-blue;
        color: $color_white_000;
    }

    &.disabled {
        background-color: #f0f0f0;
        color: #aaa;
        pointer-events: none;
        cursor: not-allowed;
    }
}

.event {
    background-color: #ffdddd;
    margin-top: 4px;
    padding: 2px;
}
</style>
