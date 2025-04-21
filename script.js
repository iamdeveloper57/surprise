const btn = document.querySelector(".button");
const errorMessage = document.querySelector(".error");
const containers = document.querySelector(".container");

btn.addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const spouseName = document.querySelector("#spouse").value;

  if (name === "Jenika" && spouseName === "Rehan") {
    name.value = "";
    spouseName.value = "";
    errorMessage.innerHTML = "";
    containers.style.display = "none";
    document.querySelector(".paper").style.display = "block";
    localStorage.setItem("name", name);
    localStorage.setItem("spouse", spouseName);
  } else {
    errorMessage.innerHTML = "worng please try again";
    name.value = "";
    spouseName.value = "";
  }
});

window.addEventListener("load", function () {
  const storedName = localStorage.getItem("name");
  const storedSpouse = localStorage.getItem("spouse");

  const name = document.querySelector("#name");
  const spouseName = document.querySelector("#spouse");

  if (name) {
    name.value = storedName;
  }
  if (spouseName) {
    spouseName.value = storedName;
  }

  if (storedName && storedSpouse) {
    containers.style.display = "none";
    document.querySelector(".paper").style.display = "block";
  }
});
