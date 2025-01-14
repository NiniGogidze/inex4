function validateForm() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordStrength = document.getElementById('passwordStrength');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "ელ. ფოსტა უნდა შეიცავდეს @ და .";
        return false;
    } else {
        emailError.textContent = "";
    }

    const strength = checkPasswordStrength(password);
    passwordStrength.textContent = strength.message;
    passwordStrength.className = 'strength ' + strength.level;

    if (password !== confirmPassword) {
        alert("პაროლები არ ემთხვევა!");
        return false;
    }

    return true;
}

function checkPasswordStrength(password) {
    const regWeak = /^[a-z]+$/;  
    const regMedium = /^(?=.*[a-z])(?=.*\d)[a-z\d]+$/;
    const regStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;

    if (regWeak.test(password)) {
        return { level: 'weak', message: 'პაროლი სუსტი' };
    } else if (regMedium.test(password)) {
        return { level: 'medium', message: 'პაროლი საშუალო სიმძლავრისაა' };
    } else if (regStrong.test(password)) {
        return { level: 'strong', message: 'პაროლი ძლიერი' };
    } else {
        return { level: 'weak', message: 'პაროლი სუსტი' };
    }
}