import { auth,storage,db,onAuthStateChanged} from "./utils/utils.js";
// console.log("auth=>",auth); 
// console.log("storage=>",storage); 
// console.log("db=>",db); 
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      window.location.href = "/auth/login/index.html";
    }
  });
  