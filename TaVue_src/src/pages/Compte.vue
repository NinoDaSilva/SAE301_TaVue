<script setup lang="">
    import { ref, onMounted } from 'vue'
    // Import PocketBase
    import PocketBase from 'pocketbase'

    // Import components
    import Btn from '@/components/Btn.vue';
    import IconGoogleVue from '@/components/icons/IconGoogle.vue';
    import CardHistorique from '@/components/CardHistorique.vue';

    // PocketBase vps connexion
    var pocketbase_ip=''
    if(import.meta.env.MODE === 'production')
        pocketbase_ip='https://tavue.nino-da-silva.fr'
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

        avatar.value = pocketbase_ip+"/api/files/" //adresse serveur et du repertoire des fichiers img
            +currentUser.value.collectionId
            +"/"
            +currentUser.value.id //Id de l'utilisateur connecté
            +"/"
            +currentUser.value.avatar //Nom du fichier avatar de l'utilisateur
            +"?thumb=100x100"
        }
    }


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
  // Fonction connexion avec Google
  const githubLogin = async() => {
    const authData = await pb.collection("users").authWithOAuth2({ provider: "github" });
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
    if (avatar.value) {
      // Afficher l'élément
      avatarElement.removeClassName("hidden");
    } else {
      // Cacher l'élément
      avatarElement.addClassName("hidden");
    }
  };
  //--//

  // Récupération des lunettes de l'utilisateur
  const getLunettes = async() => {
    try{
      const records = await pb.collection('lunetteUser').getFullList({
        sort: '-created',
        filter: {
          userId: currentUser.value.id
        }
      });
      return records;
    }catch(error){
      console.error("Erreur lors de la récupération des lunettes")
    }
  }


  onMounted(async () => {
    refresh()
  })
  

  // Plugin pour le titre de la page
  import {useHead} from '@unhead/vue'
  useHead ({
    title: 'Compte - TaVue'
  }) 
  //--//
</script>

<template>
  <!-- User connected -->
  <div v-if="isConnected" class="mt-10 mb-10 max-md:text-center md:flex md:justify-between md:mx-20 xl:mx-40">
    <div class="">
      <img id="avatar" :src="avatar" class="hidden mx-auto mb-4" alt="avatar" />
      <h2 class="text-xl mb-2">Heureux de vous revoir !</h2>
      <span class="mr-2 text-lg">
        {{ currentUser.username }}
      </span>
    </div>
    <button class="w-[200px] h-12 mt-5" type="button" @click="deconnect()"><Btn class="" text="Déconnexion" /></button>
  </div>

  <!-- User not connected -->
  <div v-if="!isConnected && !showInscription" class="text-center max-lg:mb-20 lg:dispo">
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
          <button @click="githubLogin()">
            <Btn text="GitHub">
              <template #icon>

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
      <img class="min-h-[700px] h-full hidden lg:block" src="/img/Img-connexion.webp" alt="Image d'illustration lunettes">
    </div>
  </div>

  <!-- no account -->
  <div v-if="showInscription" class="text-center max-lg:mb-20 lg:dispo">
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
          <button @click="githubLogin()">
            <Btn text="GitHub">
              <template #icon>

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
      <img class="min-h-[700px] h-full hidden lg:block" src="/img/Img-connexion.webp" alt="Image d'illustration lunettes">
    </div>
  </div>

  <!-- Creation History - Connected -->
  <div v-if="isConnected" class="mt-20 mb-10 ml-6 md:mx-20 xl:mx-40">
    <h3 class="mb-5 text-2xl font-Khand font-medium">Vos lunettes</h3>
    <!-- <div>
      <div v-if="lunettesList.length > 0">
        <CardHistorique v-for="lunette in lunettesList" v-key="lunette.id" v-bind="{ lunette }" />
      </div>
      <div v-else>
        <p>Vous n'avez pas encore personnalisez vos propres lunettes.</p>
        <RouterLink to="/Personnalisation"><Btn class="mt-2 w-fit" text="Lancez vous dès maintenant !"/></RouterLink>
      </div>
    </div> -->

    <!-- /!\ Historique des lunettes si non fonctionnel (juste pour visualiser) /!\ -->
    <CardHistorique />
    <!--  -->
  </div>
</template>