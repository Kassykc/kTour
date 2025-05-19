<template>
    <div class="profile_reg_area">
        <div class="profile_reg_wrap">
            <div class="overflow_wrap">
                <h2 class="registration">인물 카테고리 관리</h2>
                <div class="user_gender input_area">
                    <label>노출여부</label>
                    <label>
                        <input type="radio" v-model="resData.showYn" value="N" />비노출
                    </label>
                    <label>
                        <input type="radio" v-model="resData.showYn" value="Y" />노출
                    </label>
                </div>
                <div class="user_role input_area">
                    <label>분류</label>
                    <select v-model="resData.categoryDivCd">
                        <option v-for="role in codeOpt1" :key="role.key" :value="role.key">
                            {{ role.value }}
                        </option>
                    </select>
                    <select v-model="resData.categoryParentIdx" v-if="resData.categoryDivCd == '100'">
                        <option value="">대분류를 선택해주세요</option>
                        <option v-for="cate in codeOpt2" :key="cate.key" :value="cate.key">
                            {{ cate.value }}
                        </option>
                    </select>
                </div>
                <div class="user_id input_area">
                    <label>분류명(en)</label>
                    <input type="text" v-model="resData.categoryNameKo" autocomplete="off" />
                </div>
                <div class="user_id input_area">
                    <label>분류명(id)</label>
                    <input type="text" v-model="resData.categoryNameCn" autocomplete="off" />
                </div>
            </div>
        </div>

        <div class="btn_wrap">
            <div class="common_btn reg_btn" @click="goReg" v-if="props.mode == 'reg'">등록</div>
            <div class="common_btn modify_btn" @click="goUpdate" v-if="props.mode == 'mod'">수정</div>
            <div class="common_btn delete_btn" @click="goDelete" v-if="props.mode == 'mod'">삭제</div>
            <div class="common_btn cancle_btn" @click="emit('close')">취소</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useMemberMngStore } from '~/stores/admin/peopleStore';
import type { GetUserResultInfo } from '~/types/admin/memberMng';
import { useMenuStore } from "@/stores/admin/common/menuStore";

const memberMngStore = useMemberMngStore('dtl');
const codeStore = useMenuStore('code');

const props = defineProps<{ mode: string, idx: string, cancel: () => void }>();
const codeOpt1 = ref<{ value: string; label: string }[]>([]);
const codeOpt2 = ref<{ value: string; label: string }[]>([]);
const codeOpt3 = ref<{ value: string; label: string }[]>([]);
const codeOpt4 = ref<{ value: string; label: string }[]>([]);
const codeOpt5 = ref<{ value: string; label: string }[]>([]);
const codeOpt6 = ref<{ value: string; label: string }[]>([]);

const content = ref("");
const resData = ref({
    rowNum: null,
    prevIdx: null,
    prevTitle: "",
    prevWriter: "",
    prevDate: "",
    nextIdx: null,
    nextTitle: "",
    nextWriter: "",
    nextDate: "",
    useYn: "",
    delYn: "N",
    showYn: "Y",
    userIdx: null,
    userNameKo: "",
    userNameEn: "",
    regUserIdx: 0,
    regUserNameKo: "",
    regUserNameEn: "",
    regDttm: "",
    modUserIdx: null,
    modUserNameKo: "",
    modUserNameEn: "",
    modDttm: null,
    categoryIdx: 0,
    categoryParentIdx: 0,
    categoryDiv: "",
    categoryDivCd: "",
    categoryParentNameKo: "",
    categoryParentNameCn: "",
    categoryParentNameEn: "",
    categoryParentMemo: "",
    categoryChildIdx: 0,
    categoryChildNameKo: "",
    categoryChildNameCn: "",
    categoryChildNameEn: "",
    categoryChildMemo: "",
    categoryNameKo: "",
    categoryNameCn: "",
    categoryNameEn: "",
    categoryMemo: "",
    categoryType: ""
});


const emit = defineEmits();

const setParent = () => {

}

const validation = (params: any) => {
    const validationRules = [
        { field: 'categoryNameKo', message: '분류명을 입력해주세요.' },
    ];

    for (const rule of validationRules) {
        if (!params[rule.field]) {
            SysAlert({ type: 'alert', message: rule.message });
            return false;
        }
    }

    return true;
};



const goReg = async () => {
    const params = toRaw(resData.value);
    params.categoryDiv = params.categoryDivCd;
    const isValid = validation(params);

    const data = {
        categoryParentIdx: params.categoryParentIdx ? params.categoryParentIdx : 0,
        categoryDiv: params.categoryDiv,
        categoryNameKo: params.categoryNameKo
    }

    if (!isValid) {
        return;
    }

    try {
        const response = await memberMngStore.insertPeopleCategory(data);

        if (response) {
            SysAlert({
                type: 'alert',
                message: '등록되었습니다.',
                callback: () => { emit('close') }
            })
        }
    } catch (error) {
        SysAlert({ type: 'alert', message: '등록에 실패했습니다.' });
    }
};

