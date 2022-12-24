const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))  //if we want all route handlers to have this middleware function to be applied
app.use(cookieSession({
    keys:['randomstring1693']
}));
app.use(authRouter);

app.listen(3000, ()=>{
    console.log("listening")
});