console.log("DONE");

function login() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(email);
  console.log(password);
}

fetch("https://tbc-tempapi.herokuapp.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
console.log("DONE");
