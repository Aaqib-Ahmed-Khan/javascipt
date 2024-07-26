// import {
//     auth,
//     createUserWithEmailAndPassword,
//     doc,
//     setDoc,
//     db,
//     storage,
//     ref,
//     uploadBytes,
//     getDownloadURL,
//   } from "../../utils/utils.js";
  
//   const signupForm = document.getElementById("signup_form");
//   const submitBtn = document.getElementById("submit_btn");
  
//   signupForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     console.log(e);
//     console.log(e.target);
  
//     const img = e.target[0].files[0];
//   const email = e.target[1].value;
//   const password = e.target[2].value;
//   const firstName = e.target[4].value;
//   const lastName = e.target[5].value;
//   const phone = e.target[6].value;
//   const company = e.target[7].value;

  
//     const userInfo = {
//       email,
//       password,
//       firstName,
//       lastName,
//       phone,
//       company,
//     };
  
//     submitBtn.disabled = true;
//     submitBtn.innerText = "Loading...";
  
//     try {
//       const user = await createUserWithEmailAndPassword(auth, email, password);
//       console.log("user=>", user.user.uid);
  
//       const userRef = ref(storage, `user/${user.user.uid}`);
//       await uploadBytes(userRef, img);
//       console.log("user image uploaded");
  
//       const url = await getDownloadURL(userRef);
//       console.log("url got it=>", url);
  
//       userInfo.img = url;
  
//       const userDbRef = doc(db, "users", user.user.uid);
//       await setDoc(userDbRef, userInfo);
//       console.log("User Object Updated into DB");
  
//       window.location.href = "/";
//       submitBtn.disabled = false;
//       submitBtn.innerText = "Submit";
//     } catch (err) {
//       alert(err),
//       submitBtn.disabled = false};
//       submitBtn.innerText = "Submit";
    
//   });
//   console.log(userInfo);

 

// import {
//     auth,
//     createUserWithEmailAndPassword,
//     doc,
//     setDoc,
//     db,
//     storage,
//     ref,
//     uploadBytes,
//     getDownloadURL,
//   } from "../../utils/utils.js";
  
//   const signupForm = document.getElementById("signup_form");
//   const submitBtn = document.getElementById("submit_btn");
  
//   signupForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     console.log(e);
//     console.log(e.target);
  
//     const img = e.target.elements.img.files[0];
//     const email = e.target.elements.email.value;
//     const password = e.target.elements.password.value;
//     const firstName = e.target.elements.firstName.value;
//     const lastName = e.target.elements.lastName.value;
//     const phone = e.target.elements.phone.value;
//     const company = e.target.elements.company.value;
  
//     const userInfo = {
//       email,
//       password,
//       firstName,
//       lastName,
//       phone,
//       company,
//     };
  
//     submitBtn.disabled = true;
//     submitBtn.innerText = "Loading...";
  
//     try {
//       const user = await createUserWithEmailAndPassword(auth, email, password);
//       console.log("user=>", user.user.uid);
  
//       const userRef = ref(storage, `user/${user.user.uid}`);
//       await uploadBytes(userRef, img);
//       console.log("user image uploaded");
  
//       const url = await getDownloadURL(userRef);
//       console.log("url got it=>", url);
  
//       userInfo.img = url;
  
//       const userDbRef = doc(db, "users", user.user.uid);
//       await setDoc(userDbRef, userInfo);
//       console.log("User Object Updated into DB");
  
//       window.location.href = "/";
//       submitBtn.disabled = false;
//       submitBtn.innerText = "Submit";
//     } catch (err) {
//       alert(err);
//       submitBtn.disabled = false;
//       submitBtn.innerText = "Submit";
//     }
//   });
// import {
//   auth,
//   createUserWithEmailAndPassword,
//   doc,
//   setDoc,
//   db,
//   storage,
//   ref,
//   uploadBytes,
//   getDownloadURL,
// } from "../../utils/utils.js";

// //1.Create Account => createUserWithEmailAndPassword
// //2.Upload Image => ref, uploadBytes,getDownloadURL
// //3.Set COmplete Data into Firestore =>doc , setDoc

// const signup_btn = document.getElementById("signup_form");
// const submit_btn = document.getElementById("submit_btn");

// signup_btn.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e);
//   console.log(e.target);

//   const img = e.target[0].files[0];
//   const email = e.target[1].value;
//   const password = e.target[2].value;
//   const firstName = e.target[4].value;
//   const lastName = e.target[5].value;
//   const phone = e.target[6].value;
//   const company = e.target[7].value;

//   const userInfo = {
//     img,
//     email,
//     password,
//     firstName,
//     lastName,
//     phone,
//     company,
//   };

//   //create account
//   submit_btn.disabled = true;
//   submit_btn.innerText = "Loading...";
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((user) => {
//       console.log("user=>", user.user.uid);
//       // upload user image
//       const userRef = ref(storage, `user/${user.user.uid}`);
//       uploadBytes(userRef, img)
//         .then(() => {
//           console.log("user image uploaded");
//           // getting url of the image we just uploaded
//           getDownloadURL(userRef)
//             .then((url) => {
//               console.log("url agya bhai=>", url);

//               // update user info object
//               userInfo.img = url;

//               // created user document reference
//               const userDbRef = doc(db, "users", user.user.uid);

//               // set this document to db
//               setDoc(userDbRef, userInfo).then(() => {
//                 console.log("User Object Updated into DB");
//                 window.location.href = "/";
//                 submit_btn.disabled = false;
//                 submit_btn.innerText = "Submit";
//               });
//             })
//             .catch((err) => {
//               console.log("url firebase nahn de raha");
//               submit_btn.disabled = false;
//               submit_btn.innerText = "Submit";
//             });
//         })
//         .catch(() => {
//           console.log("Error in uploading user image");
//           submit_btn.disabled = false;
//           submit_btn.innerText = "Submit";
//         });
//     })
//     .catch((err) => {
//       alert(err), (submit_btn.disabled = false);
//       submit_btn.innerText = "Submit";
//     });

//   console.log(userInfo);
// });
import { auth, signInWithEmailAndPassword } from "../../utils/utils.js";

const login_form = document.getElementById("login_form");
const submitButton = document.querySelector("button[type='submit']");

login_form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;
  console.log("email", email);
  console.log("password", password);

  // Disable the submit button and show loading text
  submitButton.disabled = true;
  submitButton.innerText = "Loading...";

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location. href="todo.html" // Redirect to the topEvents page
    })
    .catch((err) => {
      alert(err);
      // Re-enable the submit button and restore the original text
      submitButton.disabled = false;
      submitButton.innerText = "Submit";
    });
});
