import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.json({
    message: "This is the message sent here for a long time",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Docker is becoming easier and App runing on port ${PORT}`);
});
