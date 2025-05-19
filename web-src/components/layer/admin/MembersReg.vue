<template>
    <div class="reg_wrap">
        <!-- 인물 필수 정보 -->
        <div class="reg_area reg_necessary_area">
            <h4 class="reg_tit">인물 필수 정보</h4>
            <div class="reg_nameVisibility_area divide_row_area row_area">
                <div class="name_wrap cont_wrap">
                    <div class="category_tit">병원명<span class="necessary">*</span></div>
                    <div class="reg_name_wrap cont_area">
                        <input type="text" placeholder="en" v-model="resData.userNameKo"
                            class="input_firstName input_area">
                        <input type="text" placeholder="id" v-model="resData.userNameEn"
                            class="input_lastName input_area">
                    </div>
                </div>
                <div class="visibility_wrap cont_wrap">
                    <div class="category_tit">노출여부 <span class="necessary">*</span></div>
                    <div class="visibility_area cont_area">
                        <select v-model="resData.showYn" class="slect_area">
                            <option value="Y">노출</option>
                            <option value="N">비노출</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="category_sort_area divide_row_area row_area">
                <div class="category_wrap cont_wrap">
                    <div class="category_tit">카테고리<span class="necessary">*</span></div>
                    <div class="cont_area">
                        <div>분과 : </div>
                        <select class="slect_area" v-if="hospitalDepth1" v-model="resData.categoryParentIdx">
                            <option v-for="child in hospitalDepth1" :value="child.codeKey">
                                {{ child.codeValue }}
                            </option>
                        </select>
                    </div>
                    <div class="cont_area">
                        <div>세부항목 : </div>
                        <select class="slect_area" v-if="hospitalDepth2" v-model="resData.categoryChildIdx">
                            <option v-for="child in hospitalDepth2selected" :value="child.codeKey">
                                {{ child.codeValue }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="name_wrap cont_wrap">
                    <div class="category_tit">주소<span class="necessary">*</span></div>
                    <div class="reg_name_wrap cont_area">
                        <input type="text" placeholder="" v-model="resData.email" class="input_firstName input_area">
                    </div>
                </div>
                <div class="name_wrap cont_wrap">
                    <div class="category_tit">연락처<span class="necessary">*</span></div>
                    <div class="reg_name_wrap cont_area">
                        +<input type="text" placeholder="" v-model="resData.interPhoneNumber"
                            class="input_firstName input_area">)
                        <input type="text" placeholder="" v-model="resData.mobile1" class="input_firstName input_area">-
                        <input type="text" placeholder="" v-model="resData.mobile2" class="input_firstName input_area">-
                        <input type="text" v-model="resData.mobile3" class="input_firstName input_area">
                    </div>
                </div>
                <div class="name_wrap cont_wrap">
                    <div class="category_tit">슬로건<span class="necessary">*</span></div>
                    <div class="reg_name_wrap cont_area">
                        <input type="text" placeholder="en" v-model="sloganEn" class="input_firstName input_area">
                        <input type="text" placeholder="id" v-model="sloganId" class="input_firstName input_area">
                    </div>
                </div>
                <div class="name_wrap cont_wrap">
                    <div class="category_tit">SNS<span class="necessary">*</span></div>
                    <div class="reg_name_wrap cont_area">
                        <input type="text" placeholder="인스타그램" v-model="instagram" class="input_firstName input_area">
                        <input type="text" placeholder="유튜브" v-model="youtube" class="input_firstName input_area">
                        <input type="text" placeholder="공식홈페이지" v-model="site" class="input_firstName input_area">
                    </div>
                </div>
                <div class="sort_wrap cont_wrap">
                    <div class="category_tit">정렬 순서</div>
                    <div class="cont_area">
                        <input type="text" v-model="resData.sortNum" class="input_area">
                        <p class="help">입력하신 숫자가 클수록 상위에 노출됩니다. 예시) 10, 9, 8, ... 1 (+최신 등록 순으로 인물 정렬)</p>
                    </div>
                </div>
            </div>

            <div
                class="input_area content flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                <label
                    class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">내용(en)</label>
                <ClientOnly>
                    <AdminCommonBoardQuillEditor :content="contentEn" @update:content="handleContentEn" />
                </ClientOnly>
            </div>

            <div
                class="input_area content flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                <label
                    class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">내용(id)</label>
                <ClientOnly>
                    <AdminCommonBoardQuillEditor :content="contentId" @update:content="handleContentId" />
                </ClientOnly>
            </div>

            <div
                class="input_area board_title flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-t border-[#dcdcdc]">
                <label
                    class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                    첨부파일</label>
                <AdminCommonBoardFileContainer :files="files" @update:files="updateFiles" :isAttFile="true" />
            </div>

            <div
                class="input_area board_title flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-t border-[#dcdcdc]">
                <label
                    class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                    썸네일</label>
                <AdminCommonBoardFileContainer :files="thumbnails" @update:files="updateThumbnails"
                    :isAttFile="false" />
            </div>
        </div>

        <!-- 인물 프로필 정보 -->
        <!-- <div class="reg_area">
            <h4 class="reg_tit">인물 프로필 정보</h4>
            <div @click="handleProfileSection('add')" class="add_row">추가</div>
            <div v-for="item in profileSection" :key="item.idx" class="row_area">
                <div class="cont_wrap">
                    <div class="category_tit">프로필</div>
                    <div class="cont_area select_profile_area">
                        <div class="select_profile_wrap">
                            <select v-if="selectedCategory2 && profileTypeCode && profileTypeCode.length !== 0"
                                v-model="item.sectionValue" @change="handleProfileType($event, item.idx)"
                                class="slect_area profile_slect_area">
                                <option value="">- 선택 -</option>
                                <option v-for="child in profileTypeCode[selectedCategory2]['child']"
                                    :value="child.codeKey">
                                    {{ child.codeValue }}
                                </option>
                            </select>
                            <div @click="handleProfileSection('remove', item.idx)"
                                class="remove_profile_btn profile_btn">프로필 삭제</div>
                            <div @click="handleInputBtn('add', item.idx)"
                                v-if="selectedProfile.filter((el) => el.parentIdx === item.idx).length !== 0"
                                class="add_category_btn profile_btn">항목 추가</div>
                        </div>
                        <div v-if="selectedProfile && selectedProfile.filter(el => el.parentIdx === item.idx).length !== 0"
                            class="add_profile_wrap">
                            <div v-for="inputItem in selectedProfile.filter(el => el.parentIdx === item.idx)"
                                :key="inputItem.inputIdx" class="add_profile_area">
                                <input type="text" v-model="inputItem.profileContent"
                                    @change="handleInput($event, item.idx, inputItem.inputIdx)" class="input_area">
                                <div @click="handleInputBtn('remove', item.idx, inputItem.inputIdx)"
                                    class="remove_category_btn profile_btn">항목 삭제</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- 버튼 영역 -->
        <div class="btn_wrap">
            <div class="common_btn reg_btn" @click="goReg" v-if="props.mode == 'reg'">등록</div>
            <div class="common_btn modify_btn" @click="goUpdate" v-if="props.mode == 'mod'">수정</div>
            <div class="common_btn delete_btn" @click="goDelete" v-if="props.mode == 'mod'">삭제</div>
            <div class="common_btn cancle_btn" @click="emit('close')">취소</div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { useMemberMngStore } from '@/stores/admin/peopleStore';
