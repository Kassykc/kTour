<template>
    <!-- 병원 카테고리 정보 -->
    <div class="profile_reg_area">
        <div class="profile_reg_wrap">
            <div class="overflow_wrap">
                <h2 class="registration text-[18px] !mb-[20px] text-left font-[700]">병원 카테고리 관리</h2>
                <div class="flex justify-start items-center flex-col border-t">
                    <div class="user_gender input_area flex items-stretch justify-start gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                        <label class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">노출여부</label>
                        <label class="flex justify-start items-center gap-[10px] !mr-[20px]">
                            <input type="radio" v-model="resData.showYn" value="N" />비노출
                        </label>
                        <label class="flex justify-start items-center gap-[10px]">
                            <input type="radio" v-model="resData.showYn" value="Y" />노출
                        </label>
                    </div>
                        <div class="user_role input_area flex items-stretch justify-start gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                            <label class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">분류</label>
                            <select v-model="resData.categoryDivCd" class="!w-fit !min-w-[160px] !px-[10px] !py-[4px] !mt-[10px]">
                                <option v-for="role in codeOpt1" :key="role.key" :value="role.key">
                                    {{ role.value }}
                                </option>
                            </select>
                            <select v-model="resData.categoryParentIdx" v-if="resData.categoryDivCd == '100'" class="!w-fit !min-w-[160px] !px-[10px] !py-[4px] !mt-[10px]">
                                <option value="">대분류를 선택해주세요</option>
                                <option v-for="cate in codeOpt2" :key="cate.key" :value="cate.key">
                                    {{ cate.value }}
                                </option>
                            </select>
                        </div>
                        <div class="flex items-stretch justify-start gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                            <div class="user_id input_area flex items-stretch justify-start gap-[10px] w-[50%] h-auto min-h-[60px] border-b-0 border-[#dcdcdc]">
                                <label class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">분류명(en)</label>
                                <input type="text" v-model="categoryNameEn" autocomplete="off" class="border rounded-[6px] !px-[10px] !block !h-[34px] !py-[4px] !mt-[12px] w-full" />
                            </div>
                            <div class="user_id input_area flex items-stretch justify-start gap-[10px] w-[50%] h-auto min-h-[60px] border-b-0 border-[#dcdcdc]">
                                <label class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">분류명(id)</label>
                                <input type="text" v-model="categoryNameId" autocomplete="off" class="border rounded-[6px] !px-[10px] !block !h-[34px] !py-[4px] !mt-[12px] w-full" />
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <!-- 버튼 영역 -->
        <div class="btn_wrap flex items-center justify-end gap-[6px]">
            <div class="common_btn reg_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#0047A0]" @click="goReg" v-if="props.mode == 'reg'">등록</div>
            <div class="common_btn modify_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#12A0DD]" @click="goUpdate" v-if="props.mode == 'mod'">수정</div>
            <div class="common_btn delete_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#C93631]" @click="goDelete" v-if="props.mode == 'mod'">삭제</div>
            <div class="ccommon_btn cancle_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#bfbfbf]" @click="emit('close')">취소</div>
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

const categoryNameEn = ref('');
const categoryNameId = ref('');

const emit = defineEmits();

const setParent = () => {

}

const validation = (params: any) => {
    // const validationRules = [
    //     { field: 'categoryNameKo', message: '분류명을 입력해주세요.' },
    // ];

    // for (const rule of validationRules) {
    //     if (!params[rule.field]) {
    //         SysAlert({ type: 'alert', message: rule.message });
    //         return false;
    //     }
    // }

    if (!categoryNameEn.value || categoryNameEn.value == '' || !categoryNameId.value || categoryNameId.value == '') {
        SysAlert({ type: 'alert', message: '분류명을 확인하세요' });
        return false;
    }

    return true;
};



const goReg = async () => {
    const params = toRaw(resData.value);
    params.categoryDiv = params.categoryDivCd;
    const isValid = validation(params);

    const categoryNm = {
        categoryNameEn: categoryNameEn.value,
        categoryNameId: categoryNameId.value,
    }

    const data = {
        categoryParentIdx: params.categoryParentIdx ? params.categoryParentIdx : 0,
        categoryDiv: params.categoryDivCd,
        categoryNameKo: JSON.stringify(categoryNm)
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

    const categoryNm = {
        categoryNameEn: categoryNameEn.value,
        categoryNameId: categoryNameId.value,
    }

    params.categoryParentIdx = params.categoryParentIdx ? params.categoryParentIdx : 0
    params.categoryDiv = params.categoryDivCd
    params.categoryNameKo = JSON.stringify(categoryNm)

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
            const parseNm = JSON.parse(response.resultInfo.categoryNameKo);
            categoryNameEn.value = parseNm.categoryNameEn;
            categoryNameId.value = parseNm.categoryNameId;

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
        value: JSON.parse(item.categoryNameKo)?.categoryNameEn ?? ''
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