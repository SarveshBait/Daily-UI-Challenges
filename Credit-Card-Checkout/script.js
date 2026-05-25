    const form = document.getElementById('checkoutForm');
    const confirmation = document.getElementById('confirmationMsg');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.style.display = 'none';
        confirmation.style.display = 'block';
    });
