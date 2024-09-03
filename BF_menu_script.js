"use strict";

// declaring variables using const to access HTML elements
const eggsBtn = document.querySelector("#eggs-btn");
const eggsItem = document.querySelector("#eggs");
const croissantBtn = document.querySelector("#croissant-btn");
const croissantItem = document.querySelector("#croissant");
const pancakesBtn = document.querySelector("#pancakes-btn");
const pancakesItem = document.querySelector("#pancakes");
const hashbrownsBtn = document.querySelector("#hashbrowns-btn");
const hashbrownsItem = document.querySelector("#hashbrowns");
const orderSummary = document.querySelector(".order-summary");

// Variable to store added orders
const orders = [];

// Function to add orders and update summary
function addOrder(itemName) {
  orders.push(itemName);
  console.log(orders); // Log the orders to the console each time an order is added
  updateOrderSummary(); // Update the summary after adding an order
}

// Function to delete an order
function deleteOrder(index) {
  if (index > -1 && index < orders.length) {
    orders.splice(index, 1); // Remove one item at the specified index
    console.log(orders); // Log the orders to the console each time an order is deleted
    updateOrderSummary(); // Update the summary after deleting an order
  }
}

// Event listner when add buton is clicked
eggsBtn.addEventListener("click", () => addOrder(eggsItem.innerHTML));
croissantBtn.addEventListener("click", () => addOrder(croissantItem.innerHTML));
pancakesBtn.addEventListener("click", () => addOrder(pancakesItem.innerHTML));
hashbrownsBtn.addEventListener("click", () =>
  addOrder(hashbrownsItem.innerHTML)
);

// Function to update the order summary using a loop
function updateOrderSummary() {
  let summaryHtml = ""; // Start with an empty string

  for (let i = 0; i < orders.length; i++) {
    summaryHtml += `
      ${orders[i]} 
      <button onclick="deleteOrder(${i})">remove</button><br>
    `;
  }

  orderSummary.innerHTML = summaryHtml; // Set the HTML content of orderSummary
}

// Initial call to update the summary (optional, if you need to show initial state)
updateOrderSummary();
