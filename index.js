import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/static", express.static("static"));

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/products", (req, res) => {
  res.json([
    {
      image: "1.jpg",
      name: "T-shirt 1",
      price: 2100,
      article: "T1",
      available: true,
      category: "Мужские",
    },
    {
      image: "2.jpg",
      name: "T-shirt 2",
      price: 3150,
      article: "T2",
      available: true,
      category: "Женские",
    },
    {
      image: "3.jpg",
      name: "T-shirt 3",
      price: 4200,
      article: "T3",
      available: false,
      category: "Женские",
    },
    {
      image: "4.jpg",
      name: "T-shirt 4",
      price: 5300,
      article: "T4",
      available: true,
      category: "Мужские",
    },
    {
      image: "5.jpg",
      name: "T-shirt 5",
      price: 6500,
      article: "T5",
      available: false,
      category: "Женские",
    },
    {
      image: "6.jpg",
      name: "T-shirt 6",
      price: 8700,
      article: "T6",
      available: true,
      category: "Женские",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
