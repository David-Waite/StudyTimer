import { createApp } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyDIrjlSH1FTxcHbbijQK5LTi-fJHY5x5Rc',
  authDomain: 'studytimer-24827.firebaseapp.com',
  projectId: 'studytimer-24827',
  storageBucket: 'studytimer-24827.appspot.com',
  messagingSenderId: '294964216380',
  appId: '1:294964216380:web:881cc678b0b004a550f939',
  measurementId: 'G-QZWGJ01WY5'
  // Your Firebase configuration
  // ...
}

// Initialize Firebase app
const app = initializeApp(firebaseConfig)
getFirestore(app)

const vueApp = createApp(App)
vueApp.use(createPinia())
vueApp.use(router)
vueApp.mount('#app')
