const jwt = require("jsonwebtoken");

function jwtGen(userid){
    const payload = {
        userid: userid,
    }
    return jwt.sign(payload, "Mountain website by ethicswalacoder", {expiresIn:"1hr"});
}
module.exports = jwtGen;