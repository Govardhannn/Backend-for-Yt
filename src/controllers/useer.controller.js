import {asyncHandler} from "asyncHandler"


const registerUser = asyncHandler( async ()=>{
    res.status(200).json({
        message: "Ok"
    })
})

export default registerUser;