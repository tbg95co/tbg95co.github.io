const firebaseConfig = {
    apiKey: "AIzaSyDn1apElUqPOllo5bGIduJFAzOd1kFrNsc",
    authDomain: "tbg95-3c11c.firebaseapp.com",
    databaseURL: "https://tbg95-3c11c-default-rtdb.firebaseio.com",
    projectId: "tbg95-3c11c",
    storageBucket: "tbg95-3c11c.appspot.com",
    messagingSenderId: "490881617292",
    appId: "1:490881617292:web:d31faf9f9994512f8c1aa9"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database();
db.useEmulator("localhost", 9000);
const auth = firebase.auth();
var firestore = firebase.firestore();
firestore.useEmulator("localhost", 8080);
auth.useEmulator("http://localhost:9099", { disableWarnings: true });       
function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
        window.localtion = '/';
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        document.getElementById('error').innerText = errorMessage;
    });

}
if(document.getElementById("btnLogin")){
    var btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener("click", login);
}
if(document.getElementById("btnLogout")){
    var btnLogout = document.getElementById("btnLogout");
    btnLogout.addEventListener("click", logout);
}
function logout(){
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("logout");
    }, function(error) {
    // An error happened.
    });
}
var userData;
firebase.auth().onAuthStateChanged((user) => {
    if (user) {  
        userData = user;
        var href = location.href;
        if(href.indexOf('login.html', href) != -1){
            location.href = '/';
        }
    } else {
        if(document.getElementById('menu')){
            // addLoginBtn();
        }
      console.log("signed out");
    }
});
function addLoginBtn(){
    const e = document.createElement('div');
        e.className  = "navbar-end";
        e.innerHTML = `<div class="navbar-link">
            <a class="button navbar-control" href="/login.html" title="Login" style="background: linear-gradient(0deg,#19abe6,#67b5f4 90%);color:#fff;">
                Login
            </a>
        </div><div class="navbar-link">
        <a class="button navbar-control" href="/register.html" title="Login" style="background: linear-gradient(0deg,#19abe6,#67b5f4 90%);color:#fff;">
            Register
        </a>
    </div>`;  
        document.getElementById('menu').appendChild(e);
}
firebase.database().ref('.info/connected').on('value', function(snapshot) {
    // If we're not currently connected, don't do anything.
    if (snapshot.val() == false) {
        return;
    };
    userData  = firebase.auth().currentUser;
    console.log(userData);
    var userStatusDatabaseRef = firebase.database().ref('/status/' + userData.uid);
    var isOfflineForDatabase = {
        state: 0,
        last_changed: firebase.database.ServerValue.TIMESTAMP,
    };

    var isOnlineForDatabase = {
        state: 1,
        last_changed: firebase.database.ServerValue.TIMESTAMP,
    };
    userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function() {

        userStatusDatabaseRef.set(isOnlineForDatabase);
    });
});
if(document.getElementById("claimBtn")){
var btn = document.getElementById("claimBtn");
console.log(btn);
btn.addEventListener("click", claimReward);
}
function claimReward(){
    const user = firebase.auth().currentUser;
    firestore = firebase.firestore();
    return firestore.collection("checkclaims").doc(user.uid).update({is_claim: true})
    .then(() => {
        document.getElementById("claimBtn").style.display = "none";
        setTimeout(showClaim, 60000);
    }).catch((err) =>{
        console.log(err);
    })
}
function showClaim(){
    document.getElementById("claimBtn").style.display = "block";
}