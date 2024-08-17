
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js"


 const email = document.getElementById("email")
 const password = document.getElementById("password");
 const login = document.getElementById("button");
    console.log(email.value , password.value);
    login.addEventListener("click", () => { 
        signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user--->", user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     console.log("errorMessage--->",errorMessage);
         
  });

})

 let registerbtn = document.getElementById("registerbtn")
    
 registerbtn.addEventListener("click" , register) 


  const firebaseConfig = {
    apiKey: "AIzaSyCB9YT1eXvD8Qj4-vFBLGs4q8sXHbL5ZqU",
    authDomain: "fir-first-project-78cd4.firebaseapp.com",
    projectId: "fir-first-project-78cd4",
    storageBucket: "fir-first-project-78cd4.appspot.com",
    messagingSenderId: "764240286171",
    appId: "1:764240286171:web:8f2466cdbca6f4420cd7fe",
    measurementId: "G-NLHRYRSMT9"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user-->",user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorMessage-->" , errorMessage);
    
  });

  document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [100, 200, 150, 300, 250, 400],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
