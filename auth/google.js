    // Import the functions you need from the SDKs you need

    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
    import { getAuth, GoogleAuthProvider, signInWithPopup ,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

    // TODO: Add SDKs for Firebase products that you want to use

    // https://firebase.google.com/docs/web/setup#available-libraries


    // Your web app's Firebase configuration

    const firebaseConfig = {

    apiKey: "AIzaSyCy9LuAF0pA0svHa3Q4kPv8E9hp7LZq5Dw",

    authDomain: "checkit-kh.firebaseapp.com",

    projectId: "checkit-kh",

    storageBucket: "checkit-kh.firebasestorage.app",

    messagingSenderId: "1046508254742",

    appId: "1:1046508254742:web:c7b8e7f71d93e0a826e737",

    measurementId: "G-G1F8SDFGFX"

};


    // Initialize Firebase

    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    auth.languageCode = 'en';

    const google = document.getElementById("google");
    google.addEventListener("click", function(event) {


    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        const user = result.user;
        window.location.href = "./index.html";
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

    });

    })

// update user profile
//     const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// function updateUserProfile(user) {
//   const name = user.displayName;
//   const email = user.email;
//   const profile = user.photoURL;
//   document.getElementById("name").textContent = name;
//   document.getElementById("gmail").textContent = email;
//   document.getElementById("profile").src = profile;
// }

// onAuthStateChanged((auth), function (user) {
//   if (user) {
//     // User is signed in.
//     updateUserProfile(user);
//     const uid = user.uid;
//     return uid;
//   } else {
//     alert("No user is signed in.");
//   }
// });
