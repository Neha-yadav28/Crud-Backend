const students = require("../controllers/student.controller.js");
const express=require("express");
const router = express.Router();

//get all students
router.get("/", students.findAll);  

router.post("/", students.create);  

// Delete a Tutorial with id
router.delete("/:id", students.delete);  

// Update a Tutorial with id
router.put("/:id", students.update);  

router.get("/:name", students.filter);

module.exports =router;