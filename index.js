const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

//to access the bopdy

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended: true,
}));
app.use("/", require("./routes/userlogin/test"));
app.listen(port, ()=>{
    console.log(`server listen on port ${port}`);
});