<template>
    <div class="w-full h-screen bg-gray-100 flex items-center justify-center">
        <div class="bg-white w-[90%] max-w-[600px] p-8 rounded-xl shadow-md">
            <div class="flex flex-col items-center gap-4 mb-10">
                <img src="@/assets/images/logo_color.png" alt="한국공학대학교 로고" class="w-64 mb-4" />
                <h1 class="text-xl font-semibold">로그인을 해주세요.</h1>
            </div>

            <div class="space-y-6">
                <div>
                    <label for="loginId" class="block text-sm font-medium text-gray-700 mb-1">아이디</label>
                    <input id="loginId" type="text" v-model="loginId" placeholder="아이디를 입력해주세요."
                        class="w-full border border-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        tabindex="0" @keydown.enter="fetchLogin" />
                </div>

                <div>
                    <label for="loginPw" class="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
                    <input id="loginPw" type="password" v-model="loginPw" placeholder="비밀번호를 입력해주세요."
                        class="w-full border border-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        tabindex="1" @keydown.enter="fetchLogin" />
                </div>

                <div class="pt-4 flex justify-center">
                    <button @click="fetchLogin"
                        class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition">
                        로그인
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "@/stores/admin/common/loginStore";
import type { ApiResponse } from "@/types/admin/login"
import { useMenuStore } from "@/stores/admin/common/menuStore";

definePageMeta({
    layout: "login"
});

const loginStore = useLoginStore('login');
const codeStore = useMenuStore('code');
const router = useRouter();

const loginId = ref();
const loginPw = ref();

const fetchLogin = async () => {
    const data = {
        userId: loginId.value,
        userPwd: loginPw.value,
        adminYn: 'Y',
    }
    const response = await loginStore.goLogin(data);
    if (response != null) {
        const params = {
            page_num: 1,
            page_size: 999
        }

        const userNm = response.resultInfo.regUserNameKo;

        const response2 = await codeStore.setCodes(params);
        common.setCookie('userNm', userNm);
        common.setCookie('ableToken', response.resultInfo.token);
        common.setCookie('isLogin', 'Y');
        sessionStorage.setItem('codes', JSON.stringify(response2));
        sessionStorage.setItem('nowMenu', '공지사항');

        if (response.resultInfo.userRoleCd == '000') {
            common.setCookie('admin', 'Y')
        } else {
            common.setCookie('admin', 'N')
        }

        router.push("/admin/noticeBoard");
    } else {
        SysAlert(
            {
                type: "alert",
                message: "입력정보를 확인해주세요.",
                callback: () => { },
            }
        )
        return;
    }

};


onMounted(() => {
    const islogin = common.getCookie('isLogin');
    if (islogin === 'Y') {
        router.push('/admin/noticeBoard');
    }
});
</script>