import type { ResultInfo, FileInfo, ProfileInfo } from '@/types/admin/people';
import { useMenuStore } from "@/stores/admin/common/menuStore";

const memberMngStore = useMemberMngStore('people-adm-dtl');
const codeStore = useMenuStore('code');
const fileBaseUrl = apiBase.url() + "/_file/000/";

const resData = ref<ResultInfo>({
    rowNum: null,
    prevIdx: null,
    prevTitle: '',
    prevWriter: '',
    prevDate: '',
    nextIdx: null,
    nextTitle: '',
    nextWriter: '',
    nextDate: '',
    useYn: '',
    delYn: '',
    showYn: 'Y',
    userIdx: null,
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
    interPhoneNumber: '',
    mobile1: '',
    mobile2: '',
    mobile3: '',
    mobile: '',
    peopleMemo: '',
    mainShowYn: '',
    sortNum: 0,
    profileInfo: [],
    fileInfo: [],
    fileContent: null,
    filePathEnc: null,
    fileNameOrg: null,
    categoryType: '',
});

const changedData = ref<Record<string, any>>({});

// 변경 이벤트 핸들러
// const handleChange = (key: string, event: Event) => {
//     const target = event.target as HTMLInputElement | HTMLSelectElement;
//     changedData.value[key] = target.value;
// };


const files = ref<File[]>([]);
const thumbnails = ref<File[]>([]);
const logos = ref<File[]>([]);

