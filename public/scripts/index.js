


document.querySelector("#create").addEventListener('click', () => {
    var element = document.getElementById("add_pin_container");
  element.classList.remove("hidden");
  var element = document.getElementById("pin_container");
  element.classList.add("hidden");
});






document.querySelector(".save_pin").addEventListener('click', () => {
    var element = document.getElementById("add_pin_container");
  element.classList.add("hidden");
  var element = document.getElementById("pin_container");
  element.classList.remove("hidden");
});