<script setup lang="">
    // import éléments de vue
    import { onMounted, ref } from 'vue'
    // Import Leaflet
    import * as Leaflet from 'leaflet'
    // css leaflet
    import 'leaflet/dist/leaflet.css'

    // Canevas pour la carte
    let tileLayer = Leaflet.tileLayer
    // Initialisation de la carte sous forme d'une ref
    let map = ref()

    onMounted( async ()=> {
        // Caractérisitques de la carte
        tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
      );

      // Création de la carte sur la div ayant l'id = 'map'
      map = Leaflet.map('map',
        {
            zoomControl: true, // Contrôle de Zoom
            layers: [tileLayer], // Canevas pour dessiner la carte
            maxZoom: 18,        // Zoom maxi autorisé
            minZoom: 6          // Zoom mini autorisé
        })
        // projection de la carte avec centrage aux coordonnées indiquées, avec facteur d'agrandissement
        .setView([47.50813452933411, 6.872118422877135], 17)

        // Création icone
        let myIcon = Leaflet.icon({
            iconUrl:    'img/marqueur/marker-icon.png',     // Image de l'icone
            shadowUrl:  'img/marqueur/marker-shadow.png',   // Ombre de l'icone
            iconSize:       [25, 40],                       // Taille de l'icone
            shadowSize:     [25, 40],                       // Taille de l'ombre de l'icone
            iconAnchor:     [15, 0],                        // Ancrage de l'icone
            shadowAnchor:   [-10, -10],                     // Ancrage de l'ombre de l'icone
            popupAnchor:    [0, 0]                          // Point de position de la popup si elle existe
        })

        // Ajout marqueur
        let marker = Leaflet.marker([47.50813452933411, 6.872118422877135], {icon: myIcon}).addTo(map)
        
        // Ajout popup
        marker.bindPopup('TaVue')

    })

</script>


<template>
    <div class="mt-10">
        <h4 class="font-Khand text-2xl ml-20 mb-5">Découvrez notre nouvelle boutique !</h4>
        <div class="container-fluid">
            <div id="map"> 
            </div>
        </div>
    </div>
</template>

<style scoped>
#map{
    width:100%;
    height: 60vh;
}
</style>