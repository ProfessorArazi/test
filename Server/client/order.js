const mealParagraph = document.getElementById("foodName");
const priceParagraph = document.getElementById("price");

window.onload = () => {
  const { name, price } = JSON.parse(sessionStorage.getItem("details"));
  mealParagraph.innerHTML = name;
  priceParagraph.innerHTML = price;
};

const orderHandler = () => {
  const customer = JSON.parse(sessionStorage.getItem("customer"));
  const meal = mealParagraph.innerHTML;
  const price = parseInt(priceParagraph.innerHTML);
  axios
    .post("/order", { customer, meal, price })
    .then((res) => {
      alert(res.data.message);
      window.location.href = "/menu.html";
    })
    .catch((err) => console.log(err));
};
