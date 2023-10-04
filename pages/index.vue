<template>
    <MainLayout>
        <div id="IndexPage" class="w-full overflow-auto">
            <div class="mx-auto max-w-[500px]  overflow-hidden">
                <div id="Posts" class="px-4 max-w-[600px] mx-auto">
                    <div v-if="isPosts" v-for="post in posts" :key="post" class="text-white">
                        <Post :post="post" @isDeleted="posts = []" />
                    </div>
                    <div v-else>
                        <Client-only>
                            <div v-if="isLoading" class="mt-20 w-full flex items-center justify-center mx-auto">
                                <div class="text-white mx-auto flex flex-col items-center justify-center">
                                    <Icon name="eos-icons:bubble-loading" size="50" color="#ffffff" />
                                    <h1 class="w-full">Loading...</h1>
                                </div>
                            </div>
                            <div v-if="!isLoading" class="mt-20 w-full flex items-center justify-center mx-auto">
                                <div class="text-white mx-auto flex flex-col items-center justify-center">
                                    <Icon name="tabler:mood-empty" size="50" color="#ffffff" />
                                    <h1 class="w-full">Make the first post</h1>
                                </div>
                            </div>
                        </Client-only>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import { useUserStore } from '../stores/user';
const user = useSupabaseUser()
const userStore = useUserStore()
let posts = ref([])
let isPosts = ref(false)
let isLoading = ref(false)
watchEffect(() => {
    if (!user.value) {
        return navigateTo('/auth')
    }
})


onBeforeMount(async () => {
    try {
        isLoading.value = true
        await userStore.getAllPosts()
        isLoading.value = false
    } catch (error) {
        console.log(error);
    }
})

onMounted(() => {
    watchEffect(() => {
        if (userStore.posts && userStore.posts.length >= 1) {
            posts.value = userStore.posts
            isPosts.value = true
        }
    })
})

onMounted(() => {
    watchEffect(() => {
        if (userStore.posts && userStore.posts.length >= 1) {
            isPosts.value = true
            posts.value = userStore.posts
        }
    })
}, { deep: true })
</script>

<style lang="scss" scoped></style>