<template>
    <nav class="nav_wrap">
        <NuxtLink :to="'/'" class="menu" :class="{ 'is-on': currentPage === 'index' }">
            <IconNavHome :on="currentPage === 'index'" class="icon" />
            <span>{{ $t("NavMenu.main") }}</span>
        </NuxtLink>
        <NuxtLink :to="`/promotion/${common.getCookie('promotionFirstSq')}`" class="menu"
            :class="{ 'is-on': currentPage === 'promotion-id' }">
            <IconNavPromotion v-if="currentPage === 'promotion-id'" class="icon" />
            <IconNavPromotionNormal v-else class="icon" />
            <span>{{ $t("NavMenu.promotion") }}</span>
        </NuxtLink>
        <NuxtLink :to="'/myvideo'" class="menu center" :class="{ 'is-on': currentPage === 'myvideo' }">
            <div class="icon">
                <IconNavMyVideoOn v-if="currentPage === 'myvideo'" />
                <IconNavMyVideo v-else />
            </div>
            <span>{{ $t("NavMenu.myvideo") }}</span>
        </NuxtLink>
        <NuxtLink :to="'/favorite'" class="menu" :class="{ 'is-on': currentPage === 'favorite' }">
            <IconNavFavorite :on="currentPage === 'favorite'" class="icon" />
            <span>{{ $t("NavMenu.favorite") }}</span>
        </NuxtLink>
        <NuxtLink :to="'/my'" class="menu" :class="{ 'is-on': currentPage === 'my' }">
            <IconNavMy :on="currentPage === 'my'" class="icon" />
            <span>{{ $t("NavMenu.my") }}</span>
        </NuxtLink>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const currentPage = ref('');
const route = useRoute();

watch(() => route.name, (newName) => {
        if (typeof newName === "string") {
            currentPage.value = newName;
        } else {
            currentPage.value = "index"; // 기본값
        }
    },
    { immediate: true } // 컴포넌트 초기화 시에도 즉시 실행
);
</script>

<style lang="scss" scoped>
.nav_wrap {
    @include flexCenter;
    gap: 1.4rem;
    height: 84px;
    padding: 0 2rem 1rem;
    background-color: $color-white-000;
    border-radius: 2rem 2rem 0 0;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 555;

    .menu {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        padding-top: 1rem;
        color: $color-disable-btn-text;
        position: relative;
        cursor: pointer;

        &.is-on {
            color: $color-main-blue;

            &::before {
                content: "";
                display: block;
                width: 1.7rem;
                height: 4px;
                background-color: $color-main-blue;
                border-radius: 5px;
                position: absolute;
                top: -1px;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        &.center {
            .icon {
                @include flexCenter;
                width: 64px;
                height: 64px;
                margin-top: -32px;
                margin-bottom: 5px;
                background-color: $color-nav-center-bg;
                border: 4px solid $color-white-000;
                border-radius: 50%;
            }
        }

        &.center.is-on {
            .icon {
                background-color: $color-main-blue;
            }

            &::before {
                display: none;
            }
        }

        .icon {
            height: 1.7rem;
            margin-bottom: 10px;
        }

        span {
            font-size: 0.7em;
            font-weight: 400;
        }
    }
}
</style>