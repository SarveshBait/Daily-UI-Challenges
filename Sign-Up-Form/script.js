    const openModalBtn = document.querySelector('.open-modal-btn');
    const modal = document.getElementById('signupModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const form = document.getElementById('signupForm');
    const confirmation = document.getElementById('confirmationMessage');

    openModalBtn.addEventListener('click', () => {              
        modal.style.display = 'flex';
    });

    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();                                 
        form.style.display = 'none';
        confirmation.style.display = 'block';
    });

    window.addEventListener('click', function (e) {     
        if (e.target === modal) {
            modal.style.display = 'none';
            form.style.display = 'block';
            confirmation.style.display = 'none';
        }
    });
