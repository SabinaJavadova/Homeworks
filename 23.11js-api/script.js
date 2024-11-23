import { BASE_URL } from "./constants.js";
const cards = document.querySelector(".cards")
const card = document.querySelector(".card")

function getDAta(endpoint){
    fetch(`${BASE_URL}/${endpoint}`)
    .then((response)=>{
        return response.json();

    })

    .then((data)=>{
        console.log(data);
        drawCards(data)
    })
    .catch((error)=>{
        console.log(error);
    })
}
  getDAta("products");
  function drawCards(arr) {
    cards.innerHTML = ""; 

    arr.forEach((item) => {
        
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.category}</p>
            <h4>${item.price}</h4>
            <button class="delete" data-id="${item.id}">Delete</button>
        `;

      
        cards.appendChild(newCard);
    });

    
    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            deleting("products", id, this);
        });
    });
}

function deleting(endpoint, id, btn) {
 
    fetch(`${BASE_URL}/${endpoint}/${id}`, {
        method: "DELETE",
    })
    .then((response) => {
        if (response.ok) {
           
            btn.closest(".card").remove();  
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

window.addEventListener("DOMContentLoaded", function () {
    showData("products");
  });
getDAta("products")
