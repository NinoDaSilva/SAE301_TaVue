<script setup lang="">
    import { ref, computed, watch } from 'vue'
    import { useWindowScroll } from '@vueuse/core'

    // Import components
    import LogoTaVue from '@/components/icons/LogoTaVue.vue'
    import IconAccount from '@/components/icons/IconAccount.vue'

    // Fonction de ouverture / fermeture du menu
    const menuIsOpen = ref(false)
    function closeMenu() {
        menuIsOpen.value = false
    }
     // Plugin
    const { y } = useWindowScroll()
    const underLimit = computed(() => y.value < 400)

    const dirTop = ref(true)
        watch(y, (y, oldY) => {
        dirTop.value = y < oldY
    })
    //
</script>

<template>
    <header :class="{'!-translate-y-full !bg-transparent': !dirTop, '!bg-special': underLimit}"
        class="sticky top-0 bg-special z-50 flex w-full translate-y-0 items-center px-5 lg:px-12 pb-1 pt-5 transition-all duration-300 ease-in-out text-base font-Khand text-blanc md:text-xl">
        <div class="mr-8">
            <a class="link" href="/"><LogoTaVue /></a>
        </div>

        <button class="absolute top-9 right-8 z-10 flex h-5 w-8 flex-col justify-between md:hidden mt-[0.8vh]"
            @click="menuIsOpen = !menuIsOpen">
            <div class="ease h-[2px] w-full transform rounded-full bg-blanc transition duration-300" >
            </div>
            <div class="ease h-[2px] w-full transform rounded-full bg-blanc transition duration-300">
            </div>
            <div class="ease h-[2px] w-full transform rounded-full bg-blanc transition duration-300">
            </div>
        </button>

        <nav class="bg-special bg-opacity-90 invisible fixed inset-0 h-screen w-screen transition-all duration-300 ease-in-out justify-end md:visible md:relative md:flex md:h-auto md:items-center md:tracking-wide md:opacity-100 md:bg-blanc md:bg-opacity-0"
            :class="{ '!visible opacity-100 !text-center': menuIsOpen }">
            <ul class="font-primary font-medium lg:gap-2 items-center mt-[14vh] md:m-0 md:flex">
                <li><RouterLink class="menu-link" to="/" @click="closeMenu">Accueil</RouterLink></li>
                <li><RouterLink class="menu-link" to="/NosLunettes" @click="closeMenu">Nos lunettes</RouterLink></li>
                <li><RouterLink class="menu-link" to="/Personnalisation" @click="closeMenu">Personnalisation</RouterLink></li>
                <li><RouterLink class="link" to="/Compte" @click="closeMenu"><IconAccount class="max-md:hidden sm:w-14 sm:h-14 lg:ml-10" /></RouterLink></li>
            </ul>
        </nav>
    </header>
</template>