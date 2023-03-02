import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

const app = createApp(App)

const firebaseConfig = {
    apiKey: "AIzaSyDnNdT-mna4TxH-DbNXYyu-GiumeTsw4BU",
    authDomain: "ps-keener-f64bb.firebaseapp.com",
    projectId: "ps-keener-f64bb",
    storageBucket: "ps-keener-f64bb.appspot.com",
    messagingSenderId: "580727942875",
    appId: "1:580727942875:web:6cab42f91d1a489a2426fe"
};
  
initializeApp(firebaseConfig);

app.use(router)

app.mount('#app')

