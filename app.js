const sign_in_link = document.querySelector("#sign-in-link");
const sign_up_link = document.querySelector("#sign-up-link");
const container = document.querySelector(".container");
sign_up_link.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
})
sign_in_link.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
})