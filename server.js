const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/generateName", (req, res) => {
  const names = ["Pista", "Béla"];
  const selectedName = names[Math.floor(Math.random() * names.length)];
  try {
    const { cardNumber, cardHolderName, cardExpiryDate, cardCvc } = req.body;
    console.log("Received card details:", {
      cardNumber,
      cardHolderName,
      cardExpiryDate,
      cardCvc,
    });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return res.status(400).json({ error: "Invalid request body" });
  }

  return res.json({ name: selectedName });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
