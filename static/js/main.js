var firebaseConfig = {
  apiKey: "AIzaSyAkuhDzp7iyWiyE26CEPrRK2baKPbp9lbs",
  authDomain: "kenildata.firebaseapp.com",
  databaseURL: "https://kenildata-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kenildata",
  storageBucket: "kenildata.appspot.com",
  messagingSenderId: "241583416574",
  appId: "1:241583416574:web:ff210d0de024498a21b1af",
  measurementId: "G-3L6L129MWH"
};

    firebase.initializeApp(firebaseConfig);


    firebase.auth().onAuthStateChanged(function(user) {

      var loading = document.getElementById('loader-div') 

        if(user){
          // window.location.replace('home.html');
            console.log(firebaseUser);
        }else{
          loading.style.display = "none";
        }
    });


    function login(event) {
        event.preventDefault()

        window.location.replace('/ml');
        window.history.pushState(null, null, null);

      // loading.style.display = "none";
      // document.getElementById('errortxt').innerHTML = error.message;

}








