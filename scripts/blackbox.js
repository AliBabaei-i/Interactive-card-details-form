// Get form elements
const name = document.getElementById("card-holder-name");
const num = document.getElementById("card-num");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
// Get Cards p
const nameCard = document.getElementById("host-name");
const numCard = document.getElementById("card-number");
const yearCard = document.getElementById("date-year");
const monthCard = document.getElementById("date-month");
const cvcCard = document.getElementById("cvc-num");
// Replace inputs in to the Paragraph
document.getElementById("card-holder-name").addEventListener("input", (e) => {
    nameCard.innerText =
        e.target.value === "" ? "JANE APPLESEED" : e.target.value;
});
num.addEventListener("input", (e) => {
    numCard.innerText =
        e.target.value === "" ? "0000 0000 0000 0000" : e.target.value;
});
month.addEventListener("input", (e) => {
    monthCard.innerText = e.target.value === "" ? "00" : e.target.value;
});
year.addEventListener("input", (e) => {
    yearCard.innerText = e.target.value === "" ? "00/" : e.target.value;
});
cvc.addEventListener("input", (e) => {
    cvcCard.innerText = e.target.value === "" ? "123" : e.target.value;
});

//Function for validation
const validateForm = () => {
    // Clear previous error messages
    const nameError = document.getElementById("name-error");
    const numError = document.getElementById("num-error");
    const monthError = document.getElementById("month-error");
    // const yearError = document.getElementById("year-error");
    const cvcError = document.getElementById("cvc-error");
    nameError.textContent = "";
    numError.textContent = "";
    monthError.textContent = "";
    // yearError.textContent = "";
    cvcError.textContent = "";

    const red = "#FF5050";

    // Validate name input
    if (name.value.trim() === "") {
        name.style.borderColor = red;
        nameError.textContent = "Can’t be blank";
    } else if (/^\d+$/.test(name.value)) {
        name.style.borderColor = red;
        nameError.textContent = "Wrong format";
    } else {
        name.style.borderColor = "transparent";
    }

    // Validate card number input
    if (num.value.trim() === "") {
        num.style.borderColor = red;
        numError.textContent = "Can’t be blank";
    } else if (!/^\d+$/.test(num.value)) {
        num.style.borderColor = red;
        numError.textContent = "Wrong format, numbers only";
    } else {
        num.style.borderColor = "transparent";
    }

    // Validate month input
    if (month.value.trim() === "") {
        month.style.borderColor = red;
        monthError.textContent = "Can’t be blank";
    } else if (!/^\d+$/.test(month.value)) {
        month.style.borderColor = red;
        monthError.textContent = "Wrong format, numbers only";
    } else if (month.value < 1 || month.value > 12) {
        month.style.borderColor = red;
        monthError.textContent = "Month must be between 1 and 12.";
    } else {
        month.style.borderColor = "transparent";
    }
    if (year.value.trim() === "") {
        year.style.borderColor = red;
        monthError.textContent = "Can’t be blank";
    } else if (!/^\d+$/.test(year.value)) {
        year.style.borderColor = red;
        monthError.textContent = "Wrong format, numbers only";
    } else if (year.value.length < 2 || year.value.length > 4) {
        year.style.borderColor = red;
        monthError.textContent = "Year must be between 2 and 4 digits.";
    } else {
        year.style.borderColor = "transparent";
    }

    // Validate year input
    // if (year.value.trim() === "") {
    //     monthError.classList.add("error");
    //     monthError.textContent = "Year cannot be empty.";
    // } else if (!/^\d+$/.test(year.value)) {
    //     monthError.classList.add("error");
    //     monthError.textContent = "Year can only contain numbers.";
    // } else if (year.value.length < 2 || year.value.length > 4) {
    //     monthError.classList.add("error");
    //     monthError.textContent = "Year must be between 2 and 4 digits.";
    // }

    // Validate cvc input
    if (cvc.value.trim() === "") {
        cvc.style.borderColor = red;
        cvcError.textContent = "Can’t be blank";
    } else if (!/^\d+$/.test(cvc.value)) {
        cvc.style.borderColor = red;
        cvcError.textContent = "Wrong format, numbers only";
    } else {
        cvc.style.borderColor = "transparent";
    }

    // If no errors, hide form and show thank you message
    if (
        nameError.textContent === "" &&
        numError.textContent === "" &&
        monthError.textContent === "" &&
        // yearError.textContent === "" &&
        cvcError.textContent === ""
    ) {
        document.getElementById("info-form").style.display = "none";
        document.getElementById("thanks").style.display = "flex";
    }
};

// Add event listener to form submission
document.getElementById("info-form").addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
});
