document.addEventListener("DOMContentLoaded", function() {
    const quantityInput = document.getElementById('quantity');
    const totalAmountDisplay = document.getElementById('totalAmount');
    const orderForm = document.getElementById('orderForm');
    const fixedPrice = 450; // Fixed Rate ₹450 per pole

    function calculateTotal() {
        const quantity = quantityInput.value || 0;
        const total = fixedPrice * quantity;
        totalAmountDisplay.innerText = `₹${total.toLocaleString('en-IN')}`;
        return total;
    }

    if (quantityInput) {
        quantityInput.addEventListener('input', calculateTotal);
    }

    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();

            let name = document.getElementById('name').value;
            let phone = document.getElementById('phone').value;
            let quantity = quantityInput.value;
            let total = calculateTotal();
            let address = document.getElementById('address').value;

            let message = `*Naya Order Enquiry - Dharviya Fencing Pole*%0A%0A` +
                          `👤 *Naam:* ${name}%0A` +
                          `📞 *Phone:* ${phone}%0A` +
                          `📦 *Quantity:* ${quantity} Fencing Pole%0A` +
                          `💰 *Total Estimated Amount (@ ₹450/Pc):* ₹${total.toLocaleString('en-IN')}%0A` +
                          `📍 *Delivery Address:* ${address}`;

            let whatsappURL = `https://wa.me/917617227577?text=${message}`;
            window.open(whatsappURL, '_blank');
        });
    }
});