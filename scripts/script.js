document.getElementById('order-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form data
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const milkshake = document.getElementById('milkshake').value;
  const extras = [...document.querySelectorAll('input[name="extras"]:checked')].map(input => input.value);
  const size = document.querySelector('input[name="size"]:checked') ? document.querySelector('input[name="size"]:checked').value : 'None';
  const food = document.getElementById('food').value;
  const pickupDate = document.getElementById('pickup-date').value;
  const pickupTime = document.getElementById('pickup-time').value;
  const specialInstructions = document.getElementById('special-instructions').value;

  // Format the order details
  const orderDetails = `
      Name: ${name}
      Phone: ${phone}
      Milkshake: ${milkshake}
      Extras: ${extras.join(', ') || 'None'}
      Size: ${size}
      Food: ${food}
      Pickup Date: ${pickupDate}
      Pickup Time: ${pickupTime}
      Special Instructions: ${specialInstructions || 'None'}
  `;

  // Display the order in the pre tag
  document.getElementById('edited-order').textContent = orderDetails;
});

// Load last order functionality (you can enhance with local storage)
document.getElementById('load-order').addEventListener('click', function() {
  alert("This feature is not implemented yet.");
});
