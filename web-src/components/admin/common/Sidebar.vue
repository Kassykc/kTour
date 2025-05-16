<template>
    <div class="sidebar_wrap">
        <!-- lv1 -->
        <div v-for="menu in depth" :key="menu.menuIdx" class="menu-depth-1"
            :class="{ 'active': menu.open || isActive(menu) }">
            <div @click="handleMenuClick(menu)" class="category_name">
                {{ menu.menuNameKo }}
            </div>
            <!-- lv2 -->
            <div v-if="menu.open && menu.children && menu.children.length" class="menu-depth-2"
                :ref="el => menuRefs.set(menu.menuIdx, el)">
                <div v-for="subMenu in menu.children" :key="subMenu.menuIdx" class="sub_menu_wrap">
                    <div @click="handleSubMenuClick(subMenu)" class="sub_menu_name">
                        {{ subMenu.menuNameKo }}
                    </div>
                    <!-- lv3 -->
                    <div v-if="subMenu.open && subMenu.children && subMenu.children.length" class="menu-depth-3">
                        <div v-for="subSubMenu in subMenu.children" :key="subSubMenu.menuIdx">
                            <div @click="handleMenuClick(subSubMenu)">
                                {{ subSubMenu.menuNameKo }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ApiResponse } from "@/types/admin/menus";
import { useMenuStore } from "@/stores/admin/common/menuStore";

const router = useRouter();
const menuStore = useMenuStore("menu");
const resData = ref({} as ApiResponse);
const menuList = ref([] as ApiResponse["resultInfo"]);
const depth = ref([] as any[]);

const menuRefs = new Map();

const emit = defineEmits(["updateTitle"]);

const handleMenuClick = (menu: any) => {
    const hasChildren = menu.children && menu.children.length > 0;
    const hasPath = !!menu.menuPath;

    if (hasPath) {
        router.push("/admin/" + menu.menuPath);
        emit("updateTitle", menu.menuNameKo);
    }

    if (hasChildren) {
        menu.open = !menu.open;

        if (menu.open) {
            closeOtherMenus(menu);
            nextTick(() => {
                const element = menuRefs.get(menu.menuIdx);
                if (element) {
                    element.style.height = "0px";
                    element.style.transition = "height 0.3s ease-in-out";

                    setTimeout(() => {
                        element.style.height = `${menu.children.length * 48}px`;
                    }, 10);
                }
            });
        } else {
            const element = menuRefs.get(menu.menuIdx);
            if (element) {
                element.style.height = "0px";
            }
        }
    } else {
        closeOtherMenus(menu);
    }
};

const handleSubMenuClick = (subMenu: any) => {
    if (!subMenu.children || subMenu.children.length === 0) {
        router.push("/admin/" + subMenu.menuPath);
        emit("updateTitle", subMenu.menuNameKo);
        sessionStorage.setItem('nowMenu', subMenu.menuNameKo);
    } else {
        subMenu.open = true;
    }
};

const closeOtherMenus = (activeMenu: any) => {
    const closeMenu = (menu: any) => {
        if (menu !== activeMenu) {
            menu.open = false;
            if (menu.children && menu.children.length) {
                menu.children.forEach(closeMenu);
            }
        }
    };

    depth.value.forEach(closeMenu);
};

const isActive = (menu: any) => {
    return router.currentRoute.value.path.includes(menu.menuPath);
};

onMounted(async () => {
    const isLogin = common.getCookie('mediCalIsLogin') == 'Y';
    if (isLogin) {
        const response: ApiResponse = await menuStore.setMenus();

        if (response) {
            response.resultInfo = response.resultInfo.filter(
                (item) => !["사전 등록 관리", "사전등록", "참가자 관리"].includes(item.menuNameKo)
            );
            resData.value = response;
            menuList.value = response.resultInfo;

            if (menuList.value) {
                const menuMap = new Map<number, any>();
                menuList.value.forEach((menu) => {
                    menu.children = [];
                    menu.open = false;
                    menuMap.set(menu.menuIdx, menu);
                });

                const menuTree: any[] = [];
                menuList.value.forEach((menu) => {
                    if (menu.menuTypeCd === "000") {
                        menuTree.push(menu);
                    } else {
                        const parentCode =
                            menu.menuTypeCd === "100"
                                ? menu.menuCode.substring(0, 1) + "000"
                                : menu.menuCode.substring(0, 2) + "00";
                        const parent = menuList.value.find((item) => item.menuCode === parentCode);
                        if (parent) {
                            parent.children.push(menu);
                        }
                    }
                });
                depth.value = menuTree;
            }
        }
    }
});
</script>


<style lang="scss" scoped>
.sidebar_wrap {
    @include flexCenter;
    flex-direction: column;

    .menu-depth-1 {
        width: 100%;
        text-align: center;
        cursor: pointer;

        &.active {
            background-color: $color_main_blue;
        }

        .category_name {
            @include flexCenter;
            flex-direction: column;
            width: 100%;
            height: 48px;
            font-size: 14px;
            font-weight: 500;
        }

        .menu-depth-2 {
            height: 0;
            overflow: hidden;
            font-weight: normal;
            cursor: pointer;
            background: $color_black_800;

            .sub_menu_wrap {
                .sub_menu_name {
                    @include flexCenter;
                    flex-direction: column;
                    width: 100%;
                    height: 48px;
                    font-size: 14px;
                    font-weight: 500;
                }

                .menu-depth-3 {
                    margin-left: 40px;
                    font-style: italic;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
