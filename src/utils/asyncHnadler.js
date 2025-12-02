const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;
/*
This is with the trycatch - upper one is with promices 


const async =(fn)=> async (req, res, next)=>{
    try {
        
    } catch (error) {
        res.send(error.code || 500).json({
            success: false,
            message: error.message
        })
    }

}
*/
