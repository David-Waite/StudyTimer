// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDIrjlSH1FTxcHbbijQK5LTi-fJHY5x5Rc',
  authDomain: 'studytimer-24827.firebaseapp.com',
  projectId: 'studytimer-24827',
  storageBucket: 'studytimer-24827.appspot.com',
  messagingSenderId: '294964216380',
  appId: '1:294964216380:web:881cc678b0b004a550f939',
  measurementId: 'G-QZWGJ01WY5'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireFirestoreOptionsAPI()]
})

app.mount('#app')
