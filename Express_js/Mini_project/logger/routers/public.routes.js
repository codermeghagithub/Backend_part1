import { Router } from "express";
import { generateToken } from "../utils/token-utils.js";
const router = Router();

// here we create generate token endpoint
router.get("/generate-token", (req, res) => {
  // todo: calling utils method to create a random token
  const token = generateToken();

  res.status(200).json({
    message: "Token generated please save it for the future use ",
    data: token,
  });
});

// home route
router.get("/", (req, res) => {
  // * this is anoter endpoint
  res.status(200).json({ message: "Welcome to home page" });
});

export default router;
