function getSavedData() {
  let data = JSON.parse(localStorage.getItem("tutorData")) || [];
  return data;
}

function createModal(data) {
  let modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
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
  document.body.appendChild(modal);

  let closeButton = modal.querySelector('.close-button');
  closeButton.onclick = () => {
    modal.remove();
  };

  modal.onclick = (event) => {
    if (event.target === modal) {
      modal.remove();
    }
  };
}

function displayClients() {
  let data = getSavedData();
  let cardContainer = document.getElementById('card-container');

  if (data.length > 0) {
    let card = '';
    data.forEach((item, index) => {
      card += `
        <div class="card" onclick="createModal(getSavedData()[${index}])">
            <p><strong>Nome do Pet:</strong> ${item.pet.petName}</p>
            <p><strong>Data da Consulta:</strong> ${item.date}</p>
        </div>
      `;
    });
    cardContainer.innerHTML = card;
  } else {
    cardContainer.innerHTML = '<p>Nenhum dado salvo.</p>';
  }
}

window.onload = displayClients;