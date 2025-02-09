function saveALL() {
  var data = {
    name: document.getElementById("tutor-name").value,
    date: document.getElementById("appointment-date").value,
    phone: document.getElementById("tutor-phone").value,
    address: document.getElementById("tutor-address").value,
    pet: {
      petName: document.getElementById("pet-name").value,
      petAge: document.getElementById("pet-age").value,
      petSize: document.getElementById("pet-size").value,
    },
  };

  let dataLocalStorage = JSON.parse(localStorage.getItem("tutorData")) || [];
  dataLocalStorage.push(data);
  localStorage.setItem("tutorData", JSON.stringify(dataLocalStorage));
  
  alert("Cadastro feito");
}
