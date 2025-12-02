// this is for the API error  - need to work on this 


class ApiError extends Error {
    constructor (
        statusCode,
        message = "Some thing went wrong",
        errors =[],
        statck = ""
    ){
        super(message)
        .this.statusCode = statusCode  // what is in it assigment 
        this.data =null,
        this.message = message,
        this.success = false,
        this.errors = errors
 
        if(statck){
            this.stack = statck
        } else{
            Error.captureStackTrace(this ,
                this.constructor 
            )
        }
 
 
    }
}

export default ApiError;