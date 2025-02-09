function getSavedData() {
  let data = JSON.parse(localStorage.getItem("tutorData")) || [];

  return data;
}

function displayClients() {
  let data = getSavedData();
  let cardContainer = document.getElementById('card-container');


  if (!!data) {
    console.log(data)
    let card = '';
    data.forEach((data) => {
      card += `
        <div class="card">
            <h3>Dados do Tutor</h3>
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>Data da Consulta:</strong> ${data.date}</p>
            <p><strong>Telefone:</strong> ${data.phone}</p>
            <p><strong>Endereço:</strong> ${data.address}</p>
            <h3>Dados do Animal</h3>
            <p><strong>Nome:</strong> ${data.pet.petName}</p>
            <p><strong>Idade:</strong> ${data.pet.petAge}</p>
            <p><strong>Tamanho:</strong> ${data.pet.petSize}</p>
        </div>
    `;
    });
    cardContainer.innerHTML = card;
  } else {
    cardContainer.innerHTML = '<p>Nenhum dado salvo.</p>';
  }
};

window.onload = displayClients;