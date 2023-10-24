<script setup lang="ts">
    import LogoTaVue from '@/components/icons/LogoTaVue.vue';
    import IconSocial from '@/components/icons/IconSocial.vue';
</script>

<template>
    <footer class="bg-special text-blanc px-5 md:px-10 xl:px-10 pt-10 pb-2">
        <div class="sm:justify-between lg:flex lg:mx-14 lg:mr-24 mb-20">
            <div class="mb-14">
                <LogoTaVue class="link mb-16 ml-4"/>
                <div>
                    <div class="flex items-center gap-3 mb-2 sm:ml-3">
                        <IconSocial />
                        <span class="font-Khand text-base lg:text-xl">Newletter</span>
                    </div>
                    <p class="text-2sm font-light sm:ml-3">Restez à jour avec les dernières sorties</p>
                    <div class="mt-4">
                        <input class="input_news text-special" type="email" placeholder="Email" />
                    </div>
                </div>
            </div>
            <nav class="sm:justify-between md:flex md:mx-20 lg:mx-0 sm:gap-12 xl:gap-32 lg:mt-40">
                <ul>
                    <li class="item_footer_list link"><a href="#">Centre d’aide</a></li>
                    <li class="item_footer_list link"><a href="#">FAQ</a></li>
                </ul>
                <ul>
                    <li class="item_footer_list link"><a href="#">Nous contacter</a></li>
                    <li class="item_footer_list link"><a href="#">Centre d'aide</a></li>
                    <li class="item_footer_list link"><a href="#">Partenaire</a></li>
                </ul>
                <ul>
                    <li class="item_footer_list link"><a href="#">Politique de confidentialité</a></li>
                    <li class="item_footer_list link"><a href="#">Conditions générales</a></li>
                    <li class="item_footer_list link"><a href="#">Mentions légales</a></li>
                </ul>
            </nav>
        </div>
        <div class="text-center font-light">
            <span class="text-3xs">© Copyright 2023 <strong>TaVue</strong></span>
        </div>
    </footer>
</template>