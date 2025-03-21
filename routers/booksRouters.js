import express from "express";
import * as contoller from "../controllers/booksController.js";
//import { getbooks, getbooksbyid, } from "../controllers/booksController"; <-- másik megoldás

const router = express.Router();

router.get("/", contoller.getbooks);

router.get("/:id", contoller.getbooksbyid);

router.post("/", contoller.createbook);

router.put("/:id", contoller.updatebook);

router.delete("/:id", contoller.deletebook);

export default router;
