// declare variables

const cardHolder = document.getElementById("card-holder-name");
const hostName = document.getElementById("host-name");

const cardNum = document.getElementById("card-num");
const cardNumber = document.getElementById("card-number");

const year = document.getElementById("date-year");
const month = document.getElementById("date-month");

const dateYear = document.getElementById("year");
const dateMonth = document.getElementById("month");

const cvc = document.getElementById("cvc");
const cvcNum = document.getElementById("cvc-num");

const form = document.getElementById("info-form");
const thanks = document.getElementById("thanks");
const red = "#FF5050";
let flag = 0;
// event functions
cardNum.addEventListener("input", (e) => {
    const formattedCardNumber = insertSpace(
        (cardNumber.innerText =
            e.target.value === "" ? "0000000000000000" : e.target.value)
    );
    cardNumber.innerText = formattedCardNumber;
});

const insertSpace = (cardNumber) => {
    const parts = cardNumber.match(/[\s\S]{1,4}/g);
    return parts.join("  ");
};

cardHolder.addEventListener("input", (e) => {
    hostName.innerText =
        e.target.value === "" ? "JANE APPLESEED" : e.target.value;
});

dateYear.addEventListener("input", (e) => {
    year.innerText = e.target.value === "" ? "00/" : `${e.target.value}/ `;
});

dateMonth.addEventListener("input", (e) => {
    month.innerText = e.target.value === "" ? "00" : e.target.value;
});

cvc.addEventListener("input", (e) => {
    cvcNum.innerText = e.target.value === "" ? "000" : `${e.target.value}`;
});

// form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
    if (flag >= 5) {
        form.style.display = "none";
        thanks.style.display = "flex";
    }
});
// validate inputs
const errorMessage = "can't be blank";
const setError = (element, message) => {
    const parentElement = element.parentElement;
    const span = parentElement.querySelector("span");
    span.innerText = message;
    // span.classList.add("error");
    span.style.visibility = "visible";
    parentElement.querySelector("input").style.border = `2px solid${red}`;
};
const setSuccess = (element) => {
    const parentElement = element.parentElement;
    const span = parentElement.querySelector("span");
    span.innerText = "";
    // span.classList.remove("error");
    span.style.visibility = "hidden";
    parentElement.querySelector("input").style.border = "none";
    flag++;
};
const setErrorDatey = (element, message) => {
    const parentElement = element.parentElement;
    const span = parentElement.querySelector("span");
    span.innerText = message;
    // span.classList.add("error");
    span.style.visibility = "visible";
    parentElement.querySelector("#year").style.border = `2px solid${red}`;
};
const setSuccessDatey = (element) => {
    const parentElement = element.parentElement;
    const span = parentElement.querySelector("span");
    span.innerText = "";
    // span.classList.remove("error");
    span.style.visibility = "hidden";
    parentElement.querySelector("#year").style.border = "none";
    flag = flag + 1;
};
const setErrorDatem = (element, message) => {
    const parentElement = element.parentElement;
    const span = parentElement.querySelector("span");
    span.innerText = message;
    // span.classList.add("error");
    span.style.visibility = "visible";
    parentElement.querySelector("#month").style.border = `2px solid${red}`;
};
const setSuccessDatem = (element) => {
    const parentElement = element.parentElement;
    const span = parentElement.querySelector("span");
    span.innerText = "";
    // span.classList.remove("error");
    span.style.visibility = "hidden";
    parentElement.querySelector("#month").style.border = "none";
    flag = flag + 1;
};
const setErrorCvc = (element, message) => {
    const parentElement = element.parentElement;
    const span = parentElement.querySelector("span");
    span.innerText = message;
    // span.classList.add("error");
    span.style.visibility = "visible";
    parentElement.querySelector("input").style.border = `2px solid${red}`;
};
const setSuccessCvc = (element) => {
    const parentElement = element.parentElement;
    const span = parentElement.querySelector("span");
    span.innerText = "";
    // span.classList.remove("error");
    span.style.visibility = "hidden";
    parentElement.querySelector("input").style.border = "none";
    flag++;
};
const validate = () => {
    if (cardHolder.value == "") {
        setError(cardHolder, errorMessage);
    } else {
        setSuccess(cardHolder);
    }
    if (cardNum.value == "") {
        setError(cardNum, errorMessage);
    } else if (isNaN(parseFloat(cardNum.value))) {
        setError(cardNum, "Wrong format, numbers only");
    } else if (cardNum.value.length < 16) {
        setError(cardNum, "at least 16 number");
    } else if (cardNum.value.includes(" ")) {
        setError(
            cardNum,
            "Please Check Your Fields For Spaces or special characters"
        );
    } else if (
        cardNum.value.includes("!") ||
        cardNum.value.includes("#") ||
        cardNum.value.includes("$") ||
        cardNum.value.includes("%") ||
        cardNum.value.includes("^") ||
        cardNum.value.includes("&") ||
        cardNum.value.includes("*") ||
        cardNum.value.includes("(") ||
        cardNum.value.includes(")") ||
        cardNum.value.includes("_") ||
        cardNum.value.includes("-") ||
        cardNum.value.includes("+") ||
        cardNum.value.includes("=")
    ) {
        setError(cardNum, "Please Check Your Fields For Spaces");
    } else {
        setSuccess(cardNum);
    }
    if (dateMonth.value == "") {
        setErrorDatem(dateMonth, errorMessage);
    } else if (isNaN(parseFloat(dateMonth.value))) {
        setError(dateMonth, "Wrong format");
    } else {
        setSuccessDatem(dateMonth);
    }
    if (dateYear.value == "") {
        setErrorDatey(dateYear, errorMessage);
    } else if (isNaN(parseFloat(dateYear.value))) {
        setError(dateYear, "Wrong format");
    } else {
        setSuccessDatey(dateYear);
    }
    if (cvc.value == "") {
        setErrorCvc(cvc, errorMessage);
    } else if (isNaN(parseFloat(cvc.value))) {
        setError(cvc, "Wrong format, numbers only");
    } else {
        setSuccessCvc(cvc);
    }
    console.log(flag);
};