const updateFiles = (updatedFiles: File[]) => {
    files.value = updatedFiles;
};

const updateThumbnails = (updatedFiles: File[]) => {
    thumbnails.value = updatedFiles;
};

const sloganEn = ref('');
const sloganId = ref('');
const instagram = ref('');
const youtube = ref('');
const site = ref('');
const contentEn = ref('');
const contentId = ref('');


const selectedShowYn = ref();
const selectedBirthday = ref();
const peopleTypeCode = ref();
const profileTypeCode = ref();
const categoryCode = ref();
const selectedCategory1 = ref('59');
const selectedCategory2 = ref('77');

const hospitalDepth1 = ref();
const hospitalDepth2 = ref();
const hospitalDepth2selected = ref([]);

const profileSection = ref([{ idx: 1, sectionValue: "" }]);
const selectedProfile = ref<{ parentIdx: number; profileType: string; profileContent: string; inputIdx: number }[]>([]);

const emit = defineEmits();
const props = defineProps<{ mode: string, idx: string, cancel: () => void }>();

const insertThumb = ref([]);
const thumbnail = ref([]);

watch(() => resData.value.categoryParentIdx, (selected) => {
    if (selected != 0) {
        // hospitalDepth2selected.value = hospitalDepth2.value.
        hospitalDepth2selected.value = hospitalDepth2.value.filter(item => item.codeParentKey === selected);
    }
},
    { immediate: true }
);

const handleProfileSection = (handleType, idx) => {
    switch (handleType) {
        case "add":
            const lastSectionIdx = profileSection.value.length !== 0 ? profileSection.value.at(-1).idx : 0;
            const addSectionIdx = lastSectionIdx + 1;

            profileSection.value = [...profileSection.value, { idx: addSectionIdx, sectionValue: "" }];
            break;

        case "remove":
            if (profileSection.value.length > 1) {
                profileSection.value = profileSection.value.filter((el) => el.idx !== idx);
                // selectedProfile은 profileSection과 독립적으로 삭제 처리
                selectedProfile.value = selectedProfile.value.filter((el) => el.parentIdx !== idx);
            } else {
                SysAlert({
                    type: 'alert',
                    message: '한가지 이상은 필수입니다.',
                });
            }
            break;

        default:
            break;
    }
};

const handleContentEn = (content: any) => {

    contentEn.value = content;
}

const handleContentId = (content: any) => {

    contentId.value = content;
}

const handleThumbnailChange = (event: Event) => {
    insertThumb.value = [];
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        Array.from(target.files).forEach((file) => {
            insertThumb.value.push(file);
        });
    }
};

const prevImg = (idx: Number) => {
    const file = insertThumb.value[idx];
    if (file) {
        return URL.createObjectURL(file);
    }
};

const removeThumbnail = () => {
    thumbnail.value = [];
    insertThumb.value = [];
};

const handleProfileType = (e: Event, sectionIdx: number) => {
    const val = (e.target as HTMLSelectElement).value;
    const section = profileSection.value.find((section) => section.idx === sectionIdx);

    if (!section) return;

    const isProfileSelected = profileSection.value.some((el) => el.sectionValue === val && el.idx !== sectionIdx); // 이미 다른 곳에서 선택되었는지 확인
    const isProfileExist = selectedProfile.value.some((el) => el.parentIdx === sectionIdx);

    if (isProfileSelected) {
        SysAlert({
            type: "alert",
            message: "이미 선택하였습니다. 다른 항목을 선택해주세요",
        });

        if (isProfileExist) {
            const selectedProfileItem = selectedProfile.value.find(
                (el) => el.parentIdx === sectionIdx
            );
            if (selectedProfileItem) {
                (e.target as HTMLSelectElement).value = selectedProfileItem.profileType;
            }
        } else {
            (e.target as HTMLSelectElement).value = "";
        }
    } else {
        section.sectionValue = val;
        changedData.value[`profileType_${sectionIdx}`] = val;

        if (!isProfileExist) {
            selectedProfile.value.push({
                parentIdx: sectionIdx,
                profileType: val,
                profileContent: "",
                inputIdx: 1,
            });
        } else {
            const selectedProfileItem = selectedProfile.value.find(
                (el) => el.parentIdx === sectionIdx
            );
            if (selectedProfileItem) {
                selectedProfileItem.profileType = val;
            }
        }
    }
};

