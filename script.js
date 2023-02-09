const login_class = document.querySelector(".login")
const signup_class = document.querySelector(".signup")
const mobile_bar = document.querySelector(".mobile_bar")
const main = document.querySelector(".main")

mobile_bar.addEventListener("click", function () {
    main.classList.toggle("fixedBody")
    mobile_bar.classList.toggle("active")
    console.log(main)
})

function showSignupForm() {
    login_class.style.display = "none"
    signup_class.style.display = "flex"
}

function hideSignupForm() {
    login_class.style.display = "flex"
    signup_class.style.display = "none"
}

const show_signup_form = document.getElementById("show_signup_form")
show_signup_form.addEventListener("click", showSignupForm)

const hide_signup_form = document.getElementById("hide_signup_form")
hide_signup_form.addEventListener("click", hideSignupForm)