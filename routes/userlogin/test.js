const router = require("express").Router();
const pool = require("../../db");
const login = require("../loginauth/login");
const jwtgen = require("../utils/jwtgen");
const bcrypt = require("bcrypt");


//To POST Request
router.post("/postuser",login, async(req, res)=>{
    const {userName, passWord} = req.body;
    try {
        //check all conditions
        // if(userName.length<4){
       
        //     res.json("The username is too short enter minimum four character!");
        // }
        // else if(passWord.length<8){
        //     res.json("The password is too short enter minimum eight character!");
        // }
        const chkpassword = await pool.query("SELECT password FROM userlogin WHERE username=$1",[userName])
            const passCompare = bcrypt.compare(passWord, user.passWord);
            if(!passCompare){
                return res.status(400).json({error:"Please try to login with correct creadential"});
            } else{

            
       
            const user = await pool.query("INSERT INTO userlogin (username, password) VALUES ($1,$2) returning *", [userName, passWord]);
            res.json(`${user.rows[0].userid} userid created successfully!`);
            }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("something went wrong");
    }
})

//To GET Request
router.get("/getuser", async(req, res)=>{
    try {
        const user = await pool.query("SELECT * FROM userlogin");
        res.json(user.rows);
        
    } catch (err) {
        console.log(err.message);
        res.status(500).send("some thing went wrong");
        
    }
})

// POST Request for jwtlogin
router.post("/postjwtlogin", async(req, res)=> {
    try {
       
        //1. Destructure req.body
        const {userName, passWord} = req.body;
        //2.check if username exist in database
        const checkUser = await pool.query("SELECT * FROM userlogin WHERE username = $1", [userName]);
        //*Compare password with the hasing password.
        const passCompare = bcrypt.compare(passWord, checkUser.rows[0].password);
        if(checkUser.rows.length === 0){
            res.json("Username or Password is incorrect");
        }
        //3. check if password of the user matches or not
       
       
        else if(!passCompare ){
            res.json("Username or Passord is incorrect");
        }
        //4. give JWT TOKEN
        else{
            const mountainjwt = jwtgen(checkUser.rows[0].userid);
            res.json({mountainjwt});
        }
        
    } catch (err) {
        console.log(err.message);
        res.status(500).send("something went wrong");
        
    }
})



//To POST request for SignIn

router.post("/usersignin", async(req, res)=>{
    try {
        const {userName, passWord, emailId} = req.body;
        const checkuserid = await pool.query("SELECT userid FROM userlogin WHERE username=$1",[userName]);
        if(checkuserid.rows.length>0){
          return  res.status(400).json("User ALredy Exists!");
           
        }else {
            //Generating Salt
            const salt = await bcrypt.genSalt(10);
           const  secPass = await bcrypt.hash(passWord, salt);
            //Crete an user
            const user = await pool.query("INSERT INTO userlogin (username, password, emailid) VALUES ($1, $2, $3) returning *",[userName, secPass, emailId]);
         res.status(200).json(`${user.rows[0].userid} userid created successfully!`);
        
           
        }
        
    } catch (err) {
       console.log(err.message);
       res.status(500).send("Something went wrong"); 
    }
})


module.exports = router;