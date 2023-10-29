(function () {
  if (window.localStorage.getItem("login")) {
    window.location.href = "index.html";
  } else {
    console.log("cc");
  }
})();
