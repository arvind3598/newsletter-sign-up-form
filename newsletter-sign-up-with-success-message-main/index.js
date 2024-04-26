const button = document.querySelector(".button");
const input = document.querySelector(".input");
const mainWrapper = document.querySelector(".main-wrapper");
const popUp = document.querySelector(".succes-msg");
const errorMessage = document.querySelector(".error-message");
const paraContainer = document.querySelector(".para-container");
const dismissButton = document.querySelector(".dismiss");

const resetCSS = () => {
  paraContainer.innerHTML = "";
  errorMessage.style.display = "";
  input.classList.remove("error");
};
const emailChecker = (email) => {
  if (email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    // showing succes message
    mainWrapper.classList.add("small");
    const p = document.createElement("p");
    p.innerText = `A confirmation email has been sent to
          ${email}. Please open it and click the
          button inside to confirm your subscription.`;
    paraContainer.append(p);
    popUp.classList.add("pop-up");
  } else {
    // showing error message
    errorMessage.style.display = "block";
    input.classList.add("error");
  }
};

button.addEventListener("click", () => {
  emailChecker(input.value);
  input.value = "";
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    emailChecker(input.value);
    input.value = "";
  }
});

dismissButton.addEventListener("click", () => {
  popUp.classList.remove("pop-up");
  resetCSS();
  mainWrapper.classList.remove("small");
});
