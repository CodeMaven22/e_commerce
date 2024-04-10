const cartMenu = document.querySelector('#cartMenubar')
const Menu = document.querySelector('#sideMenu')

cartMenu.addEventListener("click", () => {
    Menu.classList.toggle('-translate-y-full');
})

Menu.addEventListener("click", () => {
    Menu.classList.add('-translate-y-full');
})


// form validation
function formValidation(event){
    event.preventDefault(); // Prevent form submission

    let userNameID = document.getElementById('username_id').value;
    let emailID = document.getElementById('email_id').value;
    let messageID = document.getElementById('message_id').value;
    let numberID = document.getElementById('number_id').value;

    if(userNameID.trim() === ''){
        document.querySelector('.error-username').classList.remove('hidden'); 
    }else {
        document.querySelector('.error-username').classList.add('hidden');
    }

    if(emailID.trim() === ''){
        document.querySelector('.error-email').classList.remove('hidden');
    } else if (!isValidEmail(emailID)) {
        document.querySelector('.error-email').classList.remove('hidden');
        document.querySelector('.error-email').textContent = '*Please provide a valid email';
    } else {
        document.querySelector('.error-email').classList.add('hidden');
    }

    if(numberID.trim() === ''){
        document.querySelector('.error-phone').classList.remove('hidden');
    } else if (!isValidPhoneNumber(numberID)) {
        document.querySelector('.error-phone').classList.remove('hidden');
        document.querySelector('.error-phone').textContent = '*Please provide a valid phone number';
    } else {
        document.querySelector('.error-phone').classList.add('hidden');
    }
    
    if(messageID.trim() === ''){
        document.querySelector('.error-message').classList.remove('hidden');
    }else {
        document.querySelector('.error-message').classList.add('hidden');
    }

    if (userNameID !== '' && isValidEmail(emailID) && numberID !== '' && messageID !== '') {
        alert('Message sent');
    }
}

// email validation check 
function isValidEmail(email){
    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

// phone number validation check
function isValidPhoneNumber(phoneNumber) {
    // Regular expression for Malawi phone number validation
    const phoneRegex = /^\+265\d{9}$/;
    return phoneRegex.test(phoneNumber);
}



//modal class
let addItemToCart=document.getElementById('add-item');
let addItemDetails=document.getElementById('modal-wrapper');
let addItemDetailsExit = document.getElementById('svg-modal-exit');


addItemToCart.addEventListener('click', () =>{
    addItemDetails.classList.remove('hidden');
});

addItemDetailsExit.addEventListener('click', ()=>{
    addItemDetails.classList.add('hidden');
})
