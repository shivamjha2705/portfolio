import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyDjclkLi0LGdzKjv_yCw_2oqi-BP_y8ky8",
        authDomain: "shivamk01.firebaseapp.com",
        databaseURL: "https://shivamk01-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "shivamk01",
        storageBucket: "shivamk01.appspot.com",
        messagingSenderId: "272751060406",
        appId: "1:272751060406:web:283b74623737b5171b4d17",
        measurementId: "G-5K1BFFHPRQ"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      return getDatabase(app , analytics);
}

export default StartFirebase;