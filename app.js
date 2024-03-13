// Your Firebase configuration
const firebaseConfig = {
    // Replace with your Firebase project configuration
    apiKey: "AIzaSyCR7dD9aZjRkI1vDpmhVB9pzqDaIMZXjtM",
    authDomain: "kelechi-design.firebaseapp.com",
    databaseURL: "https://kelechi-design-default-rtdb.firebaseio.com",
    projectId: "kelechi-design",
    storageBucket: "kelechi-design.appspot.com",
    messagingSenderId: "379938046266",
    appId: "1:379938046266:web:19761d4abaf7a883bbd003
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the authentication service
  const auth = firebase.auth();
  
  // Login function
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User is signed in
        console.log("User logged in successfully!");
        // Handle successful login (e.g., navigate to a different page)
      })
      .catch((error) => {
        // Handle errors
        console.log("Error logging in:", error);
        // Display an error message to the user
      });
  });
  
  // Signup function (follow similar structure as login function)
  