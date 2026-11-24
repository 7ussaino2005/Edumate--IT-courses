function check() {
  var firstName = document.getElementsByName("firstName")[0].value;
  var lastName = document.getElementsByName("lastName")[0].value;
  var phone = document.getElementsByName("phone")[0].value;
  var email = document.getElementsByName("email")[0].value;

  if (firstName.length < 3) {
    alert('first name must be more than 3 characters');
    return false;
  }

  if (lastName.length < 3) {
    alert('last name must be more than 3 characters');
    return false;
  }

  if (phone.length !== 8 || isNaN(phone)) {
    alert('phone number must be exactly 8 digits');
    return false;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert('please enter valid email address');
    return false;
  }

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);

  alert("form submitted successfully");
  window.location.href = "courses.html";
  return false;
}

function subscribeTutor(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: name, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " has been successfully added to your bill.");
}

function loadCart() {
  const cartTable = document.getElementById('cart-body');
  const totalElement = document.getElementById('total');
  cartTable.innerHTML = '';
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;

  cart.forEach((item, index) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;

    const priceCell = document.createElement('td');
    priceCell.textContent = 'BHD ' + item.price.toFixed(3);

    const actionCell = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => removeFromCart(index);
    actionCell.appendChild(removeBtn);

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(actionCell);

    cartTable.appendChild(row);
    total += item.price;
  });

  totalElement.textContent = 'BHD ' + total.toFixed(3);
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

function clearCart() {
  localStorage.removeItem('cart');
  loadCart();
}

function checkout() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  alert("You have successfully paid. Thank you for using Edumate - IT Courses!");
  localStorage.removeItem('cart');
  loadCart();
}

document.addEventListener('DOMContentLoaded', loadCart);

window.onload = function () {
  var firstName = localStorage.getItem("firstName");
  var lastName = localStorage.getItem("lastName");
  if (firstName && lastName) {
    document.getElementById("greeting").textContent = "Welcome, " + firstName + " " + lastName + "!";
  }
};









	

	



