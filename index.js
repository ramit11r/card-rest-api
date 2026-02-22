import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cardRoutes from "./routes/cardRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/cards", cardRoutes);

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Card API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: white;
            text-align: center;
            padding-top: 80px;
          }
          h1 { color: #38bdf8; }
          a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background: #38bdf8;
            color: black;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <h1>🂡 Playing Card API Running</h1>
        <p>Your REST API is working successfully.</p>
        <a href="/api/cards">View All Cards</a>
      </body>
    </html>
  `);
});

app.listen(3000, () =>
  console.log("Server running on port 3000")
);
app.get("/", (req, res) => {
  console.log("Homepage route hit");
  res.send("Homepage working");
});