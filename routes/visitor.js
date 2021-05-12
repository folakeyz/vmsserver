const express = require('express');
const { getVisitor, createVisitor, updateVisitor,  getVisitors, deleteVisitor} = require('../controllers/visitor');
const router = express.Router();

router.route('/').get(getVisitors).post(createVisitor);
router.route('/:id').get(getVisitor).put(updateVisitor).delete(deleteVisitor);


module.exports = router;