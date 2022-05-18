const express = require("express");
const db = require("mongoose");
const app = express();
const port = 8080;

// חיבור למאגר מידע

db.connect("mongodb://127.0.0.1:27017/newdb", () => {
  console.log("db on");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("client")); //  html,css,js מציג את תיקיית קליינט שמחזיקה בתוכה כמה קבצי

// דוגמה לסכמות

const customer = db.Schema({
  firstname: String,

  lastname: String,

  email: { type: String, required: true },

  password: { type: String, required: true },
});

const order = db.Schema({
  customer: String,
  meal: String,
  price: Number,
});

// דוגמה ליצירת מודלים

const customers = db.model("customer", customer);
const orders = db.model("order", order);

// דוגמה לבקשות פוסט

app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const customer = {
    firstname,
    lastname,
    email,
    password,
  };

  try {
    await customers.insertMany(customer);
    res.send({ message: "customer added" });
  } catch (error) {
    res.send({ error });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    let customer = (await customers.find({ email }))[0];
    console.log(customer);
    if (customer.password === password) {
      return res.send({ message: "autenticated" });
    }

    res.send({ error: "unautenticated" });
  } catch (error) {
    res.send({ error });
  }
});

app.post("/order", async (req, res) => {
  const { customer, meal, price } = req.body;
  try {
    await orders.insertMany({ customer, meal, price });
    res.send({ message: "ההזמנה התקבלה בהצלחה" });
  } catch (err) {
    res.send({ message: "משהו השתבש" });
  }
});

// מפעיל את השרת

app.listen(port, console.log(`listening on port ${port}`));
