document.addEventListener('DOMContentLoaded', function() {
    const pass = document.getElementById("password");
    const icon = document.querySelector('.togglePass');
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon');

    registerLink.addEventListener("click", () => {
        wrapper.classList.add('active');
    });
    btnPopup.addEventListener("click", () => {
        wrapper.classList.add('active-popup');
    });
    iconClose.addEventListener("click", () => {
        wrapper.classList.remove('active-popup');
    });
    
    icon.addEventListener("click", e => {
        if (pass.type === "password") {
            pass.type = "text";
            icon.classList.remove('bxs-show');
            icon.classList.add('bxs-hide');
        } else {
            pass.type = "password";
            icon.classList.remove('bxs-hide');
            icon.classList.add('bxs-show');
        }
    });
});
function validarCredenciales() {
    const usuarioCorrecto = "Icit2025";
    const contraseñaCorrecta = "qwerty2025";
    const usuarioIngresado = document.getElementById("username").value;
    const contraseñaIngresada = document.getElementById("password").value;
    if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorrecta) {
        window.location.href = "entrar.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    } 
} 
const firebaseConfig = {
    apiKey: "AIzaSyBg-FY0EeFq4i-G3Q29IGflDpbtPnKFZ_0",
    authDomain: "attendance-v-80ce8.firebaseapp.com",
    databaseURL: "https://attendance-v-80ce8-default-rtdb.firebaseio.com",
    projectId: "attendance-v-80ce8",
    storageBucket: "attendance-v-80ce8.appspot.com",
    messagingSenderId: "907078311546",
    appId: "1:907078311546:web:d82c30a14a85060b09a5c3",
    measurementId: "G-LH8G46955J"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();