const goUpdate = async () => {
    const params = toRaw(resData.value);
    params.categoryDiv = params.categoryDivCd;
    const isValid = validation(params);
    if (!isValid) {
        return;
    }

    try {
        const response = await memberMngStore.updatePeopleCategory(params);

        if (response) {
            SysAlert({
                type: 'alert',
                message: '수정되었습니다.',
                callback: () => { emit('close') }
            })
        }
    } catch (error) {
        SysAlert({ type: 'alert', message: '수정에 실패했습니다.' });
    }

};


const getBoardList = async (pageNum: number, pageSize: number, searchKeyword: string) => {
    const data = {
        showYn: '',
        pageNum: pageNum,
        pageSize: pageSize,
        searchKeyword: searchKeyword,
    };

    return await memberMngStore.getPeopleCategoryList(data);

    // if (response) {
    //     boardList.value = response.resultInfo;
    //     pageInfo.value = response.pageInfo;
    // }
};

onMounted(async () => {
    if (props.mode == 'mod') {
        const params = {
            categoryIdx: props.idx
        }
        const response = await memberMngStore.dtlPeopleCategory(params);
        if (response) {
            resData.value = response.resultInfo;

            let codes;

            if (!sessionStorage.getItem('medicalCodes')) {
                const params = {
                    page_num: 1,
                    page_size: 999
                }
                const response2 = await codeStore.setCodes(params);
                sessionStorage.setItem('medicalCodes', JSON.stringify(response2));
            }

            codes = JSON.parse(sessionStorage.getItem('medicalCodes'));

            const code1 = codes.resultInfo.filter(item => item.codeType === 'CATEGORY_DIV' && parseInt(item.codeKey) <= 100);
            codeOpt1.value = code1.map(item => ({
                key: item.codeKey,
                value: item.codeValue
            }));
        }
    } else {

        if (!sessionStorage.getItem('medicalCodes')) {
            const params = {
                page_num: 1,
                page_size: 999
            }
            const response2 = await codeStore.setCodes(params);
            sessionStorage.setItem('medicalCodes', JSON.stringify(response2));
        }

        const codes = JSON.parse(sessionStorage.getItem('medicalCodes'));

        const code1 = codes.resultInfo.filter(item => item.codeType === 'CATEGORY_DIV' && parseInt(item.codeKey) <= 100);
        codeOpt1.value = code1.map(item => ({
            key: item.codeKey,
            value: item.codeValue
        }));
    }


    const cateList = await getBoardList(1, 9999, '');
    codeOpt2.value = cateList.resultInfo;

    const code2 = codeOpt2.value.filter(item => item.categoryDivCd == '000');
    codeOpt2.value = code2.map(item => ({
        key: item.categoryIdx,
        value: item.categoryNameKo
    }));
});

</script>

<style lang="scss" scoped>
// .profile_reg_area {

//     .profile_reg_wrap {
//         @include flexBox(flex-start, flex-start);
//         flex-direction: column;
//         width: 100%;
//         max-height: 586px;
//         background: $color_white_000;
//         font-size: 14px;
//         overflow-y: auto;
//         overflow-x: hidden;

//         .overflow_wrap {
//             width: 100%;
//             .registration {
//                 margin-bottom: 20px;
//             }

//             .input_area {
//                 @include flexBox(center, flex-start);
//                 gap: 10px;
//                 width: 100%;
//                 height: auto;
//                 min-height: 60px;
//                 border-bottom: 1px solid $color_header_border;

//                 &>label {
//                     @include flexCenter;
//                     width: 120px;
//                     min-width: 120px;
//                     height: auto;
//                     min-height: 59px;
//                     font-weight: 600;
//                     border-right: 1px solid $color_header_border;
//                     background: $color_searchbar_bg;
//                 }

//                 &>input {
//                     width: calc(100% - 120px);
//                     height: 30px;
//                     background: $color_white_000;
//                     padding: 0 10px;
//                     border: 1px solid $color_header_border;
//                     border-radius: 6px;
//                     margin: auto 0;
//                 }

//                 &>select {
//                     min-height: 28px;
//                 }

//                 &:first-of-type {
//                     border-top: 1px solid $color_header_border;
//                 }

//                 &.user_gender {
//                     &>label:nth-child(n+2) {
//                         background: none;
//                         border: none;
//                         gap: 10px;
//                     }
//                 }
//             }
//         }
//     }

//     @media (max-width: 480px) {
//         .profile_reg_wrap {
//             font-size: 12px;

//             .overflow_wrap {

//                 .input_area {

//                     &>label {
//                         width: 70px;
//                         min-width: 70px;
//                         text-align: center;
//                         word-break: keep-all;
//                     }

//                     &>input[type=text] {
//                         width: calc(100% - 70px);
//                     }
//                 }
//             }
//         }
//     }
// }</style>