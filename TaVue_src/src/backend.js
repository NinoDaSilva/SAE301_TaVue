// Import PocketBase
import PocketBase from 'pocketbase'

// // PocketBase vps connexion
// var pocketbase_ip=''
// if(import.meta.env.MODE === 'production')
//   pocketbase_ip='https://tavue.nino-da-silva.fr/'
// else
//   pocketbase_ip='http://127.0.0.1:8090'

const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE)

// Vérifie si l'utilisateur est connecté
export function isConnected() {
    // Vérifier l'état de connexion
    if(pb.authStore.isValid){
      return true;
    }else{
      return false;
    }
  }

export function getLunettes() {
    try{
      const records = pb.collection('lunetteUser').getFullList({
        sort: '-created',
        filter: {
          userId: currentUser.value.id
        }
      });
      lunettesList.value = records
    }catch(error){
      console.error("Erreur lors de la récupération des lunettes")
    }
  }