document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.getElementById('orderForm');

    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();

            let name = document.getElementById('name').value;
            let phone = document.getElementById('phone').value;
            let size = document.getElementById('size').value;
            let quantity = document.getElementById('quantity').value;
            let address = document.getElementById('address').value;

            // Format WhatsApp Message
            let message = `*Naya Order Enquiry - Dharviya Cement Pole*%0A%0A` +
                          `👤 *Naam:* ${name}%0A` +
                          `📞 *Phone:* ${phone}%0A` +
                          `📏 *Pole Size:* ${size}%0A` +
                          `📦 *Quantity:* ${quantity} Pole%0A` +
                          `📍 *Delivery Address:* ${address}`;

            // Target Number Link
            let whatsappURL = `https://wa.me/917898770173?text=${message}`;
            
            // Open WhatsApp in new tab
            window.open(whatsappURL, '_blank');
        });
    }
});