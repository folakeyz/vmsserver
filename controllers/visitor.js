const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Visitor = require('../models/visitor');
// @desc    Get all visitors
// @route   GET/api/v1/visitors
// @access   Public
exports.getVisitors = asyncHandler(async (req, res, next) => {
    const visitors = await Visitor.find();
    res.status(200).json({success: true, count:visitors.length, data:visitors});
});


// @desc    Get single visitors
// @route   GET/api/v1/visitors/:id
// @access   Public
exports.getVisitor = asyncHandler(async(req, res, next) => {
    
        const visitor = await Visitor.findById(req.params.id);
        if(!visitor){
           return next(new ErrorResponse(`visitor not found with id of ${req.params.id}`, 404)); 
        }
        res.status(200).json({success: true, data:visitor});
});

// @desc    Create visitors
// @route   POST/api/v1/visitors/
// @access   Private
exports.createVisitor =  asyncHandler(async (req, res, next) => {
        const visitor =  await Visitor.create(req.body);
        res.status(201).json({
            success: true,
            data: visitor
        });
  
});

// @desc    Update visitors
// @route   PUT/api/v1/visitors/:id
// @access   Private
exports.updateVisitor =  asyncHandler(async (req, res, next) => {
   
        const visitor = await Visitor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true 
        });
        if(!visitor){
            return next(new ErrorResponse(`visitor not found with id of ${req.params.id}`, 404)); ;
        }
        res.status(200).json({success: true, data:visitor});
    
  
});

// @desc    Deletevisitors
// @route   DelETE/api/v1/visitors/:id
// @access   Private
exports.deleteVisitor =  asyncHandler( async (req, res, next) => {

        const visitor = await Visitor.findByIdAndDelete(req.params.id);
        if(!visitor){
            return next(new ErrorResponse(`visitor not found with id of ${req.params.id}`, 404)); ; 
        }
        res.status(200).json({success: true, data:{}});
   
  
});