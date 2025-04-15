<template>
    <div class="profile_reg_area">
        <div class="profile_reg_wrap">
            <div class="overflow_wrap">
                <h2 class="registration">Profile Registration</h2>
                <div class="user_id input_area">
                    <label>ID</label>
                    <input type="text" v-model="resData.userId" autocomplete="off" v-if="props.mode == 'mod'"
                        readonly />
                    <input type="text" v-model="resData.userId" autocomplete="off" v-else />
                </div>
                <div class="user_pw input_area">
                    <label>사용자 비밀번호</label>
                    <input type="password" v-model="resData.userPwd" autocomplete="off"
                        :readonly="isPasswordEditable" />
                    <button @click="enablePasswordEdit" type="button" class="pw_change_btn" v-if="isPasswordEditable">
                        비밀번호 변경
                    </button>
                </div>
                <div class="user_last_name user_last_name_ko input_area">
                    <label>성(한글)</label>
                    <input type="text" v-model="resData.userNameFirstKo" autocomplete="off" />
                </div>
                <div class="user_first_name user_first_name_ko input_area">
                    <label>이름(한글)</label>
                    <input type="text" v-model="resData.userNameLastKo" autocomplete="off" />
                </div>
                <div class="user_email input_area">
                    <label>이메일</label>
                    <input type="text" v-model="resData.email" autocomplete="off" />
                </div>
                <div class="user_gender input_area">
                    <label>성별</label>
                    <label>
                        <input type="radio" v-model="resData.genderCd" value="0" />남성
                    </label>
                    <label>
                        <input type="radio" v-model="resData.genderCd" value="1" />여성
                    </label>
                </div>
                <div class="user_birth_date input_area">
                    <label>생년월일</label>
                    <input type="text" v-model="resData.birthYyyy" autocomplete="off" /> 년
                    <input type="text" v-model="resData.birthMm" autocomplete="off" /> 월
                    <input type="text" v-model="resData.birthDd" autocomplete="off" /> 일
                </div>
                <div class="user_contact_info input_area">
                    <label>연락처</label>
                    <input type="text" v-model="resData.mobile1" autocomplete="off" /> -
                    <input type="text" v-model="resData.mobile2" autocomplete="off" /> -
                    <input type="text" v-model="resData.mobile3" autocomplete="off" />
                </div>
                <div class="user_role input_area">
                    <label>사용자 역할</label>
                    <select v-model="resData.userRoleCd">
                        <option v-for="role in roleOptions" :key="role.key" :value="role.key">
                            {{ role.value }}
                        </option>
                    </select>
                </div>

                <div class="user_type input_area">
                    <label>사용자 타입</label>
                    <select v-model="resData.userTypeCd">
                        <option v-for="role in typeOptions" :key="role.key" :value="role.key">
                            {{ role.value }}
                        </option>
                    </select>
                </div>

                <div class="user_status input_area">
                    <label>사용자 상태</label>
                    <select v-model="resData.userStatusCd">
                        <option v-for="role in statusOptions" :key="role.key" :value="role.key">
                            {{ role.value }}
                        </option>
                    </select>
                </div>
                <div class="user_memo input_area">
                    <label>사용자 메모</label>
                    <input type="text" v-model="resData.userMemo" autocomplete="off" />
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
import { useMemberMngStore } from '~/stores/admin/memberMngStore';
import type { GetUserResultInfo } from '~/types/admin/memberMng';

const memberMngStore = useMemberMngStore('dtl');

const props = defineProps<{ mode: string, idx: string, cancel: () => void }>();
const roleOptions = ref<{ value: string; label: string }[]>([]);
const typeOptions = ref<{ value: string; label: string }[]>([]);
const statusOptions = ref<{ value: string; label: string }[]>([]);
const content = ref("");

const modData = ref("");

const isPasswordEditable = ref(false);

const enablePasswordEdit = () => {
    isPasswordEditable.value = false;
    resData.value.userPwd = ""; // 기존 값 초기화
};


