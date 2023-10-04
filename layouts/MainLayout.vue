<template>
    <div id="MainLayout" class="h-screen">
        <div class="w-full max-w-[500px] mx-auto">
            <div id="TopMenu" class="w-full flex items-center justify-center px-2 h-10 my-2">
                <img src="/threads-logo.png" alt="threads-logo" class="w-[35px]" />
            </div>
        </div>
        <div class="flex w-full max-w-[500px] mx-auto h-[calc(100vh-125px)]">
            <slot />
        </div>
        <div id="BottomNav" class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-black">
            <div class="w-full flex max-w-[500px] mx-auto items-center justify-around">
                <button @click="navigateTo('/')" class="w-full h-full">
                    <Icon name="material-symbols:home-outline" size="32" color="#ffffff" />
                </button>
                <button @click="userStore.isMenuOverlay = true" class="w-full h-full">
                    <Icon name="material-symbols:edit-square-outline-rounded" size="32" color="#ffffff" class="mb-1" />
                </button>
                <button @click="userStore.isLogoutOverlay = true" class="w-full h-full">
                    <Icon name="ph:sign-out" size="32" color="#ffffff" class="mb-1" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { navigateTo } from "nuxt/app";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore()
</script>

<style lang="scss" scoped></style>
