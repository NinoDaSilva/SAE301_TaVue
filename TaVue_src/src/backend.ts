// Import PocketBase
import PocketBase from 'pocketbase'

// PocketBase vps connexion
var pocketbase_ip=''
if(import.meta.env.MODE === 'production')
  pocketbase_ip='https://tavue.nino-da-silva.fr/'
else
  pocketbase_ip='http://127.0.0.1:8090'

const pb = new PocketBase(pocketbase_ip)

// Vérifie si l'utilisateur est connecté
export function isConnected() {
    // Vérifier l'état de connexion
    if(pb.authStore.isValid){
      return true;
    }else{
      return false;
    }
  }