const resData = ref<GetUserResultInfo>({
    rowNum: null,
    prevIdx: null,
    prevTitle: null,
    prevWriter: null,
    prevDate: null,
    nextIdx: null,
    nextTitle: null,
    nextWriter: null,
    nextDate: null,
    useYn: null,
    delYn: null,
    showYn: null,
    userIdx: 0,
    userNameKo: "",
    userNameEn: "",
    regUserIdx: 0,
    regUserNameKo: "",
    regUserNameEn: "",
    regDttm: "",
    modUserIdx: null,
    modUserNameKo: null,
    modUserNameEn: null,
    modDttm: null,
    userId: "",
    userKey: "",
    userPwd: "",
    userSalt: "",
    userNameFirstKo: "",
    userNameLastKo: "",
    userNameFirstEn: "",
    userNameLastEn: "",
    email: null,
    gender: null,
    genderCd: null,
    birthYyyy: null,
    birthMm: null,
    birthDd: null,
    interPhoneNumber: "",
    mobile1: "",
    mobile2: "",
    mobile3: "",
    token: null,
    tokenType: null,
    connCount: 0,
    userRole: "",
    fileCount: 0,
    userRoleCd: "",
    userType: "",
    userTypeCd: "",
    userStatus: "",
    userStatusCd: "",
    signinPolicy: "",
    signinPolicyCd: "",
    mobileAgency: null,
    mobileAgencyCd: null,
    localYn: null,
    securityCode: null,
    pwdChangePeriod: 0,
    firstSigninYn: null,
    lastSigninDttm: null,
    organizationType: null,
    organizationNameKo: null,
    organizationNameEn: null,
    organizationIdx: null,
    specializedNameKo: null,
    specializedNameEn: null,
    specializedIdx: null,
    departmentNameKo: null,
    departmentNameEn: null,
    departmentIdx: null,
    userMemo: null,
    fileInfo: [],
    agree_info: null,
});

const emit = defineEmits();

