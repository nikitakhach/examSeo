let selectedSeats = 0;

const addButton = document.getElementById("add-seat");
const resetButton = document.getElementById("reset");
const seatCount = document.getElementById("seat-count");

addButton.addEventListener("click", function () {
  debugger;
  selectedSeats += 1;
  seatCount.textContent = selectedSeats;
});

resetButton.addEventListener("click", function () {
  selectedSeats = 0;
  seatCount.textContent = selectedSeats;
});

const studentTicketButton = document.getElementById("add-student-ticket");
const standardTicketButton = document.getElementById("add-standard-ticket");
const fullTicketButton = document.getElementById("add-full-ticket");
const clearTicketsButton = document.getElementById("clear-tickets");
const ticketList = document.getElementById("ticket-list");
const totalPrice = document.getElementById("total-price");
let total = 0;

function addTicket(name, price) {
  const ticket = document.createElement("li");
  ticket.textContent = `${name} — ${price} ლარი`;
  ticketList.appendChild(ticket);

  total += price;
  totalPrice.textContent = total;
}

studentTicketButton.addEventListener("click", function () {
  addTicket("სტუდენტური", 10);
});

standardTicketButton.addEventListener("click", function () {
  addTicket("სტანდარტული", 20);
});

fullTicketButton.addEventListener("click", function () {
  addTicket("სრული პაკეტი", 30);
});

clearTicketsButton.addEventListener("click", function () {
  ticketList.replaceChildren();
  total = 0;
  totalPrice.textContent = total;
});
