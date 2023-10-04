<template>
    <div class="w-full h-screen pt-32">
        <div class="w-full">
            <div class="w-full flex items-center justify-center gap-2.5 p-2">
                <img src="/threads-logo.png" class="w-[35px]" alt="">
                <span class="font-bold text-2xl text-white">Threads</span>
            </div>
        </div>

        <div class="max-w-[350px] mx-auto px-2 text-white">
            <h1 class="text-center mb-6 mt-4 ">Login / Register</h1>
            <button class="flex items-center justify-center gap-3 p-1.5 w-full border rounded-full text-lg font-semibold"
                @click="login('github')">
                <div class="flex items-center gap-2 justify-center">
                    <img src="/github-logo.png" class="w-full max-w-[30px] rounded-full" alt=""> Github
                </div>
            </button>
        </div>

    </div>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(() => {
    if (user.value) {
        return navigateTo('/')
    }
})

const login = async (provider) => {
    const { data, error } = await client.auth.signInWithOAuth({
        provider,
    })
    if (data) console.log(data);
    if (error) console.log(error);
}

</script>

<style lang="scss" scoped></style>