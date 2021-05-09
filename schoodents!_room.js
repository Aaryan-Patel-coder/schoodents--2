 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyD_VAhH7DaGABODHCIX3aupmEVF6zJZrOQ",
  authDomain: "schoodents-1cb0f.firebaseapp.com",
  databaseURL: "https://schoodents-1cb0f-default-rtdb.firebaseio.com",
  projectId: "schoodents-1cb0f",
  storageBucket: "schoodents-1cb0f.appspot.com",
  messagingSenderId: "812676890718",
  appId: "1:812676890718:web:8c05e6b20f00b6b1fa74cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

            purpose = "adding room name"

            
      });

localStorage.setItem("room name", room_name);

window.location = "schoodents!_page.html";
    }

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
 
       //End code
       });
      });
    }
 getData();
 
 function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Schoodents!_page.html";
}