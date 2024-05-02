import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
const app = createApp(App)

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDIrjlSH1FTxcHbbijQK5LTi-fJHY5x5Rc',
  authDomain: 'studytimer-24827.firebaseapp.com',
  projectId: 'studytimer-24827',
  storageBucket: 'studytimer-24827.appspot.com',
  messagingSenderId: '294964216380',
  appId: '1:294964216380:web:881cc678b0b004a550f939',
  measurementId: 'G-QZWGJ01WY5'
}

// Initialize Firebase app
initializeApp(firebaseConfig)

app.use(createPinia())
app.use(router)

app.mount('#app')
