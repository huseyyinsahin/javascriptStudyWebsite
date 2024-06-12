const userName = document.getElementById("user-name");
const password = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const warning = document.getElementById("warning");
const loginForm = document.getElementById("login");

const regex = /^[a-zA-Z]+$/;

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (userName.value === "" || password.value === "") {
    warning.innerText = "Lütfen Tüm Formları Doldurunuz";
    warning.classList.remove("successful");
    warning.classList.add("warning");
    warning.classList.remove("hidden");
    setTimeout(() => {
      warning.classList.add("hidden");
    }, 5000);
  } else if (userName.value.length < 6 || 20 < userName.value.length) {
    warning.innerText = "Kullanıcı Adı 6-20 Karakter Olabilir";
    warning.classList.remove("successful");
    warning.classList.add("warning");
    warning.classList.remove("hidden");
    setTimeout(() => {
      warning.classList.add("hidden");
    }, 5000);
  } else if (!regex.test(userName.value)) {
    warning.innerText =
      "Kullanıcı Adı Sadece Büyük-Küçük Harflerden oluşabilir";
    warning.classList.remove("successful");
    warning.classList.add("warning");
    warning.classList.remove("hidden");
    setTimeout(() => {
      warning.classList.add("hidden");
    }, 5000);
  } else if (password.value.length < 8 || 20 < password.value.length) {
    warning.innerText = "Şifre 8-20 Karakter Olabilir";
    warning.classList.remove("successful");
    warning.classList.add("warning");
    warning.classList.remove("hidden");
    setTimeout(() => {
      warning.classList.add("hidden");
    }, 5000);
  } else {
    warning.innerText = "Tüm Formları Başarılı Bir Şekilde Doldurdunuz";
    warning.classList.remove("warning");
    warning.classList.add("successful");
    warning.classList.remove("hidden");
    setTimeout(() => {
      warning.classList.add("hidden");
    }, 5000);
    userName.value = "";
    password.value = "";
  }
});
