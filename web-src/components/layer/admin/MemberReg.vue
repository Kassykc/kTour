<template>
    <div class="profile_reg_area">
        <div class="profile_reg_wrap text-[12px] sm:text-[14px] flex justify-start items-start flex-col w-full max-h-[586px] bg-white overflow-x-hidden overflow-y-auto ">
            <div class="overflow_wrap w-full">
                <h2 class="registration !mb-[20px]">Profile Registration</h2>
                <div class="user_id input_area flex justifiy-start items-center gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] flex justify-center items-center text-center break-keep">ID</label>
                    <input type="text" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] text-[#a8a8a8] bg-[#f5f5f5] !py-0 !px-[10px] !border !border-solid !border-[#dddddd] rounded-[6px] !my-auto !mx-0 cursor-not-allowed" v-model="resData.userId" autocomplete="off" v-if="props.mode == 'mod'"
                        readonly />
                    <input type="text" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] !border !border-solid !border-[#dcdcdc] rounded-[6px] !my-auto !mx-0" v-model="resData.userId" autocomplete="off" v-else />
                </div>
                <div class="user_pw input_area flex justifiy-start items-center gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] flex justify-center items-center text-center break-keep">사용자 비밀번호</label>
                    <input type="password" v-model="resData.userPwd" autocomplete="off"
                        :readonly="isPasswordEditable" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] text-[#a8a8a8] bg-[#f5f5f5] !py-0 !px-[10px] !border !border-solid !border-[#dddddd] rounded-[6px] !my-auto !mx-0 cursor-not-allowed"/>
                    <button @click="enablePasswordEdit" type="button" class="pw_change_btn text-[12px] w-[110px] h-[30px] font-bold text-white !bg-[#0047a0] border-0 rounded-[5px] !py-[5px] !px-[10px] cursor-pointer " v-if="isPasswordEditable">
                        비밀번호 변경
                    </button>
                </div>
                <div class="user_last_name user_last_name_ko input_area flex justifiy-start items-center gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] flex justify-center items-center text-center break-keep">성(한글)</label>
                    <input type="text" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] !border !border-solid !border-[#dcdcdc] rounded-[6px] !my-auto !mx-0" v-model="resData.userNameFirstKo" autocomplete="off" />
                </div>
                <div class="user_first_name user_first_name_ko input_area flex justifiy-start items-center gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] flex justify-center items-center text-center break-keep">이름(한글)</label>
                    <input type="text" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] !border !border-solid !border-[#dcdcdc] rounded-[6px] !my-auto !mx-0" v-model="resData.userNameLastKo" autocomplete="off" />
                </div>
                <div class="user_email input_area flex justifiy-start items-center gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] flex justify-center items-center text-center break-keep">이메일</label>
                    <input type="text" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] !border !border-solid !border-[#dcdcdc] rounded-[6px] !my-auto !mx-0" v-model="resData.email" autocomplete="off" />
                </div>
                <div class="user_gender input_area flex justifiy-start items-center gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] flex justify-center items-center text-center break-keep">성별</label>
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] gap-[10px] flex justify-center items-center text-center break-keep ">
                        <input type="radio" v-model="resData.genderCd" value="0" />남성
                    </label>
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] gap-[10px] flex justify-center items-center text-center break-keep ">
                        <input type="radio" v-model="resData.genderCd" value="1" />여성
                    </label>
                </div>
                <div class="user_birth_date input_area flex justifiy-start items-center gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] flex justify-center items-center text-center break-keep">생년월일</label>
                    <input type="text" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] !border !border-solid !border-[#dcdcdc] rounded-[6px] !my-auto !mx-0" v-model="resData.birthYyyy" autocomplete="off" /> 년
                    <input type="text" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] !border !border-solid !border-[#dcdcdc] rounded-[6px] !my-auto !mx-0" v-model="resData.birthMm" autocomplete="off" /> 월
                    <input type="text" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] !border !border-solid !border-[#dcdcdc] rounded-[6px] !my-auto !mx-0" v-model="resData.birthDd" autocomplete="off" /> 일
                </div>
                <div class="user_contact_info input_area flex justifiy-start items-center gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] flex justify-center items-center text-center break-keep">연락처</label>
                    <input type="text" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] !border !border-solid !border-[#dcdcdc] rounded-[6px] !my-auto !mx-0" v-model="resData.mobile1" autocomplete="off" /> -
                    <input type="text" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] !border !border-solid !border-[#dcdcdc] rounded-[6px] !my-auto !mx-0" v-model="resData.mobile2" autocomplete="off" /> -
                    <input type="text" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] !border !border-solid !border-[#dcdcdc] rounded-[6px] !my-auto !mx-0" v-model="resData.mobile3" autocomplete="off" />
                </div>
                <div class="user_role input_area flex justifiy-start items-center gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] flex justify-center items-center text-center break-keep">사용자 역할</label>
                    <select class="min-h-[28px] w-[100px] !px-[10px]" v-model="resData.userRoleCd">
                        <option v-for="role in roleOptions" :key="role.key" :value="role.key">
                            {{ role.value }}
                        </option>
                    </select>
                </div>

                <div class="user_type input_area flex justifiy-start items-center gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] flex justify-center items-center text-center break-keep">사용자 타입</label>
                    <select class="min-h-[28px] w-[100px] !px-[10px]" v-model="resData.userTypeCd">
                        <option v-for="role in typeOptions" :key="role.key" :value="role.key">
                            {{ role.value }}
                        </option>
                    </select>
                </div>

                <div class="user_status input_area flex justifiy-start items-center gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] flex justify-center items-center text-center break-keep">사용자 상태</label>
                    <select class="min-h-[28px] w-[100px] !px-[10px]" v-model="resData.userStatusCd">
                        <option v-for="role in statusOptions" :key="role.key" :value="role.key">
                            {{ role.value }}
                        </option>
                    </select>
                </div>
                <div class="user_memo input_area flex justifiy-start items-center gap-[10px] w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label class="w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[59px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] flex justify-center items-center text-center break-keep">사용자 메모</label>
                    <input type="text" class="w-[calc(100%-70px)] sm:w-[clac(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] !border !border-solid !border-[#dcdcdc] rounded-[6px] !my-auto !mx-0" v-model="resData.userMemo" autocomplete="off" />
                </div>
            </div>
        </div>

        <div class="btn_wrap flex items-center justify-end gap-[6px]">
            <div class="common_btn reg_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#0047A0]" @click="goReg" v-if="props.mode == 'reg'">등록</div>
            <div class="common_btn delete_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#C93631]" @click="goDelete" v-if="props.mode == 'mod'">삭제</div>
            <div class="common_btn modify_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#12A0DD]" @click="goUpdate" v-if="props.mode == 'mod'">수정</div>
            <div class="common_btn cancle_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#bfbfbf]" @click="emit('close')">취소</div>
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
</style>