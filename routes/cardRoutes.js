import express from "express";
import {
  createCard,
  getCards,
  deleteCard,
  getCardById,
  updateCard
} from "../controllers/cardController.js";

const router = express.Router();

router.post("/", createCard);
router.get("/", getCards);
router.get("/:id", getCardById);
router.put("/:id", updateCard);
router.delete("/:id", deleteCard);

export default router;
