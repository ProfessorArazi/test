const signup = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { firstname, lastname, email, password, confirm } =
    Object.fromEntries(formData);

  const errorMessage = "יש להזין את הערכים בשדות בצורה תקינה";
  const spacialSymbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "~",
  ];
  const sendError = () => alert(errorMessage);

  if (!email || !password || !confirm) {
    return alert("יש למלא את כל שדות החובה");
  }

  if (firstname.length === 1 || firstname.length > 20) {
    return sendError();
  }

  if (lastname.length === 1 || lastname.length > 20) {
    return sendError();
  }

  if (!/.+@gmail[.]com|.+@yahoo[.]com/g.test(email)) {
    return sendError();
  }

  if (
    spacialSymbols.every((symbol) => !password.includes(symbol)) ||
    password.length === 1 ||
    password.length > 10 ||
    confirm !== password
  ) {
    return sendError();
  }

  axios
    .post("/signup", { firstname, lastname, email, password })
    .then((res) => {
      if (res.data.message) {
        window.location.href = "/signin.html";
      } else {
        alert("משהו השתבש,נסה שוב מאוחר יותר");
      }
    })
    .catch((err) => alert("משהו השתבש,נסה שוב מאוחר יותר"));
};

const signin = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { email, password } = Object.fromEntries(formData);
  if (!/.+@gmail[.]com|.+@yahoo[.]com/g.test(email)) {
    return alert("משתמש לא קיים");
  }

  axios
    .post("/signin", { email, password })
    .then((res) => {
      if (res.data.message) {
        sessionStorage.setItem("customer", JSON.stringify(email));
        return (window.location.href = "/menu.html");
      }

      alert("הפרטים שהזנת אינם נכונים");
    })
    .catch((err) => alert("משהו השתבש,נסה שוב מאוחר יותר"));
};

const generateOrderPage = (name, price) => {
  sessionStorage.setItem(
    "details",
    JSON.stringify({
      name,
      price,
    })
  );

  window.location.href = "/order.html";
};

document.getElementById("newCustomerBtn").addEventListener("click", () => {
  window.location.href = "/signup.html";
});

document.getElementById("existCustomerBtn").addEventListener("click", () => {
  window.location.href = "/signin.html";
});

document
  .getElementById("bigMeal")
  .addEventListener("click", () =>
    generateOrderPage(`ארוחת המבורגר + צ'יפס ושתייה`, ` 59 ש"ח`)
  );

document
  .getElementById("kidsMeal")
  .addEventListener("click", () =>
    generateOrderPage(`ארוחת ילדים: שניצל + שתייה`, ` 39 ש"ח`)
  );

document
  .getElementById("burger")
  .addEventListener("click", () =>
    generateOrderPage(`המבורגר 220 גרם`, `45 ש"ח`)
  );

document
  .getElementById("vegan")
  .addEventListener("click", () =>
    generateOrderPage(`המבורגר טבעוני`, `40 ש"ח`)
  );

document
  .getElementById("chips")
  .addEventListener("click", () => generateOrderPage(`צ'יפס הבית`, `20 ש"ח`));
