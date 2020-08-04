const express = require("express");
const router = express.Router();

const mainPage = require("../handlers/mainPage");
const consumerPage = require("../handlers/consumer");
const creatorPage = require("../handlers/creator");


router.get("/mainPageData",mainPage.main_get);

router.get("/consumer/:creator",consumerPage.get);
router.post("/consumer/:creator",consumerPage.post);

router.get("/:creator",creatorPage.get)
router.put("/:creator",creatorPage.put);
router.patch("/:creator",creatorPage.patch)
router.delete("/:creator",creatorPage.delete);

module.exports = router;