const handleInputBtn = (handleType, parentIdx, inputIdx) => {
    switch (handleType) {
        case "add":
            const parentArr = selectedProfile.value.filter(
                (el) => el.parentIdx === parentIdx
            );

            const newItem = {
                parentIdx: parentIdx,
                profileType: parentArr.at(-1).profileType,
                profileContent: "",
                inputIdx: parentArr.at(-1).inputIdx + 1,
            };

            selectedProfile.value.push(newItem);
            break;

        case "remove":
            const removeIdx = selectedProfile.value.findIndex(
                (el) => el.parentIdx === parentIdx && el.inputIdx === inputIdx
            );

            if (removeIdx !== -1) selectedProfile.value.splice(removeIdx, 1);

        default:
            break;
    }
};


// input change 이벤트
const handleInput = (e: Event, parentIdx: number, inputIdx: number) => {
    const val = (e.target as HTMLInputElement).value;
    const profile = selectedProfile.value.find(
        (el) => el.parentIdx === parentIdx && el.inputIdx === inputIdx
    );
    if (profile) {
        profile.profileContent = val;
        changedData.value[`profileContent_${parentIdx}_${inputIdx}`] = val;
    }
};

const handleCategory1 = (e) => {
    selectedCategory1.value = e.target.value;
};

const goReg = async () => {

    const params = toRaw(resData.value);

    const memo = {
        sloganEn: sloganEn.value,
        sloganId: sloganId.value,
        instagram: instagram.value,
        youtube: youtube.value,
        site: site.value,
        contentEn: contentEn.value,
        contentId: contentId.value,
    }

    params.peopleMemo = JSON.stringify(memo);

    if (files.value.length > 0) {
        params.file = files.value;
    }

    if (thumbnails.value.length > 0) {
        params.thumbnail = thumbnails.value;
    }

    try {
        const response = await memberMngStore.insertPeople(params);

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
    delete params['profileInfo'];
    params.categoryIdx = resData.value.categoryChildIdx;
    params.profile = selectedProfile.value;
    params.peopleType = '900';
    params.gender = 0;
    params.attachmentPeople = JSON.stringify(thumbnail.value) != '[]' ? thumbnail.value[0] : insertThumb.value[0];

    const memo = {
        sloganEn: sloganEn.value,
        sloganId: sloganId.value,
        instagram: instagram.value,
        youtube: youtube.value,
        site: site.value,
        contentEn: contentEn.value,
        contentId: contentId.value,
    }
    params.peopleMemo = JSON.stringify(memo)

    if (files.value.length > 0) {
        params.file = files.value;
    }

    if (thumbnails.value.length > 0) {
        params.thumbnail = thumbnails.value;
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

    try {
        const response = await memberMngStore.updatePeople(params);

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

onMounted(async () => {
    if (props.mode === 'mod') {
        const params = { peopleIdx: props.idx };
        const response = await memberMngStore.dtlPeople(params);

        if (response) {
            resData.value = response.resultInfo;

            files.value = response.resultInfo.fileInfo.filter((file: any) => file.originTypeCd !== 100);
            thumbnail.value = response.resultInfo.fileInfo.filter((file: any) => file.originTypeCd === 100);

            const defaultProfile = response.resultInfo.profileInfo || [];

            profileSection.value = [];
            selectedProfile.value = [];

            defaultProfile.forEach((profile, i) => {
                let parentObj = profileSection.value.find(
                    (el) => el.sectionValue === profile.profileTypeCd
                );

                if (!parentObj) {
                    parentObj = { idx: profileSection.value.length, sectionValue: profile.profileTypeCd };
                    profileSection.value.push(parentObj);
                }

                if (profile.profileContent.trim()) {
                    const existingProfiles = selectedProfile.value.filter(
                        (el) => el.parentIdx === parentObj.idx
                    );

                    const newItem = {
                        parentIdx: parentObj.idx,
                        profileType: parentObj.sectionValue,
                        profileContent: profile.profileContent,
                        inputIdx: existingProfiles.length + 1
                    };

                    selectedProfile.value.push(newItem);
                }
            });
        }
    }

    const codeParams = { page_num: 1, page_size: 999 };
    const response2 = await codeStore.setCodes(codeParams);
    sessionStorage.setItem('medicalCodes', JSON.stringify(response2));
    const codes = response2.resultInfo || [];

    hospitalDepth1.value = codes.filter(item => item.codeType === 'CONTENT_CATEGORY');
    hospitalDepth2.value = codes.filter(item => item.codeType === "CONTENT_CATEGORY_CHILD");
});



</script>
