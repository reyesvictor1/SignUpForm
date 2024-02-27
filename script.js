const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const createAccountBtn = document.querySelector("#create-account-btn");
const passwordErrorText = document.querySelector("#password-error-text");

createAccountBtn.addEventListener("click", () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        
        passwordInput.classList.add("error");
        passwordErrorText.classList.remove("hidden");
        confirmPasswordInput.classList.add("error");
        
        passwordInput.value = "";
        confirmPasswordInput.value = "";
    } else {
        passwordInput.classList.remove("error");
        passwordErrorText.classList.add("hidden");
        confirmPasswordInput.classList.remove("error");
    }
})