const validation = (params: any) => {
    const validationRules = [
        { field: 'userId', message: '아이디를 입력해주세요.' },
        { field: 'userPwd', message: '비밀번호를 입력해주세요.' },
        { field: 'userNameFirstKo', message: '성(한글)을 입력해주세요.' },
        { field: 'userNameLastKo', message: '이름(한글)을 입력해주세요.' },
        { field: 'email', message: '이메일을 입력해주세요.' },
        { field: 'genderCd', message: '성별을 입력해주세요.' },
        { field: 'birthYyyy', message: '생년월일을 정확히 입력해주세요.' },
        { field: 'birthMm', message: '생년월일을 정확히 입력해주세요.' },
        { field: 'birthDd', message: '생년월일을 정확히 입력해주세요.' },
        { field: 'mobile1', message: '연락처를 입력해주세요.' },
        { field: 'mobile2', message: '연락처를 입력해주세요.' },
        { field: 'mobile3', message: '연락처를 입력해주세요.' },
        { field: 'userRoleCd', message: '사용자 역할을 입력해주세요.' },
        { field: 'userTypeCd', message: '사용자 타입을 입력해주세요.' },
        { field: 'userStatusCd', message: '사용자 상태를 입력해주세요.' },
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
    params.userStatus = params.userStatusCd;
    params.gender = params.genderCd;
    params.signinPolicy = params.signinPolicyCd;
    params.userRole = params.userRoleCd;
    params.userType = params.userTypeCd;
    const isValid = validation(params);
    if (!isValid) {
        return;
    }

    try {
        const response = await memberMngStore.insertUser(params);

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
    params.userStatus = params.userStatusCd;
    params.gender = params.genderCd;
    params.signinPolicy = params.signinPolicyCd;
    params.userRole = params.userRoleCd;
    params.userType = params.userTypeCd;

    const isValid = validation(params);
    if (!isValid) {
        return;
    }

    if (params.userPwd == modData.value.userPwd) {
        params.userPwd = "";
    }

    try {
        const response = await memberMngStore.updateUser(params);

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
    if (props.mode == 'mod') {
        isPasswordEditable.value = true;
        const params = {
            userId: props.idx
        }
        const response = await memberMngStore.dtlUser(params);
        if (response) {
            resData.value = response.resultInfo;

            modData.value = resData.value ? JSON.parse(JSON.stringify(resData.value)) : null;

            console.log(response);

            const roleData = response.codeInfo.filter(item => item.codeType === 'USER_ROLE');
            roleOptions.value = roleData.map(item => ({
                key: item.codeKey,
                value: item.codeValue
            }));

            const statusData = response.codeInfo.filter(item => item.codeType === 'USER_STATUS');
            statusOptions.value = statusData.map(item => ({
                key: item.codeKey,
                value: item.codeValue
            }));

            const typeData = response.codeInfo.filter(item => item.codeType === 'USER_TYPE');
            typeOptions.value = typeData.map(item => ({
                key: item.codeKey,
                value: item.codeValue
            }));
        }
    } else {
        const codes = JSON.parse(sessionStorage.getItem('codes'));

        const roleData = codes.resultInfo.filter(item => item.codeType === 'USER_ROLE');
        roleOptions.value = roleData.map(item => ({
            key: item.codeKey,
            value: item.codeValue
        }));

        const statusData = codes.resultInfo.filter(item => item.codeType === 'USER_STATUS');
        statusOptions.value = statusData.map(item => ({
            key: item.codeKey,
            value: item.codeValue
        }));

        const typeData = codes.resultInfo.filter(item => item.codeType === 'USER_TYPE');
        typeOptions.value = typeData.map(item => ({
            key: item.codeKey,
            value: item.codeValue
        }));

        resData.value = {
            rowNum: null,
            prevIdx: null,
            prevTitle: null,
            prevWriter: null,
            prevDate: null,
            nextIdx: null,
            nextTitle: null,
            nextWriter: null,
            nextDate: null,
            useYn: null,
            delYn: null,
            showYn: null,
            userIdx: 0,
            userNameKo: "",
            userNameEn: "",
            regUserIdx: 0,
            regUserNameKo: "",
            regUserNameEn: "",
            regDttm: "",
            modUserIdx: null,
            modUserNameKo: null,
            modUserNameEn: null,
            modDttm: null,
            userId: "",
            userKey: "",
            userPwd: "",
            userSalt: "",
            userNameFirstKo: "",
            userNameLastKo: "",
            userNameFirstEn: "",
            userNameLastEn: "",
            email: null,
            gender: null,
            genderCd: null,
            birthYyyy: null,
            birthMm: null,
            birthDd: null,
            interPhoneNumber: "",
            mobile1: "",
            mobile2: "",
            mobile3: "",
            token: null,
            tokenType: null,
            connCount: 0,
            userRole: "",
            fileCount: 0,
            userRoleCd: "",
            userType: "",
            userTypeCd: "",
            userStatus: "",
            userStatusCd: "",
            signinPolicy: "",
            signinPolicyCd: "",
            mobileAgency: null,
            mobileAgencyCd: null,
            localYn: null,
            securityCode: null,
            pwdChangePeriod: 0,
            firstSigninYn: null,
            lastSigninDttm: null,
            organizationType: null,
            organizationNameKo: null,
            organizationNameEn: null,
            organizationIdx: null,
            specializedNameKo: null,
            specializedNameEn: null,
            specializedIdx: null,
            departmentNameKo: null,
            departmentNameEn: null,
            departmentIdx: null,
            userMemo: null,
            fileInfo: [],
            agree_info: null,
        };
    }
});

</script>

<style lang="scss" scoped>
.profile_reg_area {

    .profile_reg_wrap {
        @include flexbox(flex-start, flex-start);
        flex-direction: column;
        width: 100%;
        max-height: 586px;
        background: $color_white_000;
        font-size: 14px;
        overflow-y: auto;
        overflow-x: hidden;

        .overflow_wrap {
            width: 100%;
            
            .registration {
                margin-bottom: 20px;
            }

            .input_area {
                @include flexbox(center, flex-start);
                gap: 10px;
                width: 100%;
                height: auto;
                min-height: 60px;
                border-bottom: 1px solid $color_header_border;

                &>label {
                    @include flexCenter;
                    width: 120px;
                    min-width: 120px;
                    height: auto;
                    min-height: 59px;
                    font-weight: 600;
                    border-right: 1px solid $color_header_border;
                    background: $color_searchbar_bg;
                }

                &>input {
                    width: calc(100% - 120px);
                    height: 30px;
                    background: $color_white_000;
                    padding: 0 10px;
                    border: 1px solid $color_header_border;
                    border-radius: 6px;
                    margin: auto 0;

                    &[readonly] {
                        background-color: $color-grey-bg;
                        color: $color-white-400;
                        border-color: $color-show-more-btn;
                        cursor: not-allowed;

                        &:focus {
                            outline: none;
                            box-shadow: none;
                        }
                    }

                }

                &>select {
                    min-height: 28px;
                }

                &:first-of-type {
                    border-top: 1px solid $color_header_border;
                }

                &.user_gender {
                    &>label:nth-child(n+2) {
                        background: none;
                        border: none;
                        gap: 10px;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        .profile_reg_wrap {
            font-size: 12px;

            .overflow_wrap {

                .input_area {

                    &>label {
                        width: 70px;
                        min-width: 70px;
                        text-align: center;
                        word-break: keep-all;
                    }

                    &>input[type=text] {
                        width: calc(100% - 70px);
                    }
                }
            }
        }

        .pw_change_btn {
            font-size: 10px;
        }
    }
}


.pw_wrap {
    display: flex;
    align-items: center;
    gap: 10px;
}

.pw_wrap input {
    flex: 1;
}

.pw_change_btn {
    width: 110px;
    height: 30px;
    font-family: "MinSans-L", "Noto Sans KR", "Noto Sans", sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: $color_white_000;
    background-color: $color_admin_reg_btn;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
}

.pw_change_btn:hover {
    background-color: #0056b3;
}
</style>