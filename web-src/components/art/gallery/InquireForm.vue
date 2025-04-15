<template>
    <div class="inqbox">
        <h4>Inquire</h4>
        <table>
            <colgroup>
                <col width="30%" />
                <col width="*" />
            </colgroup>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>
                        <input v-model="nameFirstEn" type="text" placeholder="First" />&#32;
                        <input v-model="nameLastEn" type="text" placeholder="Last" />
                    </td>
                </tr>
                <tr>
                    <th>TEL</th>
                    <td class="country_area">
                        <div class="input_wrap">
                            <div class="input_country_code" @click="toggleCountrySelect">
                                <img :src="selectedCountryFlag" width="20" alt="Selected Country Flag" />
                                +{{ selectedCountryCode.code }}
                                <span class="icon_arrow" :class="{ rotate: isCountrySelectVisible }">
                                    <IconArrow />
                                </span>
                            </div>
                            <div v-if="isCountrySelectVisible" class="country_dropdown">
                                <div v-for="(country, code) in countryPhoneCodeMap" :key="code" class="country_option"
                                    @click="selectCountry(country)">
                                    <img :src="`https://flagcdn.com/w20/${country.code_key.split('-')[1].toLowerCase()}.png`"
                                        width="20" alt="Flag" />
                                    {{ country.country }}
                                </div>
                            </div>
                        </div>
                        <input v-model="mobile1" type="text" />
                    </td>
                </tr>
                <tr>
                    <th>E-mail</th>
                    <td>
                        <input v-model="email" type="text" />
                    </td>
                </tr>
                <tr>
                    <th>Memo</th>
                    <td>
                        <textarea v-model="memo"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="btnbox">
            <input type="submit" value="SUBMIT" @click="regComment" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useArtStore } from '@/stores/artbuddy/artStore';
import { countryPhoneCodeMap } from '@/types/common/countryCode';

const props = defineProps({ props: Array })

const route = useRoute();

const isCountrySelectVisible = ref(false);
const selectedCountryCode = ref(countryPhoneCodeMap['ID']); // 기본값: 인도네시아(ID)
const selectedCountryFlag = computed(() => {
    return `https://flagcdn.com/w20/${selectedCountryCode.value.code_key.split('-')[1].toLowerCase()}.png`;
});

const toggleCountrySelect = () => {
    isCountrySelectVisible.value = !isCountrySelectVisible.value;
};

const selectCountry = (country: any) => {
    selectedCountryCode.value = country;
    isCountrySelectVisible.value = false;
};

const artStore = useArtStore('comment');

const nameFirstEn = ref('');
const nameLastEn = ref('');
const mobile1 = ref('');
const email = ref('');
const memo = ref('');
// const selectedCountry = ref('62');

const regComment = async () => {
    if (validation()) {
        const data = {

            boardIdx: route.params.id,
            subjectKo: props.props?.main_title_ko ?? '',
            subjectEn: props.props?.main_title_en ?? '',
            contentKo: memo.value,
            contentEn: memo.value,
            subTitleKo: ' ',
            subTitleEn: ' ',
            showYn: "Y",
            openYn: "Y",
            userNameFirstKo: nameFirstEn.value,
            userNameLastKo: nameLastEn.value,
            userNameFirstEn: nameFirstEn.value,
            userNameLastEn: nameLastEn.value,
            email: email.value,
            interPhoneNumber: selectedCountryCode.value.code,
            mobile1: mobile1.value,
            commentType: "000",
            targetIdx: route.params.id,
        };

        const response = await artStore.sendComment(data);

        if (response) {
            responseLogic(response);
        }
    }
};

const handleClickOutside = (event: MouseEvent) => {
    const dropdown = document.querySelector('.country_dropdown');
    const countrySelect = document.querySelector('.input_country_code');
    if (dropdown && countrySelect && !countrySelect.contains(event.target as Node)) {
        isCountrySelectVisible.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

const responseLogic = (res: any) => {
    if (res) {
        SysAlert({
            type: 'alert',

            message: 'Thank you for expressing interest in our artwork.\nWe appreciate your inquiry.',
            isHtml: true,
            callback: () => handleNeedUpdate(),
        });
    } else {
        SysAlert({
            type: 'alert',
            message: 'Please try again in a few minutes',
        });
    }
};

const validation = (): boolean => {
    if (!nameFirstEn.value) {
        SysAlert({
            type: 'alert',
            message: 'Please enter your first name',
        });
        return false;
    }

    if (!nameLastEn.value) {
        SysAlert({
            type: 'alert',
            message: 'Please enter your last name',
        });
        return false;
    }

    if (!mobile1.value) {
        SysAlert({
            type: 'alert',
            message: 'Please enter your phone number',
        });
        return false;
    }

    if (!email.value) {
        SysAlert({
            type: 'alert',
            message: 'Please enter your e-mail',
        });
        return false;
    }

    if (!memo.value) {
        SysAlert({
            type: 'alert',
            message: 'Please enter your inquiry details',
        });
        return false;
    }

    return true;
};

const handleNeedUpdate = () => {
    nameFirstEn.value = '';
    nameLastEn.value = '';
    mobile1.value = '';
    email.value = '';
    memo.value = '';
    selectedCountryCode.value = countryPhoneCodeMap['ID'];
};
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>