(function () {

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBpYnqMDXYrKfMU1TG0SmbJvoAXINodDMw",
        authDomain: "lephareenquete.firebaseapp.com",
        databaseURL: "https://lephareenquete.firebaseio.com",
        projectId: "lephareenquete",
        storageBucket: "lephareenquete.appspot.com",
        messagingSenderId: "795559823218",
        appId: "1:795559823218:web:3e27ed2388cee23a99ffeb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    //get elements
    const link = document.getElementById('link');

    firebase.auth().signInAnonymously()
        .then(function() {
        console.log("Connected !");
        })
        .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorMessage);
    });


    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            console.log("isAnonymous : "+isAnonymous+"\nUID : "+uid);
            getLink();
        }else {
            // User is signed out.
            console.log("User is signed out")
        }
    });

})();