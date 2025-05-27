console.log("Hello World!");


// Choose your own adventure

// Most frequent international flights out of Chicago
// London, Mexico City, Toronto
const neighborhoodOptions = {
    "Mexico City" : ['Polanco', 'Roma Norte', 'Condesa'],
    "London": ['Camden', 'Shoreditch', 'Brixton'],
    "Toronto" :['Brixton', 'Harbourfront', 'Distillery District']
};


function showNeighborhoods(city) {
    const modal = document.getElementById("neighborhoodModal");
    const title = document.getElementById("modal-title");
    const buttonsContainer = document.getElementById("neighborhood-buttons");

    title.textContent = `Choose a neighborhood in ${city}`;
    buttonsContainer.innerHTML = "";

    neighborhoodOptions[city].forEach(element => {
        const buttn = document.createElement("button");
        buttn.textContent = element;

        buttn.onclick = () => {
            alert(`You're going to ${city} and staying in ${element}`);
            closeModal();
        }
        buttonsContainer.appendChild(buttn);
    });
      modal.style.display = "block";
}

function closeModal() {
  document.getElementById("neighborhoodModal").style.display = "none";
}