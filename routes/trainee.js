const router = require('express').Router();


router.get("/", (req, res, next) => {});

// grabing specific note
router.get("/:id", (req, res, next) => {});

// adding note
router.post("/", (req, res, next) => {});

// updating specific note
router.post("/:id", (req, res, next) => {});

// deleting specific note
router.delete("/:id", (req, res, next) => {});

// deleting all note
router.delete("/", (req, res, next) => {});


module.exports = router;