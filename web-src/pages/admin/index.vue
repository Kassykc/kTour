<template>
    <div class="admin_bg">
        <div class="login_wrap">
            <div class="logo_area">
                <img src="@/assets/images/logo_color.png" alt="한국공학대학교 로고" class="logo_img">
                <h1 class="login_title">로그인을 해주세요.</h1>
            </div>
            <div class="login_fill_area">
                <div class="input_id_area">
                    <h5>아이디</h5>
                    <input type="text" v-model="loginId" class="input_id" placeholder="아이디를 입력해주세요."
                        @keydown.enter="fetchLogin" />
                </div>
                <div class="input_pw_area">
                    <h5>비밀번호</h5>
                    <input type="password" v-model="loginPw" class="input_pw" placeholder="비밀번호를 입력해주세요."
                        @keydown.enter="fetchLogin" />
                </div>
                <div class="btn_area">
                    <div @click="fetchLogin" class="login_btn">로그인</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "@/stores/admin/common/loginStore";
import type { ApiResponse } from "@/types/admin/login"
import { useMenuStore } from "@/stores/admin/common/menuStore";

const loginStore = useLoginStore('login');
const codeStore = useMenuStore('code');
const router = useRouter();

const loginId = ref();
const loginPw = ref();

const fetchLogin = async () => {
    const data = {
        user_id: loginId.value,
        user_pwd: loginPw.value,
        admin_yn: 'Y',
    }
    const response = await loginStore.goLogin(data);
    if (response.resultInfo) {
        const params = {
            page_num: 1,
            page_size: 999
        }

        const userNm = response.resultInfo.regUserNameKo;

        const response2 = await codeStore.setCodes(params);
        common.setCookie('userNm', userNm);
        common.setCookie('artToken', response.resultInfo.token);
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
    if (islogin == 'Y') {
        router.push('/admin/noticeBoard');
    }
})
</script>

<style lang="scss" scoped>
.admin_bg {
    width: 100%;
    height: 100%;
    background: $color_gray_100;

    .login_wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @include flexCenter;
        flex-direction: column;
        width: 600px;
        padding: 80px 60px;
        background: $color_white_000;

        .logo_area {
            @include flexCenter;
            flex-direction: column;
            gap: 30px;
            margin-bottom: 40px;

            .logo_img {
                width: 300px;
                margin-bottom: 20px;
            }

            .login_title {
                font-size: 22px;
                font-weight: 600;
            }
        }

        .login_fill_area {
            @include flexCenter;
            flex-direction: column;
            width: 100%;
            gap: 20px;

            .input_id_area,
            .input_pw_area {
                @include flexbox(flex-start, center);
                flex-direction: column;
                width: 100%;

                &>h5 {
                    font-size: 16px;
                    font-weight: 400;
                    margin-bottom: 8px;
                }

                .input_id,
                .input_pw {
                    width: 100%;
                    height: 40px;
                    border: 1px solid $color_black_900;
                    padding: 0 10px;
                }
            }
        }

        .btn_area {
            width: 100%;
            @include flexCenter;
            margin-top: 20px;

            .login_btn {
                @include flexCenter;
                color: $color_white_000;
                background: $color_main_blue;
                cursor: pointer;
                padding: 10px 20px;
                border-radius: 8px;
            }
        }

        @media (max-width: 768px) {
            width: 100%;
            height: 100%;
            padding: 50px 30px;
        }
    }
}
</style>