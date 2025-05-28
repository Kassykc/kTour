<template>
    <div class="reg_wrap">
        <!-- 병원 정보 -->
        <div class="reg_area reg_necessary_area">
            <h4 class="reg_tit text-[18px] mb-[20px] text-left font-[700]">병원 정보</h4>
            <div class="reg_nameVisibility_area divide_row_area row_area flex justify-start items-center border-t">
                <div
                    class="name_wrap cont_wrap flex items-stretch justify-start gap-[10px] w-[50%] h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <div
                        class="category_tit flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        병원명<span class="necessary text-[#ff0000]">*</span></div>
                    <div
                        class="reg_name_wrap cont_area py-[10px] !px-0 !m-auto w-full flex justify-start items-center gap-[4px]">
                        <input type="text" placeholder="en" v-model="resData.nameFirstKo"
                            class="input_firstName input_area border rounded-[6px] px-[10px] py-[4px] w-[48%]">
                        <input type="text" placeholder="id" v-model="resData.nameFirstEn"
                            class="input_lastName input_area border rounded-[6px] px-[10px] py-[4px] w-[48%]">
                    </div>
                </div>
                <div
                    class="visibility_wrap cont_wrap flex items-stretch justify-start gap-[10px] w-[50%] h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <div
                        class="category_tit flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        노출여부 <span class="necessary text-[#ff0000]">*</span></div>
                    <div class="visibility_area cont_area py-[10px] !px-0 !m-auto w-full">
                        <select v-model="resData.showYn" class="slect_area border rounded-[6px] w-[90%] px-[10px]">
                            <option value="Y">노출</option>
                            <option value="N">비노출</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="category_sort_area divide_row_area row_area">
                <!-- 1차 카테고리 -->
                <div class="name_wrap cont_wrap flex items-stretch justify-start gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]"
                    v-if="hospitalDepth1 && hospitalDepth1.length > 0">
                    <div
                        class="category_tit flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        카테고리<span class="necessary text-[#ff0000]">*</span>
                    </div>
                    <div class="cont_area py-[10px] !px-0 !m-auto w-full">
                        <div class="dropdown-list w-full flex flex-col justify-stretch items-start py-[10px]">
                            <div class="dropdown-item" v-for="item in hospitalDepth1" :key="item.codeKey"
                                @click="toggleDepth1(item)">
                                <input type="checkbox" :checked="isSelectedDepth1(item)" />
                                {{ item.codeValue }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 2차 세부항목 -->
                <div class="name_wrap cont_wrap flex items-stretch justify-start gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]"
                    v-if="showDepth2 && showDepth2.length > 0" v-for="(depth2Item, index) in showDepth2"
                    :key="depth2Item.codeParentKey || index">
                    <div
                        class="category_tit flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        {{ depth2Item.title }} <br /> 세부항목
                        <span class="necessary text-[#ff0000]">*</span>
                    </div>
                    <div class="cont_area py-[10px] !px-0 !m-auto w-full">
                        <div class="dropdown-list w-full flex flex-col justify-stretch items-start py-[10px]">
                            <div class="dropdown-item" v-for="item2 in depth2Item.list" :key="item2.codeKey"
                                @click="toggleDepth2(item2)">
                                <input type="checkbox" :checked="isSelectedDepth2(item2)" />
                                {{ item2.codeValue }}
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    class="name_wrap cont_wrap flex items-stretch justify-start gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <div
                        class="category_tit flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        주소<span class="necessary text-[#ff0000]">*</span></div>
                    <div class="reg_name_wrap cont_area py-[10px] !px-0 !m-auto w-full">
                        <input type="text" placeholder="" v-model="resData.email"
                            class="input_firstName input_area  border rounded-[6px] px-[10px] py-[4px] w-full">
                    </div>
                </div>
                <div
                    class="name_wrap cont_wrap flex items-stretch justify-start gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <div
                        class="category_tit flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        연락처<span class="necessary text-[#ff0000]">*</span></div>
                    <div
                        class="reg_name_wrap cont_area py-[10px] !px-0 !m-auto w-full flex justify-start items-center gap-[10px]">
                        +<input type="text" placeholder="" v-model="resData.interPhoneNumber"
                            class="input_firstName input_area  border rounded-[6px] px-[10px] py-[4px] w-[10%]">)
                        <input type="text" placeholder="" v-model="resData.mobile1"
                            class="input_firstName input_area  border rounded-[6px] px-[10px] py-[4px] w-[26%]">-
                        <input type="text" placeholder="" v-model="resData.mobile2"
                            class="input_firstName input_area  border rounded-[6px] px-[10px] py-[4px] w-[26%]">-
                        <input type="text" v-model="resData.mobile3"
                            class="input_firstName input_area  border rounded-[6px] px-[10px] py-[4px] w-[28%]">
                    </div>
                </div>
                <div
                    class="name_wrap cont_wrap  flex items-stretch justify-start gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <div
                        class="category_tit flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        슬로건<span class="necessary text-[#ff0000]">*</span></div>
                    <div
                        class="reg_name_wrap cont_area py-[10px] !px-0 !m-auto w-full flex justify-start items-center gap-[8px]">
                        <input type="text" placeholder="en" v-model="sloganEn"
                            class="input_firstName input_area border rounded-[6px] px-[10px] py-[4px] w-[50%]">
                        <input type="text" placeholder="id" v-model="sloganId"
                            class="input_firstName input_area border rounded-[6px] px-[10px] py-[4px] w-[50%]">
                    </div>
                </div>
                <div
                    class="name_wrap cont_wrap flex items-stretch justify-start gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <div
                        class="category_tit flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        SNS(주소입력)<span class="necessary text-[#ff0000]">*</span>
                    </div>
                    <div
                        class="reg_name_wrap cont_area py-[10px] !px-0 !m-auto w-full flex flex-wrap justify-start items-center gap-[10px]">
                        <input type="text" placeholder="네이버블로그" v-model="blog"
                            class="input_firstName input_area border rounded-[6px] px-[10px] py-[4px] w-[32%] min-w-[150px]">
                        <input type="text" placeholder="틱톡" v-model="tiktok"
                            class="input_firstName input_area border rounded-[6px] px-[10px] py-[4px] w-[32%] min-w-[150px]">
                        <input type="text" placeholder="페이스북" v-model="facebook"
                            class="input_firstName input_area border rounded-[6px] px-[10px] py-[4px] w-[32%] min-w-[150px]">
                        <input type="text" placeholder="인스타그램" v-model="instagram"
                            class="input_firstName input_area border rounded-[6px] px-[10px] py-[4px] w-[32%] min-w-[150px]">
                        <input type="text" placeholder="유튜브" v-model="youtube"
                            class="input_firstName input_area border rounded-[6px] px-[10px] py-[4px] w-[32%] min-w-[150px]">
                        <input type="text" placeholder="공식홈페이지" v-model="site"
                            class="input_firstName input_area border rounded-[6px] px-[10px] py-[4px] w-[32%] min-w-[150px]">
                    </div>
                </div>

                <div
                    class="sort_wrap cont_wrap flex items-stretch justify-start gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <div
                        class="category_tit flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        정렬 순서</div>
                    <div class="cont_area py-[10px] !px-0 !m-auto w-full flex justify-start items-center gap-[10px]">
                        <input type="text" v-model="resData.sortNum"
                            class="input_area  border rounded-[6px] px-[10px] py-[4px] w-fit">
                        <p class="help text-[14px]">입력하신 숫자가 클수록 상위에 노출됩니다. 예시) 10, 9, 8, ... 1 (+최신 등록 순으로 인물 정렬)</p>
                    </div>
                </div>
            </div>

            <div
                class="input_area content flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                <label
                    class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">내용(en)</label>
                <ClientOnly>
                    <AdminCommonBoardQuillEditor v-model="contentEn" />
                </ClientOnly>
            </div>

            <div
                class="input_area content flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                <label
                    class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">내용(id)</label>
                <ClientOnly>
                    <AdminCommonBoardQuillEditor v-model="contentId" />
                </ClientOnly>
            </div>

            <div
                class="input_area board_title flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-t border-[#dcdcdc]">
                <label
                    class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                    첨부파일</label>
                <AdminCommonBoardFileContainer :files="files" @update:files="updateFiles" :isAttFile="true" />
            </div>
        </div>

        <!-- 버튼 영역 -->
        <div class="btn_wrap flex items-center justify-end gap-[6px]">
            <div class="common_btn reg_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#0047A0]"
                @click="goReg" v-if="props.mode == 'reg'">등록</div>
            <div class="common_btn modify_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#12A0DD]"
                @click="goUpdate" v-if="props.mode == 'mod'">수정</div>
            <div class="common_btn delete_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#C93631]"
                @click="goDelete" v-if="props.mode == 'mod'">삭제</div>
            <div class="ccommon_btn cancle_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#bfbfbf]"
                @click="emit('close')">취소</div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { useMemberMngStore } from '@/stores/admin/peopleStore';
import type { ResultInfo, FileInfo, ProfileInfo } from '@/types/admin/people';
import { useMenuStore } from "@/stores/admin/common/menuStore";

const memberMngStore = useMemberMngStore('people-adm-dtl');
const codeStore = useMenuStore('adm-code');
const fileBaseUrl = apiBase.url() + "/_file/000/";

const resData = ref({
    prevTitle: '',
    prevWriter: '',
    prevDate: '',
    nextTitle: '',
    nextWriter: '',
    nextDate: '',
    useYn: '',
    delYn: '',
    showYn: 'Y',
    userNameKo: '',
    userNameEn: '',
    regUserIdx: 0,
    regUserNameKo: '',
    regUserNameEn: '',
    regDttm: '',
    modUserIdx: 0,
    modUserNameKo: '',
    modUserNameEn: '',
    modDttm: '',
    peopleIdx: 0,
    categoryParentIdx: 0,
    categoryParentDiv: '',
    categoryParentDivCd: '',
    categoryParentNameKo: '',
    categoryParentNameCn: '',
    categoryParentNameEn: '',
    categoryParentMemo: '',
    categoryChildIdx: 0,
    categoryChildDiv: '',
    categoryChildDivCd: '',
    categoryChildNameKo: '',
    categoryChildNameCn: '',
    categoryChildNameEn: '',
    categoryChildMemo: '',
    peopleType: '',
    peopleTypeCd: '900',
    nameFirstKo: '',
    nameKo: '',
    nameLastKo: '',
    nameFirstCn: '',
    nameCn: '',
    nameLastCn: '',
    nameFirstEn: '',
    nameLastEn: '',
    nameEn: '',
    email: '',
    gender: '',
    genderCd: '',
    birthType: '',
    birthTypeCd: '',
    birthYyyy: '',
    birthMm: '',
    birthDd: '',
    birth: '',
    interPhoneNumber: '82',
    mobile1: '',
    mobile2: '',
    mobile3: '',
    mobile: '',
    peopleMemo: '',
    mainShowYn: '',
    sortNum: 0,
    // "profileInfo[0]": [],
    fileInfo: [],
    fileContent: null,
    filePathEnc: null,
    fileNameOrg: null,
    categoryType: '',
});

const dropdownRef = ref<HTMLElement | null>(null)

const files = ref<File[]>([]);
const thumbnails = ref<File[]>([]);
const logos = ref<File[]>([]);

const updateFiles = (updatedFiles: File[]) => {
    files.value = updatedFiles;
};

const sloganEn = ref('');
const sloganId = ref('');
const blog = ref('');
const tiktok = ref('');
const facebook = ref('');
const instagram = ref('');
const youtube = ref('');
const site = ref('');
const contentEn = ref('');
const contentId = ref('');
const hashtag = ref();


const selectedBirthday = ref();

const hospitalDepth1 = ref([]);
const hospitalDepth2 = ref([]);
const showDepth2 = ref([]);
const hospitalDepth2selected = ref([]);

const profileSection = ref([{ idx: 1, sectionValue: "" }]);
const selectedProfile = ref<{ parentIdx: number; profileType: string; profileContent: string; inputIdx: number }[]>([]);

const emit = defineEmits();
const props = defineProps<{ mode: string, idx: string, cancel: () => void }>();

const insertThumb = ref([]);
const thumbnail = ref([]);

const selectedDepth1 = ref([])
const selectedDepth2 = ref([])
const isOpen = ref(false)

const toggleDepth1 = (item: any) => {
    const index = selectedDepth1.value.findIndex(
        (tag) => tag.codeKey === item.codeKey
    );
    if (index > -1) {
        selectedDepth1.value = selectedDepth1.value.filter(
            (tag) => tag.codeKey !== item.codeKey
        );
        // 1차 카테고리 선택 해제 시 2차 세부항목도 선택 해제
        selectedDepth2.value = selectedDepth2.value.filter(
            (depth2) => depth2.codeParentKey !== item.codeKey
        );
    } else {
        selectedDepth1.value = [...selectedDepth1.value, item];
    }
};

const toggleDepth2 = (item2: any) => {
    const index = selectedDepth2.value.findIndex(
        (tag) => tag.codeKey === item2.codeKey
    );
    if (index > -1) {
        selectedDepth2.value = selectedDepth2.value.filter(
            (tag) => tag.codeKey !== item2.codeKey
        );
    } else {
        selectedDepth2.value = [...selectedDepth2.value, item2];
    }
};

const isSelectedDepth1 = (item: any) => {
    return selectedDepth1.value.some(
        (tag) => tag.codeKey === item.codeKey
    );
};

const isSelectedDepth2 = (item2: any) => {
    return selectedDepth2.value.some(
        (tag) => tag.codeKey === item2.codeKey
    );
};

watch(
    selectedDepth1,
    (newVal) => {
        showDepth2.value = newVal.map((depth1) => {
            return {
                codeParentKey: depth1.codeKey,
                title: depth1.codeValue,
                list: hospitalDepth2.value.filter(
                    (item) => item.codeParentKey === depth1.codeKey
                ),
            };
        });
    },
    { immediate: true }
);

const goReg = async () => {

    const params = toRaw(resData.value);

    params.categoryIdx = 0;
    params.nameLastKo = ''

    selectedDepth1.value = selectedDepth1.value.map((item) => {
        try {
            const real = JSON.parse(item.realValue);
            return {
                ...item,
                codeValue: real, // fallback 처리
            };
        } catch (e) {
            console.error("realValue 파싱 실패:", item.realValue);
            return item;
        }
    });

    selectedDepth2.value = selectedDepth2.value.map((item) => {
        try {
            const real = JSON.parse(item.realValue);
            return {
                ...item,
                codeValue: real, // fallback 처리
            };
        } catch (e) {
            console.error("realValue 파싱 실패:", item.realValue);
            return item;
        }
    });

    const memo = {
        sloganEn: sloganEn.value,
        sloganId: sloganId.value,
        blog: blog.value,
        tiktok: tiktok.value,
        facebook: facebook.value,
        instagram: instagram.value,
        youtube: youtube.value,
        site: site.value,
        contentEn: contentEn.value,
        contentId: contentId.value,
        category: selectedDepth1.value,
        categoryChild: selectedDepth2.value,
    }

    params.peopleMemo = JSON.stringify(memo);

    if (files.value.length > 0) {
        params.file = files.value;
    }

    const data = common.cleanObject(params);

    // params.profileInfo = [];
    try {
        const response = await memberMngStore.insertPeople(data);

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
    let [birthYyyy, birthMm, birthDd] = selectedBirthday.value ? selectedBirthday.value.split("-") : "";
    resData.value.birthYyyy = selectedBirthday.value ? birthYyyy : "";
    resData.value.birthMm = selectedBirthday.value ? birthMm : "";
    resData.value.birthDd = selectedBirthday.value ? birthDd : "";
    resData.value.birthType = "";

    const params = toRaw(resData.value);
    params.modUserIdx = 0;
    params.categoryIdx = 0;
    params.gender = 0;
    params.attachmentPeople = JSON.stringify(thumbnail.value) != '[]' ? thumbnail.value[0] : insertThumb.value[0];
    params.nameLastKo = ''

    selectedDepth1.value = selectedDepth1.value.map((item) => {
        try {
            const real = JSON.parse(item.realValue);
            return {
                ...item,
                codeValue: real, // fallback 처리
            };
        } catch (e) {
            console.error("realValue 파싱 실패:", item.realValue);
            return item;
        }
    });

    selectedDepth2.value = selectedDepth2.value.map((item) => {
        try {
            const real = JSON.parse(item.realValue);
            return {
                ...item,
                codeValue: real, // fallback 처리
            };
        } catch (e) {
            console.error("realValue 파싱 실패:", item.realValue);
            return item;
        }
    });

    const memo = {
        sloganEn: sloganEn.value,
        sloganId: sloganId.value,
        blog: blog.value,
        tiktok: tiktok.value,
        facebook: facebook.value,
        instagram: instagram.value,
        youtube: youtube.value,
        site: site.value,
        contentEn: contentEn.value,
        contentId: contentId.value,
        category: selectedDepth1.value,
        categoryChild: selectedDepth2.value,
    }
    params.peopleMemo = JSON.stringify(memo)

    if (files.value.length > 0) {
        params.file = files.value;
    }
    // params.userStatus = params.userStatusCd;
    // params.gender = params.genderCd;
    // params.signinPolicy = params.signinPolicyCd;
    // params.userRole = params.userRoleCd;
    // params.userType = params.userTypeCd;
    // const isValid = validation(params);
    // if (!isValid) {
    //     return;
    // }

    const data = common.cleanObject(params);

    try {
        const response = await memberMngStore.updatePeople(data);

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

const decodeHtmlEntities = (str: string): string => {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}

onMounted(async () => {
    const codeParams = { page_num: 1, page_size: 999 };
    const response2 = await codeStore.setCodes(codeParams);
    sessionStorage.setItem('medicalCodes', JSON.stringify(response2));
    const codes = response2.resultInfo || [];

    hospitalDepth1.value = codes.filter(item => (item.codeType === 'CONTENT_CATEGORY'));
    hospitalDepth2.value = codes.filter(item => item.codeType === "CONTENT_CATEGORY_CHILD");

    hospitalDepth1.value = hospitalDepth1.value.map(item => {
        return {
            ...item,
            codeValue: JSON.parse(item.codeValue)?.categoryNameEn,
            realValue: item.codeValue
        };
    });

    hospitalDepth2.value = hospitalDepth2.value.map(item => {
        return {
            ...item,
            codeValue: JSON.parse(item.codeValue)?.categoryNameEn,
            realValue: item.codeValue
        };
    });

    if (props.mode === 'mod') {
        const params = { peopleIdx: props.idx };
        const response = await memberMngStore.dtlPeople(params);

        if (response) {
            resData.value = response.resultInfo;

            const decoded = decodeHtmlEntities(response.resultInfo.peopleMemo);
            const parsedMemo = JSON.parse(decoded);

            sloganEn.value = parsedMemo.sloganEn
            sloganId.value = parsedMemo.sloganId
            blog.value = parsedMemo.blog
            tiktok.value = parsedMemo.tiktok
            facebook.value = parsedMemo.facebook
            instagram.value = parsedMemo.instagram
            youtube.value = parsedMemo.youtube
            site.value = parsedMemo.site
            contentEn.value = parsedMemo.contentEn
            contentId.value = parsedMemo.contentId

            selectedDepth1.value = hospitalDepth1.value.filter(
                item =>
                    parsedMemo.category?.some((cat: any) => cat.codeKey === item.codeKey)
            );

            showDepth2.value = selectedDepth1.value.map(depth1 => {
                const title = String(depth1.codeValue);
                const filteredList = hospitalDepth2.value.filter(
                    item => item.codeParentKey === depth1.codeKey
                );

                return {
                    codeParentKey: depth1.codeKey,
                    title,
                    list: filteredList
                }
            })

            selectedDepth2.value = hospitalDepth2.value.filter(item =>
                parsedMemo.categoryChild?.some((cat: any) => cat.codeKey === item.codeKey)
            );


            files.value = response.resultInfo.fileInfo.filter((file: any) => file.originTypeCd !== 100);
        }
    }
});


</script>
