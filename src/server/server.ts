import express from "express";
import os from "node:os";

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "8080";
const server = express();

server.use(express.static("public"));
server.set("view engine", "ejs");

server.use("/", (req, res, next) => {
  res.render("index", {
    content: "Injeced content",
  });
});

server.listen("8080", "0.0.0.0", () => {
  console.info(
    `Express server is listening at port https://${HOST}:${PORT}`,
    `Freemem: ${os.freemem() / 1024 / 1024}`,
  );
});
