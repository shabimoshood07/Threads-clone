<template>
    <div id="Modal"
        class="fixed grid place-items-center h-screen z-50 bottom-0 bg-black bg-opacity-50 backdrop-blur-md w-full">
        <div class="bg-black w-full max-w-[300px] rounded-lg text-white border border-gray-600 p-2">
            <button @click="userStore.isLogoutOverlay = false" class="flex items-center justify-center bg-black w-full p-3">
                <h1>Close Modal</h1>
                <Icon name="mdi:close" size="25" />
            </button>
            <div class="border-b border-b-gray-700 my-1" />
            <button class="flex justify-between items-center bg-black w-full px-3" @click="logout()">
                <h1>Log Out</h1>
                <Icon name="ph:sign-out" size="25" />

            </button>
        </div>

    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
const client = useSupabaseClient()

const logout = async () => {
    client.auth.signOut()
    userStore.isLogoutOverlay = false
}
</script>

<style lang="scss" scoped></style>