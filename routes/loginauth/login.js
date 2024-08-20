const jwt = require("jsonwebtoken");


//generate middleware
module.exports = async(req, res, next)=>{
    try {
        const jwtToken = await req.header("mountainjwt");
        if(!jwtToken){
            return res.status(403).json("not authorised");
        }else{
            const payload = jwt.verify(jwtToken, "Mountain website by ethicswalacoder");
            req.user = payload.userid;
        }
        next();
        
    } catch (err) {
        console.log(err.message);
        return res.status(403).json("not authorised");
    }
}