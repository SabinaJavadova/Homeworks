

import { products } from "./data.js";

const clothes = document.querySelector(".clothes");
const modal = document.createElement("div");  

function drawtable(products) {
    clothes.innerHTML = ""; 
    products.forEach(product => {
        console.log(product);
        const card = document.createElement("div");
        card.classList.add("card"); 
        card.innerHTML = `
        <img src="${product.image}" width="100"/>
        <h2>${product.title}</h2>
        <p>$${product.price}</p>
        <h4>${product.description}</h4>

        <div class="buttons">
        <button class="butn details" data-id="${product.id}">Details</button>
        <button class="butn delete">Delete</button>
        </div>
        `;
        clothes.appendChild(card);
    });

    const delete_btns = document.querySelectorAll(".delete");
    delete_btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            const idx = products.findIndex((item) => item.id == productId);

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    delete_card(idx, this);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        });
    });

    const details_btns = document.querySelectorAll(".details");
    details_btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            const product = products.find((item) => item.id == productId);
            showDetailsModal(product);
        });
    });
}

function delete_card(index, btn) {
    products.splice(index, 1);
    btn.closest(".card").remove();
    drawtable(products);
}


function showDetailsModal(product) {
    modal.innerHTML = `
    <div class="modal-content">
        <span class="close-btn">X</span>
        <h2>${product.title}</h2>
        <img src="${product.image}" width="200" />
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Description:</strong> ${product.description}</p>
    </div>
    `;

    modal.classList.add("modal");
    document.body.appendChild(modal);


    modal.style.display = "block";


    const closeBtn = modal.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modal.remove();
    });

 
    
}


drawtable(products);


