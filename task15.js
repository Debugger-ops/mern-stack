// const form = document.getElementById('form')
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     if(username.trim() === '') {
//         alert('Please enter a username');
//     } else {
//         alert(`Username submitted: ${username}`);
//     }

//     const password = document.getElementById('password').value;
//     if(password.trim() === '') {
//         alert('Please enter a password');
//     } else {
//         alert(`Password submitted: ${password}`);
//     }   
// });

// regular XPathExpression
// /.     /


// const name1 = /helloIndia/
// console.log(RegExp.leftContext(name))

//form validation in js
// name,
// email,
// phone,
// password,
// gender,
// checkbox,
// address,
// dob,

// submit

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let isValid = true;
 
  function showError(id, message) {
    document.getElementById(id + 'Error').textContent = message;
    const input = document.getElementById(id);
    if (input) input.classList.add('error');
    isValid = false;
  }
 
  function clearError(id) {
    document.getElementById(id + 'Error').textContent = '';
    const input = document.getElementById(id);
    if (input) input.classList.remove('error');
  }
 
  // reset all errors
  ['name', 'email', 'phone', 'password', 'gender', 'address', 'dob', 'terms']
    .forEach(clearError);
 
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const address = document.getElementById('address').value.trim();
  const dob = document.getElementById('dob').value;
  const terms = document.getElementById('terms').checked;
 
  // Name: letters and spaces only, min 2 chars
  if (name === '') {
    showError('name', 'Name is required.');
  } else if (!/^[A-Za-z\s]{2,}$/.test(name)) {
    showError('name', 'Name must be at least 2 letters, no numbers or symbols.');
  }
 
  // Email
  if (email === '') {
    showError('email', 'Email is required.');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('email', 'Enter a valid email address.');
  }
 
  // Phone: exactly 10 digits. start with 6,7,8,9
  if (phone === '') {
    showError('phone', 'Phone number is required.');

  }else if (!/^[6-9][0-9]{9}$/.test(phone)) {
    showError('phone', 'Enter a valid 10-digit phone number.');
  }
   else if (!/^\d{10}$/.test(phone)) {
    showError('phone', 'Enter a valid 10-digit phone number.');
  }
 
  // Password: min 8 chars, at least 1 uppercase, 1 lowercase, 1 number
  if (password === '') {
    showError('password', 'Password is required.');
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
    showError('password', 'Min 8 characters, with uppercase, lowercase & a number.');
  }
 
  // Gender
  if (!gender) {
    showError('gender', 'Please select a gender.');
  }
 
  // Address
  if (address === '') {
    showError('address', 'Address is required.');
  } else if (address.length < 5) {
    showError('address', 'Address must be at least 5 characters.');
  }
 
  // Date of birth: required + must be 18+ years old
  if (dob === '') {
    showError('dob', 'Date of birth is required.');
  } else {
    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) age--;
    if (dobDate > today) {
      showError('dob', 'Date of birth cannot be in the future.');
    } else if (age < 18) {
      showError('dob', 'You must be at least 18 years old.');
    }
  }
 
  // Terms checkbox
  if (!terms) {
    showError('terms', 'You must agree to the terms.');
  }
 
  const successMsg = document.getElementById('successMsg');
  if (isValid) {
    successMsg.style.display = 'block';
    this.reset();
    setTimeout(() => { successMsg.style.display = 'none'; }, 3000);
  } else {
    successMsg.style.display = 'none';
  }
});
 
// live-clear error on input
['name', 'email', 'phone', 'password', 'address', 'dob'].forEach(id => {
  document.getElementById(id).addEventListener('input', function () {
    this.classList.remove('error');
    document.getElementById(id + 'Error').textContent = '';
  });
});
document.querySelectorAll('input[name="gender"]').forEach(r => {
  r.addEventListener('change', () => {
    document.getElementById('genderError').textContent = '';
  });
});
document.getElementById('terms').addEventListener('change', function () {
  document.getElementById('termsError').textContent = '';
});