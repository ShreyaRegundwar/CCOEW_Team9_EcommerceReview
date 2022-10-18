const firebaseConfig = {
  //   copy your firebase config informations
    apiKey: "AIzaSyAnrpPglGd0CStl0hxXe-DIqSbuaKEddvo",
    authDomain: "hackathon-cc5b0.firebaseapp.com",
    databaseURL: "https://hackathon-cc5b0-default-rtdb.firebaseio.com",
    projectId: "hackathon-cc5b0",
    storageBucket: "hackathon-cc5b0.appspot.com",
    messagingSenderId: "395898668965",
    appId: "1:395898668965:web:e2225234c4f53a0a758a4c"
};

  //initialize firebase

  firebase.initializeApp(firebaseConfig); 

  //reference your database
  var feedbackFormDB = firebase.database().ref("feedbackForm");

document.getElementById('feedbackForm').addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var productName = getElementVal("productName");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, productName, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("feedbackForm").reset();
}

const saveMessages = (name, emailid,productName, msgContent) => {
  var newfeedbackForm = feedbackFormDB.push();

  newfeedbackForm.set({
    name: name,
    emailid: emailid,
    productName: productName,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};


