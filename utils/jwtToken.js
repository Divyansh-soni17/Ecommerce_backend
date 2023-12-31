//Create token and saving in cookie
const sendToken=(user,statusCode,res)=>{
    const token = user.getJWTToken();
    console.log(token);
    //Options for cookie
    const options ={
        expires: new Date(
            Date.now()+process.env.COOKIE_EXPIRE * 24 * 60 *60 *1000
        ),
        httpOnly:false,
        secure: process.env.NODE_ENV === 'PRODUCTION',
        sameSite: 'none',
    };
    res.status(statusCode).cookie('token',token,options).json({
        success:true,
        user,
        token,
    })

}
export default sendToken;