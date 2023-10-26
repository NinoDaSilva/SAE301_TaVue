<script setup lang="">
  import { ref, onMounted } from 'vue'

  // Import components
  import Promo from '@/components/Promo.vue';
  import Btn from '@/components/Btn.vue';
  import LunettesVue from '@/components/LunettesVue.vue'

  // Import backend
  import { isConnected } from '@/backend'

  // Vérification de la connexion (sinon redirection vers la page de connexion)
  if(!isConnected()){
    window.location.href = "/Compte"
  }

  // PocketBase //
  import PocketBase from 'pocketbase'

  // PocketBase vps connexion
  var pocketbase_ip=''
    if(import.meta.env.MODE === 'production')
      pocketbase_ip='http://tavue.nino-da-silva.fr'
    else
      pocketbase_ip='http://127.0.0.1:8090'

    const pb = new PocketBase(pocketbase_ip)
  //--//


  // Partie configurateur //

  // Initialisation des variables
  let selectedMaterial_verre = ref(null)
  let selectedMaterial_cadre = ref(null)
  let selectedMaterial_branche = ref(null)

  let selectedColor_cadre = ref("Gris")
  let selectedColor_verres = ref("Gris")
  let selectedColor_branches = ref("Gris")

  let colors = [];

  onMounted(() => {
    getColors()
  });

  // Récupération des couleurs
  const getColors = async () => {
    colors.value = await pb.collection("couleurs").getFullList({ sort: 'libelle_couleur' })
console.log("Import couleurs", colors.value)
  };

  // Data pb
  let newLunettes = ref({
    prix: "",
    user: "",
    commande: "",
    couleur_cadre: "",
    couleur_verres: "",
    couleur_branches: "",
    materiaux_cadre: "",
    materiaux_verres: "",
    materiaux_branches: "",
    forme: ""
  });

  // Séléction de la couleur
  const selectColors = (type, item) => {
    if(type == "cadre"){ // cadre
      selectedColor_cadre.value = item.libelle_couleur; // couleur sélectionnée
      newLunettes.value.couleur_cadre = item.id; // id de la couleur
  console.log("couleur cadre", item.libelle_couleur)
    }else if(type == "verres"){ // verres
      selectedColor_verres.value = item.libelle_couleur;
      newLunettes.value.couleur_verres = item.id;
  console.log("couleur verre", item.libelle_couleur)
    }else if(type == "branches"){ // branches
      selectedColor_branches.value = item.libelle_couleur;
      newLunettes.value.couleur_branches = item.id;
  console.log("couleur branche", item.libelle_couleur)
    }
  };

  // Création de la lunette dans PocketBase
  const createLunettes = async() => {
    await pb.collection('lunette').create(newLunettes.value);
    alert("Vos lunettes ont été enregistrées avec succès !")
    window.location.href = "/Compte" // Redirection vers la page Compte
  }

  //--//


  // Plugin pour le titre de la page
  // (A la fin du script pour éviter des erreurs)
  import {useHead} from '@unhead/vue'
  useHead ({
    title: 'Personnalisation - TaVue'
  }) 
  //--//
</script>

<template>
  <Promo />

  <div class="mx-5 lg:mr-20 lg:ml-10 lg:dispo items-center">
    <div class="mx-[8%] max-lg:mt-14 max-lg:ml-16">
      <LunettesVue />
      <div class="font-medium mt-5 lg:mt-20 lg:ml-10 text-base lg:text-lg font-Khand">Prix de vente :  85€</div>
    </div>
    
    <div class="space-y-12 md:ml-20 mx-auto my-20 max-w-[650px]">
      <div>
        <div class="flex gap-4 items-center">
          <h3 class="w-20 md:mr-20 mt-2 ml-1 font-Khand font-medium text-lg">Type</h3>
          <Btn class="w-[180px] text-2xs" text="Rectangulaire" />
          <Btn class="w-[130px] text-2xs" text="Ronde" />
        </div>
        <div class="mt-1 w-full h-0.5 bg-gris"></div>
      </div>

      <div>
        <div class="flex gap-6 items-center">
          <h3 class="w-20 md:mr-20 mt-2 ml-1 font-Khand font-medium text-lg">Cadre</h3>        
        </div>
        <div class="mt-1 w-full h-0.5 bg-gris"></div>

        <button v-for="couleur in colors" :key="couleur.id" v-bind:style="{ background: couleur.libelle_couleur }"></button>

        <div class="flex gap-4 mt-1">
          <Btn text="Plastique" v-bind:class="{ 'selected': selectedMaterial_verre === 'Plastique' }"
            @click="selectedMaterial_cadre = 'Plastique'"/>
          <Btn text="Bois" v-bind:class="{ 'selected': selectedMaterial_verre === 'Bois' }"
            @click="selectedMaterial_cadre = 'Bois'"/>
          <Btn text="Métal" v-bind:class="{ 'selected': selectedMaterial_verre === 'Métal' }"
            @click="selectedMaterial_cadre = 'Métal'" />
        </div>
      </div>

      <div>
        <div class="flex gap-6 items-center">
          <h3 class="w-20 md:mr-20 mt-2 ml-1 font-Khand font-medium text-lg">Verres</h3>
        </div>
        <div class="mt-1 w-full h-0.5 bg-gris"></div>

        <button v-for="couleur in colors" :key="couleur.id" v-bind:style="{ background: couleur.libelle_couleur }"></button>

        <div class="flex gap-4 mt-1">
          <Btn text="Polycarbonate" v-bind:class="{ 'selected': selectedMaterial_verre === 'Polycarbonate' }"
            @click="selectedMaterial_verre = 'Polycarbonate'"/>
          <Btn text="Verre" v-bind:class="{ 'selected': selectedMaterial_verre === 'Verre' }"
            @click="selectedMaterial_verre = 'Verre'"/>
        </div>
      </div>

      <div>
        <div class="flex gap-6 items-center">
          <h3 class="w-20 md:mr-20 mt-2 ml-1 font-Khand font-medium text-lg">Branches</h3>
        </div>
        <div class="mt-1 w-full h-0.5 bg-gris"></div>

        <button v-for="couleur in colors" :key="couleur.id" v-bind:style="{ background: couleur.libelle_couleur }"></button>
        
        <div class="flex gap-4 mt-1">
          <Btn text="Plastique" v-bind:class="{ 'selected': selectedMaterial_verre === 'Plastique' }"
            @click="selectedMaterial_branche = 'Plastique'"/>
          <Btn text="Bois" v-bind:class="{ 'selected': selectedMaterial_verre === 'Bois' }"
            @click="selectedMaterial_branche = 'Bois'"/>
          <Btn text="Métal" v-bind:class="{ 'selected': selectedMaterial_verre === 'Métal' }"
            @click="selectedMaterial_branche = 'Métal'" />
        </div>
      </div>

      <div class="pt-6">
        <h3 class="w-20 md:mr-20 mt-2 ml-1 font-Khand font-medium text-lg">Descriptif</h3>
        <div class="mt-1 w-full h-0.5 bg-gris"></div>
        <p class="mt-4">Nos lunettes personnalisables offrent bien plus qu'un simple accessoire, elles représentent une opportunité d'exprimer votre <strong>style</strong> et de posséder un <strong>objet de qualité</strong> qui incarne votre individualité.</p>
      </div>

      <Btn class="sm:w-80 h-14" text="Enregistrer mes choix" @click=""/>
    </div>
  </div>

</template>