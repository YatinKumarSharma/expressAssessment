const express = require("express");
const rateLimit = require('express-rate-limit');
const { getNotes, createNote, getNoteById, UpdateNote, DeleteNote, searchNotes } = require("../controllers/noteController");
const { protect } = require("../middlewares/authMiddleware")

const router = express.Router()
const limiter = rateLimit({
  windowMs: 1000,
  max: 1, 
});
router.route('/').get([limiter, protect] , getNotes)
router.route('/create').post([limiter, protect] , createNote)
router.route('/:id').get(getNoteById)
router.route("/:id").get(getNoteById).put([limiter, protect],UpdateNote).delete(protect,DeleteNote)
router.route('/search').get(protect, searchNotes);

module.exports = router
