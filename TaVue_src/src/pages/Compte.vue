<script setup lang="">
    import { ref, onMounted } from 'vue'
    // Import PocketBase
    import PocketBase from 'pocketbase'

    // Import components
    import Btn from '@/components/Btn.vue';
    import IconGoogleVue from '@/components/icons/IconGoogle.vue';

    // PocketBase vps connexion
    var pocketbase_ip=''
    if(import.meta.env.MODE === 'production')
        pocketbase_ip='https://tavue.nino-da-silva.fr/'
    else
        pocketbase_ip='http://127.0.0.1:8090'

    const pb = new PocketBase(pocketbase_ip)
    //

    // Elt de connexion
    let isConnected = ref(false)
    let user =  ref('')
    let psw = ref('')
    // User connecté
    let currentUser = ref(null)
    let avatar = ref(null)

    var showInscription = ref(false)

    // Fonction de rafraichissement des données sur la page
    const refresh = () => {
        if(pb.authStore.isValid){
        currentUser.value = pb.authStore.model
        isConnected.value = true

        avatar.value = pocketbase_ip+"/api/files" //adresse serveur et du repertoire des fichiers img
            +currentUser.value.collectionId
            +"/"
            +currentUser.value.id //Id de l'utilisateur connecté
            +"/"
            +currentUser.value.avatar //Nom du fichier avatar de l'utilisateur
            +"?thumb=100x100"
        }
    }

  onMounted(async () => {
      refresh()
  })

  // Fonction connexion
  const connect = async() => {
    try{
      const authData = await pb.collection('users').authWithPassword(user.value, psw.value)
      refresh()
    }catch(error){
      alert("Erreur de connexion : mauvais login et/ou mot de passe")
      user.value = ''
      psw.value = ''
    }
  }
  // Fonction déconnexion
  const deconnect = ()=>{
    pb.authStore.clear()
    isConnected.value = false
    avatar.value = null
    // Retour à la page d'accueil -> Redirection
    window.location.href = "/"
  }
  // Fonction connexion avec Google
  const googleLogin = async() => {
    const authData = await pb.collection("users").authWithOAuth2({ provider: "google" });
    if (pb.authStore.isValid) {
      isConnected.value = true;
      currentUser.value = pb.authStore.model;
    }
  }
  // Fonction inscription
  const register = async() => {
    try {
      currentUser = {
        email:            document.getElementById("email").value,
        password:         document.getElementById("passwd").value,
        passwordConfirm:  document.getElementById("passwd").value,
        username:         document.getElementById("nom").value,
        name:             document.getElementById("prenom").value,
      };
      const records = await pb.collection("users").create(currentUser);
      
      await pb.collection("users").requestVerification(document.getElementById("email").value);
      alert("Inscription réussie ! Un mail de vérification vous a été envoyé");
      // Changement de page
      showInscription.value = false;
      // Actualisation des données et connexion
      refresh()
      isConnected.value = true;
    }catch(error){
      alert("Erreur lors de l'inscription. Vérifiez que votre adresse mail et votre mot de passe soient valides");
    }
  }

  // Gestion de la présence d'avatar
  const avatarElement = document.getElementById("avatar");

  if (avatarElement) {
    if (avatar.value == null) {
      // Cacher l'élément
      avatarElement.addClassName("hidden");
    } else {
      // Afficher l'élément
      avatarElement.removeClassName("hidden");
    }
  };


  // Plugin pour le titre de la page
  import {useHead} from '@unhead/vue'
  useHead ({
    title: 'Compte - TaVue'
  }) 
  //
</script>

<template>
  <!-- User connected -->
  <span v-if="isConnected" class="mt-10 mb-10 grid text-center">
    <img id="avatar" :src=avatar class="hidden mx-auto mb-4" alt="avatar" />
    <span class="mr-2 ml-2">
      {{ currentUser.name }}
    </span>
    <button class="mx-auto w-[200px] h-12 mt-5" type="button" @click="deconnect()"><Btn class="" text="Déconnexion" /></button>
  </span>

  <!-- User not connected -->
  <div v-if="!isConnected && !showInscription" class="text-center dispo">
    <div class="mt-40">
      <h1 class="mb-8 text-3xl font-Khand font-bold title-shadow">Connexion</h1>
      <form @submit.prevent="connect()">
        <input class="block mx-auto input-connect" type="email" required id="email" placeholder="Mail" v-model="user">
        <input class="block mx-auto input-connect" type="password" required id="passwd" placeholder="Mot de passe" v-model="psw">
        
        <div class="flex gap-3 justify-center mt-7 mb-5">
          <button type="submit"><Btn text="Se connecter"/></button>
          <!-- Connexion btn Google -->
          <button @click="googleLogin()">
            <Btn text="Google">
              <template #icon>
                <IconGoogleVue class="w-6 h-6 mr-3"/>
              </template>
            </Btn>
          </button>
        </div>
      </form>
      <div class="text-center">
        <p>Vous n'avez pas de compte ?</p>
        <button class="font-bold" @click="showInscription = true">S'inscrire</button>
      </div>
    </div>
    <div>
      <img src="/img/Img-connexion.webp" alt="Image d'illustration lunettes">
    </div>
  </div>

  <!-- no account -->
  <div v-if="showInscription" class="text-center dispo">
    <div class="mt-40">
      <h1 class="mb-8 text-3xl font-Khand font-bold title-shadow">Inscription</h1>
      <form @submit.prevent="register()">
        <input class="block mx-auto input-connect" type="text" required id="nom" placeholder="Nom">
        <input class="block mx-auto input-connect" type="text" required id="prenom" placeholder="Prénom">
        <input class="block mx-auto input-connect" type="email" required id="email" placeholder="Mail">
        <input class="block mx-auto input-connect" type="password" required id="passwd" placeholder="Mot de passe">
        
        <div class="flex gap-3 justify-center mt-7 mb-5">
          <button type="submit"><Btn text="S'inscrire"/></button>
          <button @click="googleLogin()">
            <Btn text="Google">
              <template #icon>
                <IconGoogleVue class="w-6 h-6 mr-3"/>
              </template>
            </Btn>
          </button>
        </div>
      </form>
      <div class="text-center">
        <p>Vous n'avez pas de compte ?</p>
        <button class="font-bold" @click="showInscription = false">Se connecter</button>
      </div>
    </div>
    <div>
      <img src="/img/Img-connexion.webp" alt="Image d'illustration lunettes">
    </div>
  </div>

  <!-- Creation History - Connected -->
  <div v-if="isConnected">

  </div>
</template>