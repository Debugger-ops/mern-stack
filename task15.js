// Form validation
// Fields: name, email, phone, password, gender, address, dob, terms

const form = document.getElementById('myForm');
const successMsg = document.getElementById('successMsg');

// Fields validated with a simple text/textarea input + matching <id>Error span
const TEXT_FIELD_IDS = ['name', 'email', 'phone', 'password', 'address', 'dob'];

const PATTERNS = {
  name: /^[A-Za-z\s]{2,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[6-9]\d{9}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
  address: /^[A-Za-z0-9\s,.-]{5,}$/,
};

function showError(id, message) {
  const errorEl = document.getElementById(id + 'Error');
  if (errorEl) errorEl.textContent = message;

  const input = document.getElementById(id);
  if (input) input.classList.add('error');
}

function clearError(id) {
  const errorEl = document.getElementById(id + 'Error');
  if (errorEl) errorEl.textContent = '';

  const input = document.getElementById(id);
  if (input) input.classList.remove('error');
}

function clearAllErrors() {
  [...TEXT_FIELD_IDS, 'gender', 'terms'].forEach(clearError);
}

function validateName(value) {
  if (value === '') return 'Name is required.';
  if (!PATTERNS.name.test(value)) return 'Name must be at least 2 letters, no numbers or symbols.';
  return '';
}

function validateEmail(value) {
  if (value === '') return 'Email is required.';
  if (!PATTERNS.email.test(value)) return 'Enter a valid email address.';
  return '';
}

function validatePhone(value) {
  if (value === '') return 'Phone number is required.';
  if (!PATTERNS.phone.test(value)) return 'Enter a valid 10-digit phone number starting with 6-9.';
  return '';
}

function validatePassword(value) {
  if (value === '') return 'Password is required.';
  if (!PATTERNS.password.test(value)) return 'Min 8 characters, with uppercase, lowercase & a number.';
  return '';
}

function validateAddress(value) {
  if (value === '') return 'Address is required.';

  if (!PATTERNS.address.test(value)) {
    return 'Enter a valid address.';
  }

  return '';
}

function validateDob(value) {
  if (value === '') return 'Date of birth is required.';

  const dobDate = new Date(value);
  const today = new Date();

  if (dobDate > today) return 'Date of birth cannot be in the future.';

  let age = today.getFullYear() - dobDate.getFullYear();
  const monthDiff = today.getMonth() - dobDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
    age--;
  }
  if (age < 18) return 'You must be at least 18 years old.';

  return '';
}

const VALIDATORS = {
  name: validateName,
  email: validateEmail,
  phone: validatePhone,
  password: validatePassword,
  address: validateAddress,
  dob: validateDob,
};

function validateField(id) {
  const input = document.getElementById(id);
  const message = VALIDATORS[id](input.value.trim());
  if (message) {
    showError(id, message);
    return false;
  }
  clearError(id);
  return true;
}

function validateGender() {
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    showError('gender', 'Please select a gender.');
    return false;
  }
  clearError('gender');
  return true;
}

function validateTerms() {
  const terms = document.getElementById('terms').checked;
  if (!terms) {
    showError('terms', 'You must agree to the terms.');
    return false;
  }
  clearError('terms');
  return true;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  clearAllErrors();

  // Run every validator; use of & (not &&) intentionally avoided here so all
  // fields are checked even after the first failure (short-circuiting would
  // skip later validations and hide multiple errors from the user at once).
  const results = [
    ...TEXT_FIELD_IDS.map(validateField),
    validateGender(),
    validateTerms(),
  ];
  const isValid = results.every(Boolean);

  if (isValid) {
    successMsg.style.display = 'block';
    form.reset();
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 3000);
  } else {
    successMsg.style.display = 'none';
  }
});

// Live-clear error as the user fixes a field
TEXT_FIELD_IDS.forEach((id) => {
  document.getElementById(id).addEventListener('input', () => clearError(id));
});

document.querySelectorAll('input[name="gender"]').forEach((radio) => {
  radio.addEventListener('change', () => clearError('gender'));
});

document.getElementById('terms').addEventListener('change', () => clearError('terms'));